import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace lab. */
export namespace lab {

    /** Namespace system. */
    namespace system {

        /** Namespace billing. */
        namespace billing {

            /** Represents a BillingService */
            class BillingService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new BillingService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new BillingService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BillingService;

                /**
                 * Calls CreateInvoice.
                 * @param request Invoice message or plain object
                 * @param callback Node-style callback called with the error, if any, and Invoice
                 */
                public createInvoice(request: lab.system.billing.IInvoice, callback: lab.system.billing.BillingService.CreateInvoiceCallback): void;

                /**
                 * Calls CreateInvoice.
                 * @param request Invoice message or plain object
                 * @returns Promise
                 */
                public createInvoice(request: lab.system.billing.IInvoice): Promise<lab.system.billing.Invoice>;

                /**
                 * Calls UpdateInvoice.
                 * @param request Invoice message or plain object
                 * @param callback Node-style callback called with the error, if any, and Invoice
                 */
                public updateInvoice(request: lab.system.billing.IInvoice, callback: lab.system.billing.BillingService.UpdateInvoiceCallback): void;

                /**
                 * Calls UpdateInvoice.
                 * @param request Invoice message or plain object
                 * @returns Promise
                 */
                public updateInvoice(request: lab.system.billing.IInvoice): Promise<lab.system.billing.Invoice>;

                /**
                 * Calls AddItem.
                 * @param request InvoiceItemAdd message or plain object
                 * @param callback Node-style callback called with the error, if any, and Invoice
                 */
                public addItem(request: lab.system.billing.IInvoiceItemAdd, callback: lab.system.billing.BillingService.AddItemCallback): void;

                /**
                 * Calls AddItem.
                 * @param request InvoiceItemAdd message or plain object
                 * @returns Promise
                 */
                public addItem(request: lab.system.billing.IInvoiceItemAdd): Promise<lab.system.billing.Invoice>;

                /**
                 * Calls DeleteItem.
                 * @param request InvoiceItemAdd message or plain object
                 * @param callback Node-style callback called with the error, if any, and Invoice
                 */
                public deleteItem(request: lab.system.billing.IInvoiceItemAdd, callback: lab.system.billing.BillingService.DeleteItemCallback): void;

                /**
                 * Calls DeleteItem.
                 * @param request InvoiceItemAdd message or plain object
                 * @returns Promise
                 */
                public deleteItem(request: lab.system.billing.IInvoiceItemAdd): Promise<lab.system.billing.Invoice>;

                /**
                 * Calls GetInvoices.
                 * @param request InvoiceFilter message or plain object
                 * @param callback Node-style callback called with the error, if any, and Invoices
                 */
                public getInvoices(request: lab.system.billing.IInvoiceFilter, callback: lab.system.billing.BillingService.GetInvoicesCallback): void;

                /**
                 * Calls GetInvoices.
                 * @param request InvoiceFilter message or plain object
                 * @returns Promise
                 */
                public getInvoices(request: lab.system.billing.IInvoiceFilter): Promise<lab.system.billing.Invoices>;
            }

            namespace BillingService {

                /**
                 * Callback as used by {@link lab.system.billing.BillingService#createInvoice}.
                 * @param error Error, if any
                 * @param [response] Invoice
                 */
                type CreateInvoiceCallback = (error: (Error|null), response?: lab.system.billing.Invoice) => void;

                /**
                 * Callback as used by {@link lab.system.billing.BillingService#updateInvoice}.
                 * @param error Error, if any
                 * @param [response] Invoice
                 */
                type UpdateInvoiceCallback = (error: (Error|null), response?: lab.system.billing.Invoice) => void;

                /**
                 * Callback as used by {@link lab.system.billing.BillingService#addItem}.
                 * @param error Error, if any
                 * @param [response] Invoice
                 */
                type AddItemCallback = (error: (Error|null), response?: lab.system.billing.Invoice) => void;

                /**
                 * Callback as used by {@link lab.system.billing.BillingService#deleteItem}.
                 * @param error Error, if any
                 * @param [response] Invoice
                 */
                type DeleteItemCallback = (error: (Error|null), response?: lab.system.billing.Invoice) => void;

                /**
                 * Callback as used by {@link lab.system.billing.BillingService#getInvoices}.
                 * @param error Error, if any
                 * @param [response] Invoices
                 */
                type GetInvoicesCallback = (error: (Error|null), response?: lab.system.billing.Invoices) => void;
            }

            /** Properties of an InvoiceItem. */
            interface IInvoiceItem {

