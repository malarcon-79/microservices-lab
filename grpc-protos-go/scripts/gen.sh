#!/bin/bash

export PATH=$PATH:~/go/bin

protoc --go_out=../ --go-grpc_out=require_unimplemented_servers=false:../ -I ../../grpc-catalog $(find ../../grpc-catalog/system -name "*.proto" -type f)
