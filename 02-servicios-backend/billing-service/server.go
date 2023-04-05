package main

import (
	"math"
	"net"
	"os"
	"os/signal"
	"syscall"

	"github.com/malarcon-79/microservices-lab/02-servicios-backend/billing-service/controllers"

	pb "github.com/malarcon-79/microservices-lab/grpc-protos-go/system/billing"

	"go.uber.org/zap"

	"google.golang.org/grpc"
)

func main() {
	_logger, _ := zap.NewProduction()
	logger := _logger.Sugar()

	var opts []grpc.ServerOption
	opts = append(opts, grpc.MaxRecvMsgSize(math.MaxInt32))
	opts = append(opts, grpc.MaxSendMsgSize(math.MaxInt32))
	server := grpc.NewServer(opts...)

	// registrar stubs Servidor
	controller := &controllers.BillingServiceController{}
	pb.RegisterBillingServiceServer(server, controller)

	errChannel := make(chan error)
	stopChannel := make(chan os.Signal, 1)
	signal.Notify(stopChannel, syscall.SIGTERM, syscall.SIGINT)

	go func() {
		listener, err := net.Listen("tcp", "0.0.0.0:5000")
		if err != nil {
			errChannel <- err
			return
		}

		logger.Info("Iniciando Servidor gRPC")
		if err := server.Serve(listener); err != nil {
			errChannel <- err
			return
		}
	}()

	// Shutdown hook
	defer func() {
		server.GracefulStop()
	}()

	select {
	case err := <-errChannel:
		logger.Error("Error fatal", err)
	case <-stopChannel:
		logger.Warn("Finalizando servidor")
	}
}