                /** InvoiceItem id */
                id?: (number|null);

                /** InvoiceItem invoice_id */
                invoice_id?: (number|null);

                /** InvoiceItem details */
                details?: (string|null);

                /** InvoiceItem amount */
                amount?: (number|null);
            }

            /** Represents an InvoiceItem. */
            class InvoiceItem implements IInvoiceItem {

                /**
                 * Constructs a new InvoiceItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: lab.system.billing.IInvoiceItem);

                /** InvoiceItem id. */
                public id: number;

                /** InvoiceItem invoice_id. */
                public invoice_id: number;

                /** InvoiceItem details. */
                public details: string;

                /** InvoiceItem amount. */
                public amount: number;

                /**
                 * Creates a new InvoiceItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InvoiceItem instance
                 */
                public static create(properties?: lab.system.billing.IInvoiceItem): lab.system.billing.InvoiceItem;

                /**
                 * Encodes the specified InvoiceItem message. Does not implicitly {@link lab.system.billing.InvoiceItem.verify|verify} messages.
                 * @param message InvoiceItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: lab.system.billing.IInvoiceItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InvoiceItem message, length delimited. Does not implicitly {@link lab.system.billing.InvoiceItem.verify|verify} messages.
                 * @param message InvoiceItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: lab.system.billing.IInvoiceItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InvoiceItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InvoiceItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lab.system.billing.InvoiceItem;

                /**
                 * Decodes an InvoiceItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InvoiceItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lab.system.billing.InvoiceItem;

                /**
                 * Verifies an InvoiceItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InvoiceItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InvoiceItem
                 */
                public static fromObject(object: { [k: string]: any }): lab.system.billing.InvoiceItem;

                /**
                 * Creates a plain object from an InvoiceItem message. Also converts values to other types if specified.
                 * @param message InvoiceItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: lab.system.billing.InvoiceItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InvoiceItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for InvoiceItem
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Invoice. */
            interface IInvoice {

                /** Invoice id */
                id?: (number|null);

                /** Invoice period */
                period?: (string|null);

                /** Invoice client_id */
                client_id?: (string|null);

                /** Invoice invoice_status */
                invoice_status?: (boolean|null);

                /** Invoice date_created */
                date_created?: (google.protobuf.ITimestamp|null);

                /** Invoice details */
                details?: (string|null);

                /** Invoice total_charge */
                total_charge?: (number|null);

                /** Invoice invoice_items */
                invoice_items?: (lab.system.billing.IInvoiceItem[]|null);
            }

            /** Represents an Invoice. */
            class Invoice implements IInvoice {

                /**
                 * Constructs a new Invoice.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: lab.system.billing.IInvoice);

                /** Invoice id. */
                public id: number;

                /** Invoice period. */
                public period: string;

                /** Invoice client_id. */
                public client_id: string;

                /** Invoice invoice_status. */
                public invoice_status: boolean;

                /** Invoice date_created. */
                public date_created?: (google.protobuf.ITimestamp|null);

                /** Invoice details. */
                public details: string;

                /** Invoice total_charge. */
                public total_charge: number;

                /** Invoice invoice_items. */
                public invoice_items: lab.system.billing.IInvoiceItem[];

                /**
                 * Creates a new Invoice instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Invoice instance
                 */
                public static create(properties?: lab.system.billing.IInvoice): lab.system.billing.Invoice;

                /**
                 * Encodes the specified Invoice message. Does not implicitly {@link lab.system.billing.Invoice.verify|verify} messages.
                 * @param message Invoice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: lab.system.billing.IInvoice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Invoice message, length delimited. Does not implicitly {@link lab.system.billing.Invoice.verify|verify} messages.
                 * @param message Invoice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: lab.system.billing.IInvoice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Invoice message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Invoice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lab.system.billing.Invoice;

                /**
                 * Decodes an Invoice message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Invoice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lab.system.billing.Invoice;

                /**
                 * Verifies an Invoice message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Invoice message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Invoice
                 */
                public static fromObject(object: { [k: string]: any }): lab.system.billing.Invoice;

                /**
                 * Creates a plain object from an Invoice message. Also converts values to other types if specified.
                 * @param message Invoice
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: lab.system.billing.Invoice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Invoice to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Invoice
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an InvoiceItemAdd. */
            interface IInvoiceItemAdd {

                /** InvoiceItemAdd id */
                id?: (number|null);

                /** InvoiceItemAdd item */
                item?: (lab.system.billing.IInvoiceItem|null);

