// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// LAB - Billing microservice gRPC
'use strict';
var grpc = require('grpc');
var system_billing_billing_pb = require('../../system/billing/billing_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_lab_system_billing_Invoice(arg) {
  if (!(arg instanceof system_billing_billing_pb.Invoice)) {
    throw new Error('Expected argument of type lab.system.billing.Invoice');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lab_system_billing_Invoice(buffer_arg) {
  return system_billing_billing_pb.Invoice.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lab_system_billing_InvoiceFilter(arg) {
  if (!(arg instanceof system_billing_billing_pb.InvoiceFilter)) {
    throw new Error('Expected argument of type lab.system.billing.InvoiceFilter');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lab_system_billing_InvoiceFilter(buffer_arg) {
  return system_billing_billing_pb.InvoiceFilter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lab_system_billing_InvoiceItemAdd(arg) {
  if (!(arg instanceof system_billing_billing_pb.InvoiceItemAdd)) {
    throw new Error('Expected argument of type lab.system.billing.InvoiceItemAdd');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lab_system_billing_InvoiceItemAdd(buffer_arg) {
  return system_billing_billing_pb.InvoiceItemAdd.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lab_system_billing_Invoices(arg) {
  if (!(arg instanceof system_billing_billing_pb.Invoices)) {
    throw new Error('Expected argument of type lab.system.billing.Invoices');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lab_system_billing_Invoices(buffer_arg) {
  return system_billing_billing_pb.Invoices.deserializeBinary(new Uint8Array(buffer_arg));
}


var BillingServiceService = exports.BillingServiceService = {
  createInvoice: {
    path: '/lab.system.billing.BillingService/CreateInvoice',
    requestStream: false,
    responseStream: false,
    requestType: system_billing_billing_pb.Invoice,
    responseType: system_billing_billing_pb.Invoice,
    requestSerialize: serialize_lab_system_billing_Invoice,
    requestDeserialize: deserialize_lab_system_billing_Invoice,
    responseSerialize: serialize_lab_system_billing_Invoice,
    responseDeserialize: deserialize_lab_system_billing_Invoice,
  },
  updateInvoice: {
    path: '/lab.system.billing.BillingService/UpdateInvoice',
    requestStream: false,
    responseStream: false,
    requestType: system_billing_billing_pb.Invoice,
    responseType: system_billing_billing_pb.Invoice,
    requestSerialize: serialize_lab_system_billing_Invoice,
    requestDeserialize: deserialize_lab_system_billing_Invoice,
    responseSerialize: serialize_lab_system_billing_Invoice,
    responseDeserialize: deserialize_lab_system_billing_Invoice,
  },
  addItem: {
    path: '/lab.system.billing.BillingService/AddItem',
    requestStream: false,
    responseStream: false,
    requestType: system_billing_billing_pb.InvoiceItemAdd,
    responseType: system_billing_billing_pb.Invoice,
    requestSerialize: serialize_lab_system_billing_InvoiceItemAdd,
    requestDeserialize: deserialize_lab_system_billing_InvoiceItemAdd,
    responseSerialize: serialize_lab_system_billing_Invoice,
    responseDeserialize: deserialize_lab_system_billing_Invoice,
  },
  deleteItem: {
    path: '/lab.system.billing.BillingService/DeleteItem',
    requestStream: false,
    responseStream: false,
    requestType: system_billing_billing_pb.InvoiceItemAdd,
    responseType: system_billing_billing_pb.Invoice,
    requestSerialize: serialize_lab_system_billing_InvoiceItemAdd,
    requestDeserialize: deserialize_lab_system_billing_InvoiceItemAdd,
    responseSerialize: serialize_lab_system_billing_Invoice,
    responseDeserialize: deserialize_lab_system_billing_Invoice,
  },
  getInvoices: {
    path: '/lab.system.billing.BillingService/GetInvoices',
    requestStream: false,
    responseStream: false,
    requestType: system_billing_billing_pb.InvoiceFilter,
    responseType: system_billing_billing_pb.Invoices,
    requestSerialize: serialize_lab_system_billing_InvoiceFilter,
    requestDeserialize: deserialize_lab_system_billing_InvoiceFilter,
    responseSerialize: serialize_lab_system_billing_Invoices,
    responseDeserialize: deserialize_lab_system_billing_Invoices,
  },
};

exports.BillingServiceClient = grpc.makeGenericClientConstructor(BillingServiceService);
