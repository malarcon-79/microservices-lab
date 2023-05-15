package controllers

import (
	"context"
	"errors"
	"regexp"
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

// Controlador de servicio gRPC
type BillingServiceController struct {
	logger *zap.SugaredLogger // Logger
	re     *regexp.Regexp     // Expresión regular para validar formato de períodos YYYY-MM
}

// Método a nivel de package, permite construir una instancia correcta del controlador de servicio gRPC
func NewBillingServiceController() (BillingServiceController, error) {
	_logger, _ := zap.NewProduction() // Generamos instancia de logger
	logger := _logger.Sugar()

	re, err := regexp.Compile(`^\d{4}\-(0?[1-9]|1[012])$`) // Expresión regular para validar períodos YYYY-MM
	if err != nil {
		return BillingServiceController{}, err
	}

	instance := BillingServiceController{
		logger: logger, // Asignamos el logger
		re:     re,     // Asignamos el RegExp precompilado
	}
	return instance, nil // Devolvemos la nueva instancia de este Struct
}

// Método que genera una factura (registro maestro)
func (c *BillingServiceController) CreateInvoice(ctx context.Context, msg *pb.Invoice) (*pb.Invoice, error) {
	// Con esta línea instanciamos el ORM para trabajar con la tabla "Invoice"
	orm := dao.DB.Model(&model.Invoice{})

	// Validaciones, deberían venir validados por las API de Front pero validamos nuevamente

	if len(msg.Period) == 0 {
		return nil, errors.New("período nulo")
	}
	if !c.re.MatchString(msg.Period) {
		return nil, errors.New("período inválido")
	}
	if len(msg.ClientId) == 0 {
		return nil, errors.New("ID de cliente nulo")
	}

	// Creamos el modelo de datos para almacenamiento
	invoice := &model.Invoice{
		Period:        msg.Period,
		ClientId:      msg.ClientId,
		InvoiceStatus: true,
		DateCreated:   time.Now(),
		Details:       msg.Details,
		TotalCharge:   decimal.NewFromInt(0),
	}
	// Ejecutamos el INSERT y evaluamos si hubo errores
	if err := orm.Save(invoice).Error; err != nil {
		c.logger.Error("no se pudo guardar la factura nueva", err)
		return nil, errors.New("error al guardar")
	}

	// Asignamos el ID autogenerado a la respuesta
	msg.Id = invoice.ID
	// Retornamos la respuesta correcta
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

// Método que obtiene facturas mediante criterio de búsqueda
func (c *BillingServiceController) GetInvoices(ctx context.Context, msg *pb.InvoiceFilter) (*pb.Invoices, error) {
	// Con esta línea instanciamos el ORM para trabajar con la tabla "Invoice"
	orm := dao.DB.Model(&model.Invoice{})

	// Arreglo de punteros a registros de tabla "Invoice"
	invoices := []*model.Invoice{}
	// Creamos el filtro de búsqueda usando los campos del mismo modelo
	filter := &model.Invoice{
		Period:        msg.Period,
		ClientId:      msg.ClientId,
		InvoiceStatus: msg.InvoiceStatus,
	}
	// Ejecutamos el SELECT con un Inner Join (instrucción Preload) sobre la relación y evaluamos si hubo errores
	if err := orm.Preload("InvoiceItems").Find(&invoices, filter).Error; err != nil {
		c.logger.Errorf("no se pudo buscar facturas con filtros %v", filter, err)
		return nil, status.Errorf(codes.Internal, "no se pudo realizar query")
	}

	// Este será el mensaje de salida
	result := &pb.Invoices{}

	// Iteramos el arreglo de registros del SELECT anterior.
	// En Go, la instrucción "for range" nos permite recorrer estructuras iterables de forma simple.
	// El primer elemento es el índice, y el segundo es el ítem iterado.
	// La instrucción "_" (guión bajo) indica que se puede ignorar la asignación de ese valor
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
	// Se completó el ciclo de transformación de datos desde el modelo ORM al mensaje gRPC
	// Si ambas estructuras coinciden a nivel de definición JSON, podemos hacer conversiones directas sin este tipo de ciclos

	// Retornamos la respuesta correcta
	return result, nil
}
