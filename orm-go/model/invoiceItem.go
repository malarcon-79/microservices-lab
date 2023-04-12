package model

import (
	"github.com/shopspring/decimal"
)

type InvoiceItem struct {
	ID        int32           `gorm:"primary_key;column:id;type:INT4 NOT NULL AUTO_INCREMENT" json:"id"`
	InvoiceId int32           `gorm:"column:invoice_id;type:INT4 NOT NULL;" json:"invoice_id"`
	Details   string          `gorm:"column:details;type:TEXT NOT NULL" json:"details"`
	Amount    decimal.Decimal `gorm:"column:amount;type:decimal(20, 8) NOT NULL;" json:"amount"`
}

func (t *InvoiceItem) TableName() string {
	return "invoice_item"
}
