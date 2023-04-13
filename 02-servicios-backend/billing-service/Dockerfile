# Parte 1: build del binario
ARG GO_VER=20

FROM golang:1.${GO_VER} as builder

WORKDIR /workspace

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -a -o server server.go

# Parte 2: entorno de ejecución
FROM gcr.io/distroless/static:nonroot as output

WORKDIR /go/src/app

COPY --from=builder /workspace/server ./server

USER nonroot

CMD [ "/go/src/app/server" ]