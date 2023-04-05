package model

import (
	"time"

	"github.com/shopspring/decimal"
)

type Invoice struct {
	ID            int32           `gorm:"primary_key;column:id;type:INT4 NOT NULL AUTO_INCREMENT" json:"id"`
	Period        string          `gorm:"column:period;type:TEXT NOT NULL" json:"period"`
	ClientId      string          `gorm:"column:client_id;type:TEXT NOT NULL" json:"client_id"`
	InvoiceStatus bool            `gorm:"column:invoice_status;type:BOOL NOT NULL; default:false;" json:"invoice_status"`
	DateCreated   time.Time       `gorm:"column:date_created;type:TIMESTAMPTZ NOT NULL;" json:"date_created"`
	Details       string          `gorm:"column:details;type:TEXT NOT NULL" json:"details"`
	TotalCharge   decimal.Decimal `gorm:"column:total_charge;type:decimal(20, 8) NOT NULL;" json:"total_charge"`

	// relation 1-to-many
	InvoiceItems []InvoiceItem `gorm:"foreignKey:invoice_id" json:"invoice_items,omitempty"`
}

func (t *Invoice) TableName() string {
	return "invoice"
}