                /** InvoiceItemAdd add */
                add?: (boolean|null);
            }

            /** Represents an InvoiceItemAdd. */
            class InvoiceItemAdd implements IInvoiceItemAdd {

                /**
                 * Constructs a new InvoiceItemAdd.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: lab.system.billing.IInvoiceItemAdd);

                /** InvoiceItemAdd id. */
                public id: number;

                /** InvoiceItemAdd item. */
                public item?: (lab.system.billing.IInvoiceItem|null);

                /** InvoiceItemAdd add. */
                public add: boolean;

                /**
                 * Creates a new InvoiceItemAdd instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InvoiceItemAdd instance
                 */
                public static create(properties?: lab.system.billing.IInvoiceItemAdd): lab.system.billing.InvoiceItemAdd;

                /**
                 * Encodes the specified InvoiceItemAdd message. Does not implicitly {@link lab.system.billing.InvoiceItemAdd.verify|verify} messages.
                 * @param message InvoiceItemAdd message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: lab.system.billing.IInvoiceItemAdd, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InvoiceItemAdd message, length delimited. Does not implicitly {@link lab.system.billing.InvoiceItemAdd.verify|verify} messages.
                 * @param message InvoiceItemAdd message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: lab.system.billing.IInvoiceItemAdd, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InvoiceItemAdd message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InvoiceItemAdd
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lab.system.billing.InvoiceItemAdd;

                /**
                 * Decodes an InvoiceItemAdd message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InvoiceItemAdd
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lab.system.billing.InvoiceItemAdd;

                /**
                 * Verifies an InvoiceItemAdd message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InvoiceItemAdd message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InvoiceItemAdd
                 */
                public static fromObject(object: { [k: string]: any }): lab.system.billing.InvoiceItemAdd;

                /**
                 * Creates a plain object from an InvoiceItemAdd message. Also converts values to other types if specified.
                 * @param message InvoiceItemAdd
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: lab.system.billing.InvoiceItemAdd, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InvoiceItemAdd to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for InvoiceItemAdd
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an InvoiceFilter. */
            interface IInvoiceFilter {

                /** InvoiceFilter period */
                period?: (string|null);

                /** InvoiceFilter client_id */
                client_id?: (string|null);

                /** InvoiceFilter invoice_status */
                invoice_status?: (boolean|null);
            }

            /** Represents an InvoiceFilter. */
            class InvoiceFilter implements IInvoiceFilter {

                /**
                 * Constructs a new InvoiceFilter.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: lab.system.billing.IInvoiceFilter);

                /** InvoiceFilter period. */
                public period: string;

                /** InvoiceFilter client_id. */
                public client_id: string;

                /** InvoiceFilter invoice_status. */
                public invoice_status: boolean;

                /**
                 * Creates a new InvoiceFilter instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InvoiceFilter instance
                 */
                public static create(properties?: lab.system.billing.IInvoiceFilter): lab.system.billing.InvoiceFilter;

                /**
                 * Encodes the specified InvoiceFilter message. Does not implicitly {@link lab.system.billing.InvoiceFilter.verify|verify} messages.
                 * @param message InvoiceFilter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: lab.system.billing.IInvoiceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InvoiceFilter message, length delimited. Does not implicitly {@link lab.system.billing.InvoiceFilter.verify|verify} messages.
                 * @param message InvoiceFilter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: lab.system.billing.IInvoiceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InvoiceFilter message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InvoiceFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lab.system.billing.InvoiceFilter;

                /**
                 * Decodes an InvoiceFilter message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InvoiceFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lab.system.billing.InvoiceFilter;

                /**
                 * Verifies an InvoiceFilter message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InvoiceFilter message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InvoiceFilter
                 */
                public static fromObject(object: { [k: string]: any }): lab.system.billing.InvoiceFilter;

                /**
                 * Creates a plain object from an InvoiceFilter message. Also converts values to other types if specified.
                 * @param message InvoiceFilter
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: lab.system.billing.InvoiceFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InvoiceFilter to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for InvoiceFilter
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Invoices. */
            interface IInvoices {

                /** Invoices invoices */
                invoices?: (lab.system.billing.IInvoice[]|null);
            }

            /** Represents an Invoices. */
            class Invoices implements IInvoices {

                /**
                 * Constructs a new Invoices.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: lab.system.billing.IInvoices);

                /** Invoices invoices. */
                public invoices: lab.system.billing.IInvoice[];

                /**
                 * Creates a new Invoices instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Invoices instance
                 */
                public static create(properties?: lab.system.billing.IInvoices): lab.system.billing.Invoices;

