// package: lab.system.billing
// file: system/billing/billing.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as system_billing_billing_pb from "../../system/billing/billing_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IBillingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createInvoice: IBillingServiceService_ICreateInvoice;
    updateInvoice: IBillingServiceService_IUpdateInvoice;
    addItem: IBillingServiceService_IAddItem;
    deleteItem: IBillingServiceService_IDeleteItem;
    getInvoices: IBillingServiceService_IGetInvoices;
}

interface IBillingServiceService_ICreateInvoice extends grpc.MethodDefinition<system_billing_billing_pb.Invoice, system_billing_billing_pb.Invoice> {
    path: "/lab.system.billing.BillingService/CreateInvoice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_billing_billing_pb.Invoice>;
    requestDeserialize: grpc.deserialize<system_billing_billing_pb.Invoice>;
    responseSerialize: grpc.serialize<system_billing_billing_pb.Invoice>;
    responseDeserialize: grpc.deserialize<system_billing_billing_pb.Invoice>;
}
interface IBillingServiceService_IUpdateInvoice extends grpc.MethodDefinition<system_billing_billing_pb.Invoice, system_billing_billing_pb.Invoice> {
    path: "/lab.system.billing.BillingService/UpdateInvoice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_billing_billing_pb.Invoice>;
    requestDeserialize: grpc.deserialize<system_billing_billing_pb.Invoice>;
    responseSerialize: grpc.serialize<system_billing_billing_pb.Invoice>;
    responseDeserialize: grpc.deserialize<system_billing_billing_pb.Invoice>;
}
interface IBillingServiceService_IAddItem extends grpc.MethodDefinition<system_billing_billing_pb.InvoiceItemAdd, system_billing_billing_pb.Invoice> {
    path: "/lab.system.billing.BillingService/AddItem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_billing_billing_pb.InvoiceItemAdd>;
    requestDeserialize: grpc.deserialize<system_billing_billing_pb.InvoiceItemAdd>;
    responseSerialize: grpc.serialize<system_billing_billing_pb.Invoice>;
    responseDeserialize: grpc.deserialize<system_billing_billing_pb.Invoice>;
}
interface IBillingServiceService_IDeleteItem extends grpc.MethodDefinition<system_billing_billing_pb.InvoiceItemAdd, system_billing_billing_pb.Invoice> {
    path: "/lab.system.billing.BillingService/DeleteItem";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_billing_billing_pb.InvoiceItemAdd>;
    requestDeserialize: grpc.deserialize<system_billing_billing_pb.InvoiceItemAdd>;
    responseSerialize: grpc.serialize<system_billing_billing_pb.Invoice>;
    responseDeserialize: grpc.deserialize<system_billing_billing_pb.Invoice>;
}
interface IBillingServiceService_IGetInvoices extends grpc.MethodDefinition<system_billing_billing_pb.InvoiceFilter, system_billing_billing_pb.Invoices> {
    path: "/lab.system.billing.BillingService/GetInvoices";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_billing_billing_pb.InvoiceFilter>;
    requestDeserialize: grpc.deserialize<system_billing_billing_pb.InvoiceFilter>;
    responseSerialize: grpc.serialize<system_billing_billing_pb.Invoices>;
    responseDeserialize: grpc.deserialize<system_billing_billing_pb.Invoices>;
}

export const BillingServiceService: IBillingServiceService;

export interface IBillingServiceServer {
    createInvoice: grpc.handleUnaryCall<system_billing_billing_pb.Invoice, system_billing_billing_pb.Invoice>;
    updateInvoice: grpc.handleUnaryCall<system_billing_billing_pb.Invoice, system_billing_billing_pb.Invoice>;
    addItem: grpc.handleUnaryCall<system_billing_billing_pb.InvoiceItemAdd, system_billing_billing_pb.Invoice>;
    deleteItem: grpc.handleUnaryCall<system_billing_billing_pb.InvoiceItemAdd, system_billing_billing_pb.Invoice>;
    getInvoices: grpc.handleUnaryCall<system_billing_billing_pb.InvoiceFilter, system_billing_billing_pb.Invoices>;
}

export interface IBillingServiceClient {
    createInvoice(request: system_billing_billing_pb.Invoice, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    createInvoice(request: system_billing_billing_pb.Invoice, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    createInvoice(request: system_billing_billing_pb.Invoice, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    updateInvoice(request: system_billing_billing_pb.Invoice, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    updateInvoice(request: system_billing_billing_pb.Invoice, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    updateInvoice(request: system_billing_billing_pb.Invoice, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    addItem(request: system_billing_billing_pb.InvoiceItemAdd, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    addItem(request: system_billing_billing_pb.InvoiceItemAdd, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    addItem(request: system_billing_billing_pb.InvoiceItemAdd, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    deleteItem(request: system_billing_billing_pb.InvoiceItemAdd, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    deleteItem(request: system_billing_billing_pb.InvoiceItemAdd, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    deleteItem(request: system_billing_billing_pb.InvoiceItemAdd, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    getInvoices(request: system_billing_billing_pb.InvoiceFilter, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoices) => void): grpc.ClientUnaryCall;
    getInvoices(request: system_billing_billing_pb.InvoiceFilter, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoices) => void): grpc.ClientUnaryCall;
    getInvoices(request: system_billing_billing_pb.InvoiceFilter, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoices) => void): grpc.ClientUnaryCall;
}

export class BillingServiceClient extends grpc.Client implements IBillingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createInvoice(request: system_billing_billing_pb.Invoice, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public createInvoice(request: system_billing_billing_pb.Invoice, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public createInvoice(request: system_billing_billing_pb.Invoice, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public updateInvoice(request: system_billing_billing_pb.Invoice, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public updateInvoice(request: system_billing_billing_pb.Invoice, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public updateInvoice(request: system_billing_billing_pb.Invoice, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public addItem(request: system_billing_billing_pb.InvoiceItemAdd, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public addItem(request: system_billing_billing_pb.InvoiceItemAdd, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public addItem(request: system_billing_billing_pb.InvoiceItemAdd, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public deleteItem(request: system_billing_billing_pb.InvoiceItemAdd, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public deleteItem(request: system_billing_billing_pb.InvoiceItemAdd, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public deleteItem(request: system_billing_billing_pb.InvoiceItemAdd, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoice) => void): grpc.ClientUnaryCall;
    public getInvoices(request: system_billing_billing_pb.InvoiceFilter, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoices) => void): grpc.ClientUnaryCall;
    public getInvoices(request: system_billing_billing_pb.InvoiceFilter, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoices) => void): grpc.ClientUnaryCall;
    public getInvoices(request: system_billing_billing_pb.InvoiceFilter, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_billing_billing_pb.Invoices) => void): grpc.ClientUnaryCall;
}
