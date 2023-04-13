// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// LAB - Custody microservice gRPC
'use strict';
var grpc = require('grpc');
var system_custody_custody_pb = require('../../system/custody/custody_pb.js');

function serialize_lab_system_custody_CloseFilters(arg) {
  if (!(arg instanceof system_custody_custody_pb.CloseFilters)) {
    throw new Error('Expected argument of type lab.system.custody.CloseFilters');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lab_system_custody_CloseFilters(buffer_arg) {
  return system_custody_custody_pb.CloseFilters.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lab_system_custody_Custodies(arg) {
  if (!(arg instanceof system_custody_custody_pb.Custodies)) {
    throw new Error('Expected argument of type lab.system.custody.Custodies');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lab_system_custody_Custodies(buffer_arg) {
  return system_custody_custody_pb.Custodies.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lab_system_custody_CustodyAdd(arg) {
  if (!(arg instanceof system_custody_custody_pb.CustodyAdd)) {
    throw new Error('Expected argument of type lab.system.custody.CustodyAdd');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lab_system_custody_CustodyAdd(buffer_arg) {
  return system_custody_custody_pb.CustodyAdd.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lab_system_custody_CustodyFilter(arg) {
  if (!(arg instanceof system_custody_custody_pb.CustodyFilter)) {
    throw new Error('Expected argument of type lab.system.custody.CustodyFilter');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lab_system_custody_CustodyFilter(buffer_arg) {
  return system_custody_custody_pb.CustodyFilter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lab_system_custody_Empty(arg) {
  if (!(arg instanceof system_custody_custody_pb.Empty)) {
    throw new Error('Expected argument of type lab.system.custody.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lab_system_custody_Empty(buffer_arg) {
  return system_custody_custody_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var CustodyServiceService = exports.CustodyServiceService = {
  addCustodyStock: {
    path: '/lab.system.custody.CustodyService/AddCustodyStock',
    requestStream: false,
    responseStream: false,
    requestType: system_custody_custody_pb.CustodyAdd,
    responseType: system_custody_custody_pb.Empty,
    requestSerialize: serialize_lab_system_custody_CustodyAdd,
    requestDeserialize: deserialize_lab_system_custody_CustodyAdd,
    responseSerialize: serialize_lab_system_custody_Empty,
    responseDeserialize: deserialize_lab_system_custody_Empty,
  },
  closePeriod: {
    path: '/lab.system.custody.CustodyService/ClosePeriod',
    requestStream: false,
    responseStream: false,
    requestType: system_custody_custody_pb.CloseFilters,
    responseType: system_custody_custody_pb.Empty,
    requestSerialize: serialize_lab_system_custody_CloseFilters,
    requestDeserialize: deserialize_lab_system_custody_CloseFilters,
    responseSerialize: serialize_lab_system_custody_Empty,
    responseDeserialize: deserialize_lab_system_custody_Empty,
  },
  getCustody: {
    path: '/lab.system.custody.CustodyService/GetCustody',
    requestStream: false,
    responseStream: false,
    requestType: system_custody_custody_pb.CustodyFilter,
    responseType: system_custody_custody_pb.Custodies,
    requestSerialize: serialize_lab_system_custody_CustodyFilter,
    requestDeserialize: deserialize_lab_system_custody_CustodyFilter,
    responseSerialize: serialize_lab_system_custody_Custodies,
    responseDeserialize: deserialize_lab_system_custody_Custodies,
  },
};

exports.CustodyServiceClient = grpc.makeGenericClientConstructor(CustodyServiceService);