                /**
                 * Encodes the specified Invoices message. Does not implicitly {@link lab.system.billing.Invoices.verify|verify} messages.
                 * @param message Invoices message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: lab.system.billing.IInvoices, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Invoices message, length delimited. Does not implicitly {@link lab.system.billing.Invoices.verify|verify} messages.
                 * @param message Invoices message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: lab.system.billing.IInvoices, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Invoices message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Invoices
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lab.system.billing.Invoices;

                /**
                 * Decodes an Invoices message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Invoices
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lab.system.billing.Invoices;

                /**
                 * Verifies an Invoices message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Invoices message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Invoices
                 */
                public static fromObject(object: { [k: string]: any }): lab.system.billing.Invoices;

                /**
                 * Creates a plain object from an Invoices message. Also converts values to other types if specified.
                 * @param message Invoices
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: lab.system.billing.Invoices, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Invoices to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Invoices
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace custody. */
        namespace custody {

            /** Represents a CustodyService */
            class CustodyService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new CustodyService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new CustodyService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CustodyService;

                /**
                 * Calls AddCustodyStock.
                 * @param request CustodyAdd message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public addCustodyStock(request: lab.system.custody.ICustodyAdd, callback: lab.system.custody.CustodyService.AddCustodyStockCallback): void;

                /**
                 * Calls AddCustodyStock.
                 * @param request CustodyAdd message or plain object
                 * @returns Promise
                 */
                public addCustodyStock(request: lab.system.custody.ICustodyAdd): Promise<lab.system.custody.Empty>;

                /**
                 * Calls ClosePeriod.
                 * @param request CloseFilters message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public closePeriod(request: lab.system.custody.ICloseFilters, callback: lab.system.custody.CustodyService.ClosePeriodCallback): void;

                /**
                 * Calls ClosePeriod.
                 * @param request CloseFilters message or plain object
                 * @returns Promise
                 */
                public closePeriod(request: lab.system.custody.ICloseFilters): Promise<lab.system.custody.Empty>;

                /**
                 * Calls GetCustody.
                 * @param request CustodyFilter message or plain object
                 * @param callback Node-style callback called with the error, if any, and Custodies
                 */
                public getCustody(request: lab.system.custody.ICustodyFilter, callback: lab.system.custody.CustodyService.GetCustodyCallback): void;

                /**
                 * Calls GetCustody.
                 * @param request CustodyFilter message or plain object
                 * @returns Promise
                 */
                public getCustody(request: lab.system.custody.ICustodyFilter): Promise<lab.system.custody.Custodies>;
            }

            namespace CustodyService {

                /**
                 * Callback as used by {@link lab.system.custody.CustodyService#addCustodyStock}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type AddCustodyStockCallback = (error: (Error|null), response?: lab.system.custody.Empty) => void;

                /**
                 * Callback as used by {@link lab.system.custody.CustodyService#closePeriod}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type ClosePeriodCallback = (error: (Error|null), response?: lab.system.custody.Empty) => void;

                /**
                 * Callback as used by {@link lab.system.custody.CustodyService#getCustody}.
                 * @param error Error, if any
                 * @param [response] Custodies
                 */
                type GetCustodyCallback = (error: (Error|null), response?: lab.system.custody.Custodies) => void;
            }

            /** Properties of an Empty. */
            interface IEmpty {
            }

            /** Represents an Empty. */
            class Empty implements IEmpty {

                /**
                 * Constructs a new Empty.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: lab.system.custody.IEmpty);

                /**
                 * Creates a new Empty instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Empty instance
                 */
                public static create(properties?: lab.system.custody.IEmpty): lab.system.custody.Empty;

                /**
                 * Encodes the specified Empty message. Does not implicitly {@link lab.system.custody.Empty.verify|verify} messages.
                 * @param message Empty message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: lab.system.custody.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Empty message, length delimited. Does not implicitly {@link lab.system.custody.Empty.verify|verify} messages.
                 * @param message Empty message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: lab.system.custody.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Empty message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lab.system.custody.Empty;

                /**
                 * Decodes an Empty message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lab.system.custody.Empty;

                /**
                 * Verifies an Empty message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Empty
                 */
                public static fromObject(object: { [k: string]: any }): lab.system.custody.Empty;

                /**
                 * Creates a plain object from an Empty message. Also converts values to other types if specified.
                 * @param message Empty
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: lab.system.custody.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Empty to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Empty
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CustodyAdd. */
            interface ICustodyAdd {

