// package: lab.system.custody
// file: system/custody/custody.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class CustodyAdd extends jspb.Message { 
    getPeriod(): string;
    setPeriod(value: string): CustodyAdd;
    getStock(): string;
    setStock(value: string): CustodyAdd;
    getClientId(): string;
    setClientId(value: string): CustodyAdd;
    getQuantity(): number;
    setQuantity(value: number): CustodyAdd;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustodyAdd.AsObject;
    static toObject(includeInstance: boolean, msg: CustodyAdd): CustodyAdd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustodyAdd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustodyAdd;
    static deserializeBinaryFromReader(message: CustodyAdd, reader: jspb.BinaryReader): CustodyAdd;
}

export namespace CustodyAdd {
    export type AsObject = {
        period: string,
        stock: string,
        clientId: string,
        quantity: number,
    }
}

export class CloseFilters extends jspb.Message { 
    getPeriod(): string;
    setPeriod(value: string): CloseFilters;
    getMarket(): string;
    setMarket(value: string): CloseFilters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloseFilters.AsObject;
    static toObject(includeInstance: boolean, msg: CloseFilters): CloseFilters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloseFilters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloseFilters;
    static deserializeBinaryFromReader(message: CloseFilters, reader: jspb.BinaryReader): CloseFilters;
}

export namespace CloseFilters {
    export type AsObject = {
        period: string,
        market: string,
    }
}

export class CustodyFilter extends jspb.Message { 
    getPeriod(): string;
    setPeriod(value: string): CustodyFilter;
    getStock(): string;
    setStock(value: string): CustodyFilter;
    getClientId(): string;
    setClientId(value: string): CustodyFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustodyFilter.AsObject;
    static toObject(includeInstance: boolean, msg: CustodyFilter): CustodyFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustodyFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustodyFilter;
    static deserializeBinaryFromReader(message: CustodyFilter, reader: jspb.BinaryReader): CustodyFilter;
}

export namespace CustodyFilter {
    export type AsObject = {
        period: string,
        stock: string,
        clientId: string,
    }
}

export class Custodies extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Custodies.Custody>;
    setItemsList(value: Array<Custodies.Custody>): Custodies;
    addItems(value?: Custodies.Custody, index?: number): Custodies.Custody;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Custodies.AsObject;
    static toObject(includeInstance: boolean, msg: Custodies): Custodies.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Custodies, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Custodies;
    static deserializeBinaryFromReader(message: Custodies, reader: jspb.BinaryReader): Custodies;
}

export namespace Custodies {
    export type AsObject = {
        itemsList: Array<Custodies.Custody.AsObject>,
    }


    export class Custody extends jspb.Message { 
        getPeriod(): string;
        setPeriod(value: string): Custody;
        getStock(): string;
        setStock(value: string): Custody;
        getClientId(): string;
        setClientId(value: string): Custody;
        getMarket(): string;
        setMarket(value: string): Custody;
        getPrice(): number;
        setPrice(value: number): Custody;
        getQuantity(): number;
        setQuantity(value: number): Custody;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Custody.AsObject;
        static toObject(includeInstance: boolean, msg: Custody): Custody.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Custody, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Custody;
        static deserializeBinaryFromReader(message: Custody, reader: jspb.BinaryReader): Custody;
    }

    export namespace Custody {
        export type AsObject = {
            period: string,
            stock: string,
            clientId: string,
            market: string,
            price: number,
            quantity: number,
        }
    }

}
