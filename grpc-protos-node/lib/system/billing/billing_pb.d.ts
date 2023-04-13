// package: lab.system.billing
// file: system/billing/billing.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class InvoiceItem extends jspb.Message { 
    getId(): number;
    setId(value: number): InvoiceItem;
    getInvoiceId(): number;
    setInvoiceId(value: number): InvoiceItem;
    getDetails(): string;
    setDetails(value: string): InvoiceItem;
    getAmount(): number;
    setAmount(value: number): InvoiceItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvoiceItem.AsObject;
    static toObject(includeInstance: boolean, msg: InvoiceItem): InvoiceItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvoiceItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvoiceItem;
    static deserializeBinaryFromReader(message: InvoiceItem, reader: jspb.BinaryReader): InvoiceItem;
}

export namespace InvoiceItem {
    export type AsObject = {
        id: number,
        invoiceId: number,
        details: string,
        amount: number,
    }
}

export class Invoice extends jspb.Message { 
    getId(): number;
    setId(value: number): Invoice;
    getPeriod(): string;
    setPeriod(value: string): Invoice;
    getClientId(): string;
    setClientId(value: string): Invoice;
    getInvoiceStatus(): boolean;
    setInvoiceStatus(value: boolean): Invoice;

    hasDateCreated(): boolean;
    clearDateCreated(): void;
    getDateCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateCreated(value?: google_protobuf_timestamp_pb.Timestamp): Invoice;
    getDetails(): string;
    setDetails(value: string): Invoice;
    getTotalCharge(): number;
    setTotalCharge(value: number): Invoice;
    clearInvoiceItemsList(): void;
    getInvoiceItemsList(): Array<InvoiceItem>;
    setInvoiceItemsList(value: Array<InvoiceItem>): Invoice;
    addInvoiceItems(value?: InvoiceItem, index?: number): InvoiceItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Invoice.AsObject;
    static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Invoice;
    static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
    export type AsObject = {
        id: number,
        period: string,
        clientId: string,
        invoiceStatus: boolean,
        dateCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        details: string,
        totalCharge: number,
        invoiceItemsList: Array<InvoiceItem.AsObject>,
    }
}

export class InvoiceItemAdd extends jspb.Message { 
    getId(): number;
    setId(value: number): InvoiceItemAdd;

    hasItem(): boolean;
    clearItem(): void;
    getItem(): InvoiceItem | undefined;
    setItem(value?: InvoiceItem): InvoiceItemAdd;
    getAdd(): boolean;
    setAdd(value: boolean): InvoiceItemAdd;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvoiceItemAdd.AsObject;
    static toObject(includeInstance: boolean, msg: InvoiceItemAdd): InvoiceItemAdd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvoiceItemAdd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvoiceItemAdd;
    static deserializeBinaryFromReader(message: InvoiceItemAdd, reader: jspb.BinaryReader): InvoiceItemAdd;
}

export namespace InvoiceItemAdd {
    export type AsObject = {
        id: number,
        item?: InvoiceItem.AsObject,
        add: boolean,
    }
}

export class InvoiceFilter extends jspb.Message { 
    getPeriod(): string;
    setPeriod(value: string): InvoiceFilter;
    getClientId(): string;
    setClientId(value: string): InvoiceFilter;
    getInvoiceStatus(): boolean;
    setInvoiceStatus(value: boolean): InvoiceFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvoiceFilter.AsObject;
    static toObject(includeInstance: boolean, msg: InvoiceFilter): InvoiceFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvoiceFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvoiceFilter;
    static deserializeBinaryFromReader(message: InvoiceFilter, reader: jspb.BinaryReader): InvoiceFilter;
}

export namespace InvoiceFilter {
    export type AsObject = {
        period: string,
        clientId: string,
        invoiceStatus: boolean,
    }
}

export class Invoices extends jspb.Message { 
    clearInvoicesList(): void;
    getInvoicesList(): Array<Invoice>;
    setInvoicesList(value: Array<Invoice>): Invoices;
    addInvoices(value?: Invoice, index?: number): Invoice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Invoices.AsObject;
    static toObject(includeInstance: boolean, msg: Invoices): Invoices.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Invoices, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Invoices;
    static deserializeBinaryFromReader(message: Invoices, reader: jspb.BinaryReader): Invoices;
}

export namespace Invoices {
    export type AsObject = {
        invoicesList: Array<Invoice.AsObject>,
    }
}