                /** CustodyAdd period */
                period?: (string|null);

                /** CustodyAdd stock */
                stock?: (string|null);

                /** CustodyAdd client_id */
                client_id?: (string|null);

                /** CustodyAdd quantity */
                quantity?: (number|null);
            }

            /** Represents a CustodyAdd. */
            class CustodyAdd implements ICustodyAdd {

                /**
                 * Constructs a new CustodyAdd.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: lab.system.custody.ICustodyAdd);

                /** CustodyAdd period. */
                public period: string;

                /** CustodyAdd stock. */
                public stock: string;

                /** CustodyAdd client_id. */
                public client_id: string;

                /** CustodyAdd quantity. */
                public quantity: number;

                /**
                 * Creates a new CustodyAdd instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CustodyAdd instance
                 */
                public static create(properties?: lab.system.custody.ICustodyAdd): lab.system.custody.CustodyAdd;

                /**
                 * Encodes the specified CustodyAdd message. Does not implicitly {@link lab.system.custody.CustodyAdd.verify|verify} messages.
                 * @param message CustodyAdd message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: lab.system.custody.ICustodyAdd, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CustodyAdd message, length delimited. Does not implicitly {@link lab.system.custody.CustodyAdd.verify|verify} messages.
                 * @param message CustodyAdd message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: lab.system.custody.ICustodyAdd, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CustodyAdd message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CustodyAdd
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lab.system.custody.CustodyAdd;

                /**
                 * Decodes a CustodyAdd message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CustodyAdd
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lab.system.custody.CustodyAdd;

                /**
                 * Verifies a CustodyAdd message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CustodyAdd message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CustodyAdd
                 */
                public static fromObject(object: { [k: string]: any }): lab.system.custody.CustodyAdd;

                /**
                 * Creates a plain object from a CustodyAdd message. Also converts values to other types if specified.
                 * @param message CustodyAdd
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: lab.system.custody.CustodyAdd, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CustodyAdd to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CustodyAdd
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CloseFilters. */
            interface ICloseFilters {

                /** CloseFilters period */
                period?: (string|null);

                /** CloseFilters market */
                market?: (string|null);
            }

            /** Represents a CloseFilters. */
            class CloseFilters implements ICloseFilters {

                /**
                 * Constructs a new CloseFilters.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: lab.system.custody.ICloseFilters);

                /** CloseFilters period. */
                public period: string;

                /** CloseFilters market. */
                public market: string;

                /**
                 * Creates a new CloseFilters instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CloseFilters instance
                 */
                public static create(properties?: lab.system.custody.ICloseFilters): lab.system.custody.CloseFilters;

                /**
                 * Encodes the specified CloseFilters message. Does not implicitly {@link lab.system.custody.CloseFilters.verify|verify} messages.
                 * @param message CloseFilters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: lab.system.custody.ICloseFilters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CloseFilters message, length delimited. Does not implicitly {@link lab.system.custody.CloseFilters.verify|verify} messages.
                 * @param message CloseFilters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: lab.system.custody.ICloseFilters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CloseFilters message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CloseFilters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lab.system.custody.CloseFilters;

                /**
                 * Decodes a CloseFilters message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CloseFilters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lab.system.custody.CloseFilters;

                /**
                 * Verifies a CloseFilters message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CloseFilters message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CloseFilters
                 */
                public static fromObject(object: { [k: string]: any }): lab.system.custody.CloseFilters;

                /**
                 * Creates a plain object from a CloseFilters message. Also converts values to other types if specified.
                 * @param message CloseFilters
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: lab.system.custody.CloseFilters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CloseFilters to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CloseFilters
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CustodyFilter. */
            interface ICustodyFilter {

                /** CustodyFilter period */
                period?: (string|null);

                /** CustodyFilter stock */
                stock?: (string|null);

                /** CustodyFilter client_id */
                client_id?: (string|null);
            }

            /** Represents a CustodyFilter. */
            class CustodyFilter implements ICustodyFilter {

                /**
                 * Constructs a new CustodyFilter.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: lab.system.custody.ICustodyFilter);

                /** CustodyFilter period. */
                public period: string;

                /** CustodyFilter stock. */
                public stock: string;

                /** CustodyFilter client_id. */
                public client_id: string;

                /**
                 * Creates a new CustodyFilter instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CustodyFilter instance
                 */
                public static create(properties?: lab.system.custody.ICustodyFilter): lab.system.custody.CustodyFilter;

