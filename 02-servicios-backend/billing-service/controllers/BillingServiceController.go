package controllers

import (
	"context"
	"errors"

	pb "github.com/malarcon-79/microservices-lab/grpc-protos-go/system/billing"
)

type BillingServiceController struct {
}

func (c *BillingServiceController) CreateInvoice(ctx context.Context, msg *pb.Invoice) (*pb.Invoice, error) {
	return nil, errors.New("no implementado")
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
