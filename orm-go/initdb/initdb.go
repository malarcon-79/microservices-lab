package initdb

import (
	"errors"
	"strings"
	"time"

	"github.com/malarcon-79/microservices-lab/orm-go/dao"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// DAOInit initializes the gORM database connection using built-in connector
func DAOInit(dsn, dbtype string) error {
	var dialector gorm.Dialector
	switch strings.ToLower(dbtype) {
	case "psql":
		dialector = postgres.Open(dsn)
	default:
		return errors.New("database type not supported")
	}
	db, err := gorm.Open(dialector, &gorm.Config{})
	if err != nil {
		return err
	}
	db.Statement.SkipHooks = true
	sqlDB, err := db.DB()
	if err != nil {
		return err
	}
	// TODO parametrizar esto
	sqlDB.SetMaxOpenConns(10)
	sqlDB.SetMaxIdleConns(1)
	sqlDB.SetConnMaxIdleTime(time.Minute * 5)
	sqlDB.SetConnMaxLifetime(time.Minute * 10)
	dao.DB = db.Session(&gorm.Session{SkipHooks: true})
	return nil
}
