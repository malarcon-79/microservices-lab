package controllers

import (
	"context"
	"errors"
	"time"

	pb "github.com/malarcon-79/microservices-lab/grpc-protos-go/system/billing"
	"github.com/malarcon-79/microservices-lab/orm-go/dao"
	"github.com/malarcon-79/microservices-lab/orm-go/model"
	"github.com/shopspring/decimal"
	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type BillingServiceController struct {
	logger *zap.SugaredLogger
}

func NewBillingServiceController() (BillingServiceController, error) {
	_logger, _ := zap.NewProduction()
	logger := _logger.Sugar()
	instance := BillingServiceController{
		logger: logger,
	}
	return instance, nil
}

func (c *BillingServiceController) CreateInvoice(ctx context.Context, msg *pb.Invoice) (*pb.Invoice, error) {
	orm := dao.DB.Model(&model.Invoice{})

	invoice := &model.Invoice{
		Period:        msg.Period,
		ClientId:      msg.ClientId,
		InvoiceStatus: true,
		DateCreated:   time.Now(),
		Details:       msg.Details,
		TotalCharge:   decimal.NewFromInt(0),
	}
	if err := orm.Save(invoice).Error; err != nil {
		c.logger.Error("no se pudo guardar la factura nueva", err)
		return nil, errors.New("error al guardar")
	}

	msg.Id = invoice.ID
	return msg, nil
}

func (c *BillingServiceController) UpdateInvoice(ctx context.Context, msg *pb.Invoice) (*pb.Invoice, error) {
	return nil, errors.New("no implementado")
}

func (c *BillingServiceController) AddItem(ctx context.Context, msg *pb.InvoiceItemAdd) (*pb.Invoice, error) {
	return nil, errors.New("no implementado")
}

func (c *BillingServiceController) DeleteItem(ctx context.Context, msg *pb.InvoiceItemAdd) (*pb.Invoice, error) {
	return nil, errors.New("no implementado")
}

func (c *BillingServiceController) GetInvoices(ctx context.Context, msg *pb.InvoiceFilter) (*pb.Invoices, error) {
	orm := dao.DB.Model(&model.Invoice{})

	invoices := []*model.Invoice{}
	filter := &model.Invoice{
		Period:        msg.Period,
		ClientId:      msg.ClientId,
		InvoiceStatus: msg.InvoiceStatus,
	}
	if err := orm.Preload("InvoiceItems").Find(&invoices, filter).Error; err != nil {
		c.logger.Errorf("no se pudo buscar facturas con filtros %v", filter, err)
		return nil, status.Errorf(codes.Internal, "no se pudo realizar query")
	}

	result := &pb.Invoices{}

	for _, item := range invoices {
		invoiceItems := []*pb.InvoiceItem{}
		for _, i := range item.InvoiceItems {
			invoiceItems = append(invoiceItems, &pb.InvoiceItem{
				Id:        i.ID,
				InvoiceId: i.InvoiceId,
				Details:   i.Details,
				Amount:    i.Amount.InexactFloat64(),
			})
		}

		result.Invoices = append(result.Invoices, &pb.Invoice{
			Id:            item.ID,
			Period:        item.Period,
			ClientId:      item.ClientId,
			InvoiceStatus: item.InvoiceStatus,
			DateCreated:   timestamppb.New(item.DateCreated),
			Details:       item.Details,
			TotalCharge:   item.TotalCharge.InexactFloat64(),
			InvoiceItems:  invoiceItems,
		})
	}

	return result, nil
}
