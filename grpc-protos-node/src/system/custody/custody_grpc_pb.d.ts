// package: lab.system.custody
// file: system/custody/custody.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as system_custody_custody_pb from "../../system/custody/custody_pb";

interface ICustodyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addCustodyStock: ICustodyServiceService_IAddCustodyStock;
    closePeriod: ICustodyServiceService_IClosePeriod;
    getCustody: ICustodyServiceService_IGetCustody;
}

interface ICustodyServiceService_IAddCustodyStock extends grpc.MethodDefinition<system_custody_custody_pb.CustodyAdd, system_custody_custody_pb.Empty> {
    path: "/lab.system.custody.CustodyService/AddCustodyStock";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_custody_custody_pb.CustodyAdd>;
    requestDeserialize: grpc.deserialize<system_custody_custody_pb.CustodyAdd>;
    responseSerialize: grpc.serialize<system_custody_custody_pb.Empty>;
    responseDeserialize: grpc.deserialize<system_custody_custody_pb.Empty>;
}
interface ICustodyServiceService_IClosePeriod extends grpc.MethodDefinition<system_custody_custody_pb.CloseFilters, system_custody_custody_pb.Empty> {
    path: "/lab.system.custody.CustodyService/ClosePeriod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_custody_custody_pb.CloseFilters>;
    requestDeserialize: grpc.deserialize<system_custody_custody_pb.CloseFilters>;
    responseSerialize: grpc.serialize<system_custody_custody_pb.Empty>;
    responseDeserialize: grpc.deserialize<system_custody_custody_pb.Empty>;
}
interface ICustodyServiceService_IGetCustody extends grpc.MethodDefinition<system_custody_custody_pb.CustodyFilter, system_custody_custody_pb.Custodies> {
    path: "/lab.system.custody.CustodyService/GetCustody";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_custody_custody_pb.CustodyFilter>;
    requestDeserialize: grpc.deserialize<system_custody_custody_pb.CustodyFilter>;
    responseSerialize: grpc.serialize<system_custody_custody_pb.Custodies>;
    responseDeserialize: grpc.deserialize<system_custody_custody_pb.Custodies>;
}

export const CustodyServiceService: ICustodyServiceService;

export interface ICustodyServiceServer {
    addCustodyStock: grpc.handleUnaryCall<system_custody_custody_pb.CustodyAdd, system_custody_custody_pb.Empty>;
    closePeriod: grpc.handleUnaryCall<system_custody_custody_pb.CloseFilters, system_custody_custody_pb.Empty>;
    getCustody: grpc.handleUnaryCall<system_custody_custody_pb.CustodyFilter, system_custody_custody_pb.Custodies>;
}

export interface ICustodyServiceClient {
    addCustodyStock(request: system_custody_custody_pb.CustodyAdd, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    addCustodyStock(request: system_custody_custody_pb.CustodyAdd, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    addCustodyStock(request: system_custody_custody_pb.CustodyAdd, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    closePeriod(request: system_custody_custody_pb.CloseFilters, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    closePeriod(request: system_custody_custody_pb.CloseFilters, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    closePeriod(request: system_custody_custody_pb.CloseFilters, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    getCustody(request: system_custody_custody_pb.CustodyFilter, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Custodies) => void): grpc.ClientUnaryCall;
    getCustody(request: system_custody_custody_pb.CustodyFilter, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Custodies) => void): grpc.ClientUnaryCall;
    getCustody(request: system_custody_custody_pb.CustodyFilter, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Custodies) => void): grpc.ClientUnaryCall;
}

export class CustodyServiceClient extends grpc.Client implements ICustodyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addCustodyStock(request: system_custody_custody_pb.CustodyAdd, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    public addCustodyStock(request: system_custody_custody_pb.CustodyAdd, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    public addCustodyStock(request: system_custody_custody_pb.CustodyAdd, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    public closePeriod(request: system_custody_custody_pb.CloseFilters, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    public closePeriod(request: system_custody_custody_pb.CloseFilters, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    public closePeriod(request: system_custody_custody_pb.CloseFilters, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Empty) => void): grpc.ClientUnaryCall;
    public getCustody(request: system_custody_custody_pb.CustodyFilter, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Custodies) => void): grpc.ClientUnaryCall;
    public getCustody(request: system_custody_custody_pb.CustodyFilter, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Custodies) => void): grpc.ClientUnaryCall;
    public getCustody(request: system_custody_custody_pb.CustodyFilter, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_custody_custody_pb.Custodies) => void): grpc.ClientUnaryCall;
}