                /**
                 * Encodes the specified CustodyFilter message. Does not implicitly {@link lab.system.custody.CustodyFilter.verify|verify} messages.
                 * @param message CustodyFilter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: lab.system.custody.ICustodyFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CustodyFilter message, length delimited. Does not implicitly {@link lab.system.custody.CustodyFilter.verify|verify} messages.
                 * @param message CustodyFilter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: lab.system.custody.ICustodyFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CustodyFilter message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CustodyFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lab.system.custody.CustodyFilter;

                /**
                 * Decodes a CustodyFilter message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CustodyFilter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lab.system.custody.CustodyFilter;

                /**
                 * Verifies a CustodyFilter message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CustodyFilter message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CustodyFilter
                 */
                public static fromObject(object: { [k: string]: any }): lab.system.custody.CustodyFilter;

                /**
                 * Creates a plain object from a CustodyFilter message. Also converts values to other types if specified.
                 * @param message CustodyFilter
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: lab.system.custody.CustodyFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CustodyFilter to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CustodyFilter
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Custodies. */
            interface ICustodies {

                /** Custodies items */
                items?: (lab.system.custody.Custodies.ICustody[]|null);
            }

            /** Represents a Custodies. */
            class Custodies implements ICustodies {

                /**
                 * Constructs a new Custodies.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: lab.system.custody.ICustodies);

                /** Custodies items. */
                public items: lab.system.custody.Custodies.ICustody[];

                /**
                 * Creates a new Custodies instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Custodies instance
                 */
                public static create(properties?: lab.system.custody.ICustodies): lab.system.custody.Custodies;

                /**
                 * Encodes the specified Custodies message. Does not implicitly {@link lab.system.custody.Custodies.verify|verify} messages.
                 * @param message Custodies message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: lab.system.custody.ICustodies, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Custodies message, length delimited. Does not implicitly {@link lab.system.custody.Custodies.verify|verify} messages.
                 * @param message Custodies message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: lab.system.custody.ICustodies, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Custodies message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Custodies
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lab.system.custody.Custodies;

                /**
                 * Decodes a Custodies message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Custodies
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lab.system.custody.Custodies;

                /**
                 * Verifies a Custodies message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Custodies message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Custodies
                 */
                public static fromObject(object: { [k: string]: any }): lab.system.custody.Custodies;

                /**
                 * Creates a plain object from a Custodies message. Also converts values to other types if specified.
                 * @param message Custodies
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: lab.system.custody.Custodies, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Custodies to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Custodies
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Custodies {

                /** Properties of a Custody. */
                interface ICustody {

                    /** Custody period */
                    period?: (string|null);

                    /** Custody stock */
                    stock?: (string|null);

                    /** Custody client_id */
                    client_id?: (string|null);

                    /** Custody market */
                    market?: (string|null);

                    /** Custody price */
                    price?: (number|null);

                    /** Custody quantity */
                    quantity?: (number|null);
                }

                /** Represents a Custody. */
                class Custody implements ICustody {

                    /**
                     * Constructs a new Custody.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: lab.system.custody.Custodies.ICustody);

                    /** Custody period. */
                    public period: string;

                    /** Custody stock. */
                    public stock: string;

                    /** Custody client_id. */
                    public client_id: string;

                    /** Custody market. */
                    public market: string;

                    /** Custody price. */
                    public price: number;

                    /** Custody quantity. */
                    public quantity: number;

                    /**
                     * Creates a new Custody instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Custody instance
                     */
                    public static create(properties?: lab.system.custody.Custodies.ICustody): lab.system.custody.Custodies.Custody;

                    /**
                     * Encodes the specified Custody message. Does not implicitly {@link lab.system.custody.Custodies.Custody.verify|verify} messages.
                     * @param message Custody message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: lab.system.custody.Custodies.ICustody, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Custody message, length delimited. Does not implicitly {@link lab.system.custody.Custodies.Custody.verify|verify} messages.
                     * @param message Custody message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: lab.system.custody.Custodies.ICustody, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Custody message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Custody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lab.system.custody.Custodies.Custody;

                    /**
                     * Decodes a Custody message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Custody
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lab.system.custody.Custodies.Custody;

                    /**
                     * Verifies a Custody message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Custody message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Custody
                     */
                    public static fromObject(object: { [k: string]: any }): lab.system.custody.Custodies.Custody;

                    /**
                     * Creates a plain object from a Custody message. Also converts values to other types if specified.
                     * @param message Custody
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: lab.system.custody.Custodies.Custody, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Custody to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Custody
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
