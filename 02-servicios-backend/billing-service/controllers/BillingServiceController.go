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
	return nil, errors.New("no implementado")
}
