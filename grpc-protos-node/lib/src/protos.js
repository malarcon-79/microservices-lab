/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.lab = (function() {
    
        /**
         * Namespace lab.
         * @exports lab
         * @namespace
         */
        var lab = {};
    
        lab.system = (function() {
    
            /**
             * Namespace system.
             * @memberof lab
             * @namespace
             */
            var system = {};
    
            system.billing = (function() {
    
                /**
                 * Namespace billing.
                 * @memberof lab.system
                 * @namespace
                 */
                var billing = {};
    
                billing.BillingService = (function() {
    
                    /**
                     * Constructs a new BillingService service.
                     * @memberof lab.system.billing
                     * @classdesc Represents a BillingService
                     * @extends $protobuf.rpc.Service
                     * @constructor
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     */
                    function BillingService(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }
    
                    (BillingService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = BillingService;
    
                    /**
                     * Creates new BillingService service using the specified rpc implementation.
                     * @function create
                     * @memberof lab.system.billing.BillingService
                     * @static
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     * @returns {BillingService} RPC service. Useful where requests and/or responses are streamed.
                     */
                    BillingService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };
    
                    /**
                     * Callback as used by {@link lab.system.billing.BillingService#createInvoice}.
                     * @memberof lab.system.billing.BillingService
                     * @typedef CreateInvoiceCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {lab.system.billing.Invoice} [response] Invoice
                     */
    
                    /**
                     * Calls CreateInvoice.
                     * @function createInvoice
                     * @memberof lab.system.billing.BillingService
                     * @instance
                     * @param {lab.system.billing.IInvoice} request Invoice message or plain object
                     * @param {lab.system.billing.BillingService.CreateInvoiceCallback} callback Node-style callback called with the error, if any, and Invoice
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(BillingService.prototype.createInvoice = function createInvoice(request, callback) {
                        return this.rpcCall(createInvoice, $root.lab.system.billing.Invoice, $root.lab.system.billing.Invoice, request, callback);
                    }, "name", { value: "CreateInvoice" });
    
                    /**
                     * Calls CreateInvoice.
                     * @function createInvoice
                     * @memberof lab.system.billing.BillingService
                     * @instance
                     * @param {lab.system.billing.IInvoice} request Invoice message or plain object
                     * @returns {Promise<lab.system.billing.Invoice>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link lab.system.billing.BillingService#updateInvoice}.
                     * @memberof lab.system.billing.BillingService
                     * @typedef UpdateInvoiceCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {lab.system.billing.Invoice} [response] Invoice
                     */
    
                    /**
                     * Calls UpdateInvoice.
                     * @function updateInvoice
                     * @memberof lab.system.billing.BillingService
                     * @instance
                     * @param {lab.system.billing.IInvoice} request Invoice message or plain object
                     * @param {lab.system.billing.BillingService.UpdateInvoiceCallback} callback Node-style callback called with the error, if any, and Invoice
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(BillingService.prototype.updateInvoice = function updateInvoice(request, callback) {
                        return this.rpcCall(updateInvoice, $root.lab.system.billing.Invoice, $root.lab.system.billing.Invoice, request, callback);
                    }, "name", { value: "UpdateInvoice" });
    
                    /**
                     * Calls UpdateInvoice.
                     * @function updateInvoice
                     * @memberof lab.system.billing.BillingService
                     * @instance
                     * @param {lab.system.billing.IInvoice} request Invoice message or plain object
                     * @returns {Promise<lab.system.billing.Invoice>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link lab.system.billing.BillingService#addItem}.
                     * @memberof lab.system.billing.BillingService
                     * @typedef AddItemCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {lab.system.billing.Invoice} [response] Invoice
                     */
    
                    /**
                     * Calls AddItem.
                     * @function addItem
                     * @memberof lab.system.billing.BillingService
                     * @instance
                     * @param {lab.system.billing.IInvoiceItemAdd} request InvoiceItemAdd message or plain object
                     * @param {lab.system.billing.BillingService.AddItemCallback} callback Node-style callback called with the error, if any, and Invoice
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(BillingService.prototype.addItem = function addItem(request, callback) {
                        return this.rpcCall(addItem, $root.lab.system.billing.InvoiceItemAdd, $root.lab.system.billing.Invoice, request, callback);
                    }, "name", { value: "AddItem" });
    
                    /**
                     * Calls AddItem.
                     * @function addItem
                     * @memberof lab.system.billing.BillingService
                     * @instance
                     * @param {lab.system.billing.IInvoiceItemAdd} request InvoiceItemAdd message or plain object
                     * @returns {Promise<lab.system.billing.Invoice>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link lab.system.billing.BillingService#deleteItem}.
                     * @memberof lab.system.billing.BillingService
                     * @typedef DeleteItemCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {lab.system.billing.Invoice} [response] Invoice
                     */
    
                    /**
                     * Calls DeleteItem.
                     * @function deleteItem
                     * @memberof lab.system.billing.BillingService
                     * @instance
                     * @param {lab.system.billing.IInvoiceItemAdd} request InvoiceItemAdd message or plain object
                     * @param {lab.system.billing.BillingService.DeleteItemCallback} callback Node-style callback called with the error, if any, and Invoice
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(BillingService.prototype.deleteItem = function deleteItem(request, callback) {
                        return this.rpcCall(deleteItem, $root.lab.system.billing.InvoiceItemAdd, $root.lab.system.billing.Invoice, request, callback);
                    }, "name", { value: "DeleteItem" });
    
                    /**
                     * Calls DeleteItem.
                     * @function deleteItem
                     * @memberof lab.system.billing.BillingService
                     * @instance
                     * @param {lab.system.billing.IInvoiceItemAdd} request InvoiceItemAdd message or plain object
                     * @returns {Promise<lab.system.billing.Invoice>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link lab.system.billing.BillingService#getInvoices}.
                     * @memberof lab.system.billing.BillingService
                     * @typedef GetInvoicesCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {lab.system.billing.Invoices} [response] Invoices
                     */
    
                    /**
                     * Calls GetInvoices.
                     * @function getInvoices
                     * @memberof lab.system.billing.BillingService
                     * @instance
                     * @param {lab.system.billing.IInvoiceFilter} request InvoiceFilter message or plain object
                     * @param {lab.system.billing.BillingService.GetInvoicesCallback} callback Node-style callback called with the error, if any, and Invoices
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(BillingService.prototype.getInvoices = function getInvoices(request, callback) {
                        return this.rpcCall(getInvoices, $root.lab.system.billing.InvoiceFilter, $root.lab.system.billing.Invoices, request, callback);
                    }, "name", { value: "GetInvoices" });
    
                    /**
                     * Calls GetInvoices.
                     * @function getInvoices
                     * @memberof lab.system.billing.BillingService
                     * @instance
                     * @param {lab.system.billing.IInvoiceFilter} request InvoiceFilter message or plain object
                     * @returns {Promise<lab.system.billing.Invoices>} Promise
                     * @variation 2
                     */
    
                    return BillingService;
                })();
    
                billing.InvoiceItem = (function() {
    
                    /**
                     * Properties of an InvoiceItem.
                     * @memberof lab.system.billing
                     * @interface IInvoiceItem
                     * @property {number|null} [id] InvoiceItem id
                     * @property {number|null} [invoice_id] InvoiceItem invoice_id
                     * @property {string|null} [details] InvoiceItem details
                     * @property {number|null} [amount] InvoiceItem amount
                     */
    
                    /**
                     * Constructs a new InvoiceItem.
                     * @memberof lab.system.billing
                     * @classdesc Represents an InvoiceItem.
                     * @implements IInvoiceItem
                     * @constructor
                     * @param {lab.system.billing.IInvoiceItem=} [properties] Properties to set
                     */
                    function InvoiceItem(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * InvoiceItem id.
                     * @member {number} id
                     * @memberof lab.system.billing.InvoiceItem
                     * @instance
                     */
                    InvoiceItem.prototype.id = 0;
    
                    /**
                     * InvoiceItem invoice_id.
                     * @member {number} invoice_id
                     * @memberof lab.system.billing.InvoiceItem
                     * @instance
                     */
                    InvoiceItem.prototype.invoice_id = 0;
    
                    /**
                     * InvoiceItem details.
                     * @member {string} details
                     * @memberof lab.system.billing.InvoiceItem
                     * @instance
                     */
                    InvoiceItem.prototype.details = "";
    
                    /**
                     * InvoiceItem amount.
                     * @member {number} amount
                     * @memberof lab.system.billing.InvoiceItem
                     * @instance
                     */
                    InvoiceItem.prototype.amount = 0;
    
                    /**
                     * Creates a new InvoiceItem instance using the specified properties.
                     * @function create
                     * @memberof lab.system.billing.InvoiceItem
                     * @static
                     * @param {lab.system.billing.IInvoiceItem=} [properties] Properties to set
                     * @returns {lab.system.billing.InvoiceItem} InvoiceItem instance
                     */
                    InvoiceItem.create = function create(properties) {
                        return new InvoiceItem(properties);
                    };
    
                    /**
                     * Encodes the specified InvoiceItem message. Does not implicitly {@link lab.system.billing.InvoiceItem.verify|verify} messages.
                     * @function encode
                     * @memberof lab.system.billing.InvoiceItem
                     * @static
                     * @param {lab.system.billing.IInvoiceItem} message InvoiceItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InvoiceItem.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                        if (message.invoice_id != null && Object.hasOwnProperty.call(message, "invoice_id"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.invoice_id);
                        if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.details);
                        if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                            writer.uint32(/* id 4, wireType 1 =*/33).double(message.amount);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified InvoiceItem message, length delimited. Does not implicitly {@link lab.system.billing.InvoiceItem.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lab.system.billing.InvoiceItem
                     * @static
                     * @param {lab.system.billing.IInvoiceItem} message InvoiceItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InvoiceItem.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an InvoiceItem message from the specified reader or buffer.
                     * @function decode
                     * @memberof lab.system.billing.InvoiceItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lab.system.billing.InvoiceItem} InvoiceItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InvoiceItem.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lab.system.billing.InvoiceItem();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.id = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.invoice_id = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.details = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.amount = reader.double();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an InvoiceItem message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lab.system.billing.InvoiceItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lab.system.billing.InvoiceItem} InvoiceItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InvoiceItem.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an InvoiceItem message.
                     * @function verify
                     * @memberof lab.system.billing.InvoiceItem
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    InvoiceItem.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id))
                                return "id: integer expected";
                        if (message.invoice_id != null && message.hasOwnProperty("invoice_id"))
                            if (!$util.isInteger(message.invoice_id))
                                return "invoice_id: integer expected";
                        if (message.details != null && message.hasOwnProperty("details"))
                            if (!$util.isString(message.details))
                                return "details: string expected";
                        if (message.amount != null && message.hasOwnProperty("amount"))
                            if (typeof message.amount !== "number")
                                return "amount: number expected";
                        return null;
                    };
    
                    /**
                     * Creates an InvoiceItem message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lab.system.billing.InvoiceItem
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lab.system.billing.InvoiceItem} InvoiceItem
                     */
                    InvoiceItem.fromObject = function fromObject(object) {
                        if (object instanceof $root.lab.system.billing.InvoiceItem)
                            return object;
                        var message = new $root.lab.system.billing.InvoiceItem();
                        if (object.id != null)
                            message.id = object.id | 0;
                        if (object.invoice_id != null)
                            message.invoice_id = object.invoice_id | 0;
                        if (object.details != null)
                            message.details = String(object.details);
                        if (object.amount != null)
                            message.amount = Number(object.amount);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an InvoiceItem message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lab.system.billing.InvoiceItem
                     * @static
                     * @param {lab.system.billing.InvoiceItem} message InvoiceItem
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    InvoiceItem.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = 0;
                            object.invoice_id = 0;
                            object.details = "";
                            object.amount = 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.invoice_id != null && message.hasOwnProperty("invoice_id"))
                            object.invoice_id = message.invoice_id;
                        if (message.details != null && message.hasOwnProperty("details"))
                            object.details = message.details;
                        if (message.amount != null && message.hasOwnProperty("amount"))
                            object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
                        return object;
                    };
    
                    /**
                     * Converts this InvoiceItem to JSON.
                     * @function toJSON
                     * @memberof lab.system.billing.InvoiceItem
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    InvoiceItem.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for InvoiceItem
                     * @function getTypeUrl
                     * @memberof lab.system.billing.InvoiceItem
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    InvoiceItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lab.system.billing.InvoiceItem";
                    };
    
                    return InvoiceItem;
                })();
    
                billing.Invoice = (function() {
    
                    /**
                     * Properties of an Invoice.
                     * @memberof lab.system.billing
                     * @interface IInvoice
                     * @property {number|null} [id] Invoice id
                     * @property {string|null} [period] Invoice period
                     * @property {string|null} [client_id] Invoice client_id
                     * @property {boolean|null} [invoice_status] Invoice invoice_status
                     * @property {google.protobuf.ITimestamp|null} [date_created] Invoice date_created
                     * @property {string|null} [details] Invoice details
                     * @property {number|null} [total_charge] Invoice total_charge
                     * @property {Array.<lab.system.billing.IInvoiceItem>|null} [invoice_items] Invoice invoice_items
                     */
    
                    /**
                     * Constructs a new Invoice.
                     * @memberof lab.system.billing
                     * @classdesc Represents an Invoice.
                     * @implements IInvoice
                     * @constructor
                     * @param {lab.system.billing.IInvoice=} [properties] Properties to set
                     */
                    function Invoice(properties) {
                        this.invoice_items = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Invoice id.
                     * @member {number} id
                     * @memberof lab.system.billing.Invoice
                     * @instance
                     */
                    Invoice.prototype.id = 0;
    
                    /**
                     * Invoice period.
                     * @member {string} period
                     * @memberof lab.system.billing.Invoice
                     * @instance
                     */
                    Invoice.prototype.period = "";
    
                    /**
                     * Invoice client_id.
                     * @member {string} client_id
                     * @memberof lab.system.billing.Invoice
                     * @instance
                     */
                    Invoice.prototype.client_id = "";
    
                    /**
                     * Invoice invoice_status.
                     * @member {boolean} invoice_status
                     * @memberof lab.system.billing.Invoice
                     * @instance
                     */
                    Invoice.prototype.invoice_status = false;
    
                    /**
                     * Invoice date_created.
                     * @member {google.protobuf.ITimestamp|null|undefined} date_created
                     * @memberof lab.system.billing.Invoice
                     * @instance
                     */
                    Invoice.prototype.date_created = null;
    
                    /**
                     * Invoice details.
                     * @member {string} details
                     * @memberof lab.system.billing.Invoice
                     * @instance
                     */
                    Invoice.prototype.details = "";
    
                    /**
                     * Invoice total_charge.
                     * @member {number} total_charge
                     * @memberof lab.system.billing.Invoice
                     * @instance
                     */
                    Invoice.prototype.total_charge = 0;
    
                    /**
                     * Invoice invoice_items.
                     * @member {Array.<lab.system.billing.IInvoiceItem>} invoice_items
                     * @memberof lab.system.billing.Invoice
                     * @instance
                     */
                    Invoice.prototype.invoice_items = $util.emptyArray;
    
                    /**
                     * Creates a new Invoice instance using the specified properties.
                     * @function create
                     * @memberof lab.system.billing.Invoice
                     * @static
                     * @param {lab.system.billing.IInvoice=} [properties] Properties to set
                     * @returns {lab.system.billing.Invoice} Invoice instance
                     */
                    Invoice.create = function create(properties) {
                        return new Invoice(properties);
                    };
    
                    /**
                     * Encodes the specified Invoice message. Does not implicitly {@link lab.system.billing.Invoice.verify|verify} messages.
                     * @function encode
                     * @memberof lab.system.billing.Invoice
                     * @static
                     * @param {lab.system.billing.IInvoice} message Invoice message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Invoice.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                        if (message.period != null && Object.hasOwnProperty.call(message, "period"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.period);
                        if (message.client_id != null && Object.hasOwnProperty.call(message, "client_id"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.client_id);
                        if (message.invoice_status != null && Object.hasOwnProperty.call(message, "invoice_status"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.invoice_status);
                        if (message.date_created != null && Object.hasOwnProperty.call(message, "date_created"))
                            $root.google.protobuf.Timestamp.encode(message.date_created, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.details);
                        if (message.total_charge != null && Object.hasOwnProperty.call(message, "total_charge"))
                            writer.uint32(/* id 7, wireType 1 =*/57).double(message.total_charge);
                        if (message.invoice_items != null && message.invoice_items.length)
                            for (var i = 0; i < message.invoice_items.length; ++i)
                                $root.lab.system.billing.InvoiceItem.encode(message.invoice_items[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Invoice message, length delimited. Does not implicitly {@link lab.system.billing.Invoice.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lab.system.billing.Invoice
                     * @static
                     * @param {lab.system.billing.IInvoice} message Invoice message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Invoice.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Invoice message from the specified reader or buffer.
                     * @function decode
                     * @memberof lab.system.billing.Invoice
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lab.system.billing.Invoice} Invoice
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Invoice.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lab.system.billing.Invoice();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.id = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.period = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.client_id = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.invoice_status = reader.bool();
                                    break;
                                }
                            case 5: {
                                    message.date_created = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                }
                            case 6: {
                                    message.details = reader.string();
                                    break;
                                }
                            case 7: {
                                    message.total_charge = reader.double();
                                    break;
                                }
                            case 13: {
                                    if (!(message.invoice_items && message.invoice_items.length))
                                        message.invoice_items = [];
                                    message.invoice_items.push($root.lab.system.billing.InvoiceItem.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Invoice message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lab.system.billing.Invoice
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lab.system.billing.Invoice} Invoice
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Invoice.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Invoice message.
                     * @function verify
                     * @memberof lab.system.billing.Invoice
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Invoice.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id))
                                return "id: integer expected";
                        if (message.period != null && message.hasOwnProperty("period"))
                            if (!$util.isString(message.period))
                                return "period: string expected";
                        if (message.client_id != null && message.hasOwnProperty("client_id"))
                            if (!$util.isString(message.client_id))
                                return "client_id: string expected";
                        if (message.invoice_status != null && message.hasOwnProperty("invoice_status"))
                            if (typeof message.invoice_status !== "boolean")
                                return "invoice_status: boolean expected";
                        if (message.date_created != null && message.hasOwnProperty("date_created")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.date_created);
                            if (error)
                                return "date_created." + error;
                        }
                        if (message.details != null && message.hasOwnProperty("details"))
                            if (!$util.isString(message.details))
                                return "details: string expected";
                        if (message.total_charge != null && message.hasOwnProperty("total_charge"))
                            if (typeof message.total_charge !== "number")
                                return "total_charge: number expected";
                        if (message.invoice_items != null && message.hasOwnProperty("invoice_items")) {
                            if (!Array.isArray(message.invoice_items))
                                return "invoice_items: array expected";
                            for (var i = 0; i < message.invoice_items.length; ++i) {
                                var error = $root.lab.system.billing.InvoiceItem.verify(message.invoice_items[i]);
                                if (error)
                                    return "invoice_items." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates an Invoice message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lab.system.billing.Invoice
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lab.system.billing.Invoice} Invoice
                     */
                    Invoice.fromObject = function fromObject(object) {
                        if (object instanceof $root.lab.system.billing.Invoice)
                            return object;
                        var message = new $root.lab.system.billing.Invoice();
                        if (object.id != null)
                            message.id = object.id | 0;
                        if (object.period != null)
                            message.period = String(object.period);
                        if (object.client_id != null)
                            message.client_id = String(object.client_id);
                        if (object.invoice_status != null)
                            message.invoice_status = Boolean(object.invoice_status);
                        if (object.date_created != null) {
                            if (typeof object.date_created !== "object")
                                throw TypeError(".lab.system.billing.Invoice.date_created: object expected");
                            message.date_created = $root.google.protobuf.Timestamp.fromObject(object.date_created);
                        }
                        if (object.details != null)
                            message.details = String(object.details);
                        if (object.total_charge != null)
                            message.total_charge = Number(object.total_charge);
                        if (object.invoice_items) {
                            if (!Array.isArray(object.invoice_items))
                                throw TypeError(".lab.system.billing.Invoice.invoice_items: array expected");
                            message.invoice_items = [];
                            for (var i = 0; i < object.invoice_items.length; ++i) {
                                if (typeof object.invoice_items[i] !== "object")
                                    throw TypeError(".lab.system.billing.Invoice.invoice_items: object expected");
                                message.invoice_items[i] = $root.lab.system.billing.InvoiceItem.fromObject(object.invoice_items[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Invoice message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lab.system.billing.Invoice
                     * @static
                     * @param {lab.system.billing.Invoice} message Invoice
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Invoice.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.invoice_items = [];
                        if (options.defaults) {
                            object.id = 0;
                            object.period = "";
                            object.client_id = "";
                            object.invoice_status = false;
                            object.date_created = null;
                            object.details = "";
                            object.total_charge = 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.period != null && message.hasOwnProperty("period"))
                            object.period = message.period;
                        if (message.client_id != null && message.hasOwnProperty("client_id"))
                            object.client_id = message.client_id;
                        if (message.invoice_status != null && message.hasOwnProperty("invoice_status"))
                            object.invoice_status = message.invoice_status;
                        if (message.date_created != null && message.hasOwnProperty("date_created"))
                            object.date_created = $root.google.protobuf.Timestamp.toObject(message.date_created, options);
                        if (message.details != null && message.hasOwnProperty("details"))
                            object.details = message.details;
                        if (message.total_charge != null && message.hasOwnProperty("total_charge"))
                            object.total_charge = options.json && !isFinite(message.total_charge) ? String(message.total_charge) : message.total_charge;
                        if (message.invoice_items && message.invoice_items.length) {
                            object.invoice_items = [];
                            for (var j = 0; j < message.invoice_items.length; ++j)
                                object.invoice_items[j] = $root.lab.system.billing.InvoiceItem.toObject(message.invoice_items[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Invoice to JSON.
                     * @function toJSON
                     * @memberof lab.system.billing.Invoice
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Invoice.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Invoice
                     * @function getTypeUrl
                     * @memberof lab.system.billing.Invoice
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Invoice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lab.system.billing.Invoice";
                    };
    
                    return Invoice;
                })();
    
                billing.InvoiceItemAdd = (function() {
    
                    /**
                     * Properties of an InvoiceItemAdd.
                     * @memberof lab.system.billing
                     * @interface IInvoiceItemAdd
                     * @property {number|null} [id] InvoiceItemAdd id
                     * @property {lab.system.billing.IInvoiceItem|null} [item] InvoiceItemAdd item
                     * @property {boolean|null} [add] InvoiceItemAdd add
                     */
    
                    /**
                     * Constructs a new InvoiceItemAdd.
                     * @memberof lab.system.billing
                     * @classdesc Represents an InvoiceItemAdd.
                     * @implements IInvoiceItemAdd
                     * @constructor
                     * @param {lab.system.billing.IInvoiceItemAdd=} [properties] Properties to set
                     */
                    function InvoiceItemAdd(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * InvoiceItemAdd id.
                     * @member {number} id
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @instance
                     */
                    InvoiceItemAdd.prototype.id = 0;
    
                    /**
                     * InvoiceItemAdd item.
                     * @member {lab.system.billing.IInvoiceItem|null|undefined} item
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @instance
                     */
                    InvoiceItemAdd.prototype.item = null;
    
                    /**
                     * InvoiceItemAdd add.
                     * @member {boolean} add
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @instance
                     */
                    InvoiceItemAdd.prototype.add = false;
    
                    /**
                     * Creates a new InvoiceItemAdd instance using the specified properties.
                     * @function create
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @static
                     * @param {lab.system.billing.IInvoiceItemAdd=} [properties] Properties to set
                     * @returns {lab.system.billing.InvoiceItemAdd} InvoiceItemAdd instance
                     */
                    InvoiceItemAdd.create = function create(properties) {
                        return new InvoiceItemAdd(properties);
                    };
    
                    /**
                     * Encodes the specified InvoiceItemAdd message. Does not implicitly {@link lab.system.billing.InvoiceItemAdd.verify|verify} messages.
                     * @function encode
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @static
                     * @param {lab.system.billing.IInvoiceItemAdd} message InvoiceItemAdd message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InvoiceItemAdd.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                        if (message.item != null && Object.hasOwnProperty.call(message, "item"))
                            $root.lab.system.billing.InvoiceItem.encode(message.item, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.add != null && Object.hasOwnProperty.call(message, "add"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.add);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified InvoiceItemAdd message, length delimited. Does not implicitly {@link lab.system.billing.InvoiceItemAdd.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @static
                     * @param {lab.system.billing.IInvoiceItemAdd} message InvoiceItemAdd message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InvoiceItemAdd.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an InvoiceItemAdd message from the specified reader or buffer.
                     * @function decode
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lab.system.billing.InvoiceItemAdd} InvoiceItemAdd
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InvoiceItemAdd.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lab.system.billing.InvoiceItemAdd();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.id = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.item = $root.lab.system.billing.InvoiceItem.decode(reader, reader.uint32());
                                    break;
                                }
                            case 3: {
                                    message.add = reader.bool();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an InvoiceItemAdd message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lab.system.billing.InvoiceItemAdd} InvoiceItemAdd
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InvoiceItemAdd.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an InvoiceItemAdd message.
                     * @function verify
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    InvoiceItemAdd.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id))
                                return "id: integer expected";
                        if (message.item != null && message.hasOwnProperty("item")) {
                            var error = $root.lab.system.billing.InvoiceItem.verify(message.item);
                            if (error)
                                return "item." + error;
                        }
                        if (message.add != null && message.hasOwnProperty("add"))
                            if (typeof message.add !== "boolean")
                                return "add: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates an InvoiceItemAdd message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lab.system.billing.InvoiceItemAdd} InvoiceItemAdd
                     */
                    InvoiceItemAdd.fromObject = function fromObject(object) {
                        if (object instanceof $root.lab.system.billing.InvoiceItemAdd)
                            return object;
                        var message = new $root.lab.system.billing.InvoiceItemAdd();
                        if (object.id != null)
                            message.id = object.id | 0;
                        if (object.item != null) {
                            if (typeof object.item !== "object")
                                throw TypeError(".lab.system.billing.InvoiceItemAdd.item: object expected");
                            message.item = $root.lab.system.billing.InvoiceItem.fromObject(object.item);
                        }
                        if (object.add != null)
                            message.add = Boolean(object.add);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an InvoiceItemAdd message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @static
                     * @param {lab.system.billing.InvoiceItemAdd} message InvoiceItemAdd
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    InvoiceItemAdd.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = 0;
                            object.item = null;
                            object.add = false;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.item != null && message.hasOwnProperty("item"))
                            object.item = $root.lab.system.billing.InvoiceItem.toObject(message.item, options);
                        if (message.add != null && message.hasOwnProperty("add"))
                            object.add = message.add;
                        return object;
                    };
    
                    /**
                     * Converts this InvoiceItemAdd to JSON.
                     * @function toJSON
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    InvoiceItemAdd.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for InvoiceItemAdd
                     * @function getTypeUrl
                     * @memberof lab.system.billing.InvoiceItemAdd
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    InvoiceItemAdd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lab.system.billing.InvoiceItemAdd";
                    };
    
                    return InvoiceItemAdd;
                })();
    
                billing.InvoiceFilter = (function() {
    
                    /**
                     * Properties of an InvoiceFilter.
                     * @memberof lab.system.billing
                     * @interface IInvoiceFilter
                     * @property {string|null} [period] InvoiceFilter period
                     * @property {string|null} [client_id] InvoiceFilter client_id
                     * @property {boolean|null} [invoice_status] InvoiceFilter invoice_status
                     */
    
                    /**
                     * Constructs a new InvoiceFilter.
                     * @memberof lab.system.billing
                     * @classdesc Represents an InvoiceFilter.
                     * @implements IInvoiceFilter
                     * @constructor
                     * @param {lab.system.billing.IInvoiceFilter=} [properties] Properties to set
                     */
                    function InvoiceFilter(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * InvoiceFilter period.
                     * @member {string} period
                     * @memberof lab.system.billing.InvoiceFilter
                     * @instance
                     */
                    InvoiceFilter.prototype.period = "";
    
                    /**
                     * InvoiceFilter client_id.
                     * @member {string} client_id
                     * @memberof lab.system.billing.InvoiceFilter
                     * @instance
                     */
                    InvoiceFilter.prototype.client_id = "";
    
                    /**
                     * InvoiceFilter invoice_status.
                     * @member {boolean} invoice_status
                     * @memberof lab.system.billing.InvoiceFilter
                     * @instance
                     */
                    InvoiceFilter.prototype.invoice_status = false;
    
                    /**
                     * Creates a new InvoiceFilter instance using the specified properties.
                     * @function create
                     * @memberof lab.system.billing.InvoiceFilter
                     * @static
                     * @param {lab.system.billing.IInvoiceFilter=} [properties] Properties to set
                     * @returns {lab.system.billing.InvoiceFilter} InvoiceFilter instance
                     */
                    InvoiceFilter.create = function create(properties) {
                        return new InvoiceFilter(properties);
                    };
    
                    /**
                     * Encodes the specified InvoiceFilter message. Does not implicitly {@link lab.system.billing.InvoiceFilter.verify|verify} messages.
                     * @function encode
                     * @memberof lab.system.billing.InvoiceFilter
                     * @static
                     * @param {lab.system.billing.IInvoiceFilter} message InvoiceFilter message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InvoiceFilter.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.period != null && Object.hasOwnProperty.call(message, "period"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.period);
                        if (message.client_id != null && Object.hasOwnProperty.call(message, "client_id"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.client_id);
                        if (message.invoice_status != null && Object.hasOwnProperty.call(message, "invoice_status"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.invoice_status);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified InvoiceFilter message, length delimited. Does not implicitly {@link lab.system.billing.InvoiceFilter.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lab.system.billing.InvoiceFilter
                     * @static
                     * @param {lab.system.billing.IInvoiceFilter} message InvoiceFilter message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InvoiceFilter.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an InvoiceFilter message from the specified reader or buffer.
                     * @function decode
                     * @memberof lab.system.billing.InvoiceFilter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lab.system.billing.InvoiceFilter} InvoiceFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InvoiceFilter.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lab.system.billing.InvoiceFilter();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.period = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.client_id = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.invoice_status = reader.bool();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an InvoiceFilter message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lab.system.billing.InvoiceFilter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lab.system.billing.InvoiceFilter} InvoiceFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InvoiceFilter.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an InvoiceFilter message.
                     * @function verify
                     * @memberof lab.system.billing.InvoiceFilter
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    InvoiceFilter.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.period != null && message.hasOwnProperty("period"))
                            if (!$util.isString(message.period))
                                return "period: string expected";
                        if (message.client_id != null && message.hasOwnProperty("client_id"))
                            if (!$util.isString(message.client_id))
                                return "client_id: string expected";
                        if (message.invoice_status != null && message.hasOwnProperty("invoice_status"))
                            if (typeof message.invoice_status !== "boolean")
                                return "invoice_status: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates an InvoiceFilter message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lab.system.billing.InvoiceFilter
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lab.system.billing.InvoiceFilter} InvoiceFilter
                     */
                    InvoiceFilter.fromObject = function fromObject(object) {
                        if (object instanceof $root.lab.system.billing.InvoiceFilter)
                            return object;
                        var message = new $root.lab.system.billing.InvoiceFilter();
                        if (object.period != null)
                            message.period = String(object.period);
                        if (object.client_id != null)
                            message.client_id = String(object.client_id);
                        if (object.invoice_status != null)
                            message.invoice_status = Boolean(object.invoice_status);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an InvoiceFilter message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lab.system.billing.InvoiceFilter
                     * @static
                     * @param {lab.system.billing.InvoiceFilter} message InvoiceFilter
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    InvoiceFilter.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.period = "";
                            object.client_id = "";
                            object.invoice_status = false;
                        }
                        if (message.period != null && message.hasOwnProperty("period"))
                            object.period = message.period;
                        if (message.client_id != null && message.hasOwnProperty("client_id"))
                            object.client_id = message.client_id;
                        if (message.invoice_status != null && message.hasOwnProperty("invoice_status"))
                            object.invoice_status = message.invoice_status;
                        return object;
                    };
    
                    /**
                     * Converts this InvoiceFilter to JSON.
                     * @function toJSON
                     * @memberof lab.system.billing.InvoiceFilter
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    InvoiceFilter.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for InvoiceFilter
                     * @function getTypeUrl
                     * @memberof lab.system.billing.InvoiceFilter
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    InvoiceFilter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lab.system.billing.InvoiceFilter";
                    };
    
                    return InvoiceFilter;
                })();
    
                billing.Invoices = (function() {
    
                    /**
                     * Properties of an Invoices.
                     * @memberof lab.system.billing
                     * @interface IInvoices
                     * @property {Array.<lab.system.billing.IInvoice>|null} [invoices] Invoices invoices
                     */
    
                    /**
                     * Constructs a new Invoices.
                     * @memberof lab.system.billing
                     * @classdesc Represents an Invoices.
                     * @implements IInvoices
                     * @constructor
                     * @param {lab.system.billing.IInvoices=} [properties] Properties to set
                     */
                    function Invoices(properties) {
                        this.invoices = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Invoices invoices.
                     * @member {Array.<lab.system.billing.IInvoice>} invoices
                     * @memberof lab.system.billing.Invoices
                     * @instance
                     */
                    Invoices.prototype.invoices = $util.emptyArray;
    
                    /**
                     * Creates a new Invoices instance using the specified properties.
                     * @function create
                     * @memberof lab.system.billing.Invoices
                     * @static
                     * @param {lab.system.billing.IInvoices=} [properties] Properties to set
                     * @returns {lab.system.billing.Invoices} Invoices instance
                     */
                    Invoices.create = function create(properties) {
                        return new Invoices(properties);
                    };
    
                    /**
                     * Encodes the specified Invoices message. Does not implicitly {@link lab.system.billing.Invoices.verify|verify} messages.
                     * @function encode
                     * @memberof lab.system.billing.Invoices
                     * @static
                     * @param {lab.system.billing.IInvoices} message Invoices message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Invoices.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.invoices != null && message.invoices.length)
                            for (var i = 0; i < message.invoices.length; ++i)
                                $root.lab.system.billing.Invoice.encode(message.invoices[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Invoices message, length delimited. Does not implicitly {@link lab.system.billing.Invoices.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lab.system.billing.Invoices
                     * @static
                     * @param {lab.system.billing.IInvoices} message Invoices message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Invoices.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Invoices message from the specified reader or buffer.
                     * @function decode
                     * @memberof lab.system.billing.Invoices
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lab.system.billing.Invoices} Invoices
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Invoices.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lab.system.billing.Invoices();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.invoices && message.invoices.length))
                                        message.invoices = [];
                                    message.invoices.push($root.lab.system.billing.Invoice.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Invoices message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lab.system.billing.Invoices
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lab.system.billing.Invoices} Invoices
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Invoices.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Invoices message.
                     * @function verify
                     * @memberof lab.system.billing.Invoices
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Invoices.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.invoices != null && message.hasOwnProperty("invoices")) {
                            if (!Array.isArray(message.invoices))
                                return "invoices: array expected";
                            for (var i = 0; i < message.invoices.length; ++i) {
                                var error = $root.lab.system.billing.Invoice.verify(message.invoices[i]);
                                if (error)
                                    return "invoices." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates an Invoices message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lab.system.billing.Invoices
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lab.system.billing.Invoices} Invoices
                     */
                    Invoices.fromObject = function fromObject(object) {
                        if (object instanceof $root.lab.system.billing.Invoices)
                            return object;
                        var message = new $root.lab.system.billing.Invoices();
                        if (object.invoices) {
                            if (!Array.isArray(object.invoices))
                                throw TypeError(".lab.system.billing.Invoices.invoices: array expected");
                            message.invoices = [];
                            for (var i = 0; i < object.invoices.length; ++i) {
                                if (typeof object.invoices[i] !== "object")
                                    throw TypeError(".lab.system.billing.Invoices.invoices: object expected");
                                message.invoices[i] = $root.lab.system.billing.Invoice.fromObject(object.invoices[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Invoices message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lab.system.billing.Invoices
                     * @static
                     * @param {lab.system.billing.Invoices} message Invoices
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Invoices.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.invoices = [];
                        if (message.invoices && message.invoices.length) {
                            object.invoices = [];
                            for (var j = 0; j < message.invoices.length; ++j)
                                object.invoices[j] = $root.lab.system.billing.Invoice.toObject(message.invoices[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Invoices to JSON.
                     * @function toJSON
                     * @memberof lab.system.billing.Invoices
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Invoices.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Invoices
                     * @function getTypeUrl
                     * @memberof lab.system.billing.Invoices
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Invoices.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lab.system.billing.Invoices";
                    };
    
                    return Invoices;
                })();
    
                return billing;
            })();
    
            system.custody = (function() {
    
                /**
                 * Namespace custody.
                 * @memberof lab.system
                 * @namespace
                 */
                var custody = {};
    
                custody.CustodyService = (function() {
    
                    /**
                     * Constructs a new CustodyService service.
                     * @memberof lab.system.custody
                     * @classdesc Represents a CustodyService
                     * @extends $protobuf.rpc.Service
                     * @constructor
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     */
                    function CustodyService(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }
    
                    (CustodyService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CustodyService;
    
                    /**
                     * Creates new CustodyService service using the specified rpc implementation.
                     * @function create
                     * @memberof lab.system.custody.CustodyService
                     * @static
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     * @returns {CustodyService} RPC service. Useful where requests and/or responses are streamed.
                     */
                    CustodyService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                        return new this(rpcImpl, requestDelimited, responseDelimited);
                    };
    
                    /**
                     * Callback as used by {@link lab.system.custody.CustodyService#addCustodyStock}.
                     * @memberof lab.system.custody.CustodyService
                     * @typedef AddCustodyStockCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {lab.system.custody.Empty} [response] Empty
                     */
    
                    /**
                     * Calls AddCustodyStock.
                     * @function addCustodyStock
                     * @memberof lab.system.custody.CustodyService
                     * @instance
                     * @param {lab.system.custody.ICustodyAdd} request CustodyAdd message or plain object
                     * @param {lab.system.custody.CustodyService.AddCustodyStockCallback} callback Node-style callback called with the error, if any, and Empty
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(CustodyService.prototype.addCustodyStock = function addCustodyStock(request, callback) {
                        return this.rpcCall(addCustodyStock, $root.lab.system.custody.CustodyAdd, $root.lab.system.custody.Empty, request, callback);
                    }, "name", { value: "AddCustodyStock" });
    
                    /**
                     * Calls AddCustodyStock.
                     * @function addCustodyStock
                     * @memberof lab.system.custody.CustodyService
                     * @instance
                     * @param {lab.system.custody.ICustodyAdd} request CustodyAdd message or plain object
                     * @returns {Promise<lab.system.custody.Empty>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link lab.system.custody.CustodyService#closePeriod}.
                     * @memberof lab.system.custody.CustodyService
                     * @typedef ClosePeriodCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {lab.system.custody.Empty} [response] Empty
                     */
    
                    /**
                     * Calls ClosePeriod.
                     * @function closePeriod
                     * @memberof lab.system.custody.CustodyService
                     * @instance
                     * @param {lab.system.custody.ICloseFilters} request CloseFilters message or plain object
                     * @param {lab.system.custody.CustodyService.ClosePeriodCallback} callback Node-style callback called with the error, if any, and Empty
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(CustodyService.prototype.closePeriod = function closePeriod(request, callback) {
                        return this.rpcCall(closePeriod, $root.lab.system.custody.CloseFilters, $root.lab.system.custody.Empty, request, callback);
                    }, "name", { value: "ClosePeriod" });
    
                    /**
                     * Calls ClosePeriod.
                     * @function closePeriod
                     * @memberof lab.system.custody.CustodyService
                     * @instance
                     * @param {lab.system.custody.ICloseFilters} request CloseFilters message or plain object
                     * @returns {Promise<lab.system.custody.Empty>} Promise
                     * @variation 2
                     */
    
                    /**
                     * Callback as used by {@link lab.system.custody.CustodyService#getCustody}.
                     * @memberof lab.system.custody.CustodyService
                     * @typedef GetCustodyCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {lab.system.custody.Custodies} [response] Custodies
                     */
    
                    /**
                     * Calls GetCustody.
                     * @function getCustody
                     * @memberof lab.system.custody.CustodyService
                     * @instance
                     * @param {lab.system.custody.ICustodyFilter} request CustodyFilter message or plain object
                     * @param {lab.system.custody.CustodyService.GetCustodyCallback} callback Node-style callback called with the error, if any, and Custodies
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(CustodyService.prototype.getCustody = function getCustody(request, callback) {
                        return this.rpcCall(getCustody, $root.lab.system.custody.CustodyFilter, $root.lab.system.custody.Custodies, request, callback);
                    }, "name", { value: "GetCustody" });
    
                    /**
                     * Calls GetCustody.
                     * @function getCustody
                     * @memberof lab.system.custody.CustodyService
                     * @instance
                     * @param {lab.system.custody.ICustodyFilter} request CustodyFilter message or plain object
                     * @returns {Promise<lab.system.custody.Custodies>} Promise
                     * @variation 2
                     */
    
                    return CustodyService;
                })();
    
                custody.Empty = (function() {
    
                    /**
                     * Properties of an Empty.
                     * @memberof lab.system.custody
                     * @interface IEmpty
                     */
    
                    /**
                     * Constructs a new Empty.
                     * @memberof lab.system.custody
                     * @classdesc Represents an Empty.
                     * @implements IEmpty
                     * @constructor
                     * @param {lab.system.custody.IEmpty=} [properties] Properties to set
                     */
                    function Empty(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new Empty instance using the specified properties.
                     * @function create
                     * @memberof lab.system.custody.Empty
                     * @static
                     * @param {lab.system.custody.IEmpty=} [properties] Properties to set
                     * @returns {lab.system.custody.Empty} Empty instance
                     */
                    Empty.create = function create(properties) {
                        return new Empty(properties);
                    };
    
                    /**
                     * Encodes the specified Empty message. Does not implicitly {@link lab.system.custody.Empty.verify|verify} messages.
                     * @function encode
                     * @memberof lab.system.custody.Empty
                     * @static
                     * @param {lab.system.custody.IEmpty} message Empty message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Empty.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Empty message, length delimited. Does not implicitly {@link lab.system.custody.Empty.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lab.system.custody.Empty
                     * @static
                     * @param {lab.system.custody.IEmpty} message Empty message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Empty.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Empty message from the specified reader or buffer.
                     * @function decode
                     * @memberof lab.system.custody.Empty
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lab.system.custody.Empty} Empty
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Empty.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lab.system.custody.Empty();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Empty message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lab.system.custody.Empty
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lab.system.custody.Empty} Empty
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Empty.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Empty message.
                     * @function verify
                     * @memberof lab.system.custody.Empty
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Empty.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lab.system.custody.Empty
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lab.system.custody.Empty} Empty
                     */
                    Empty.fromObject = function fromObject(object) {
                        if (object instanceof $root.lab.system.custody.Empty)
                            return object;
                        return new $root.lab.system.custody.Empty();
                    };
    
                    /**
                     * Creates a plain object from an Empty message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lab.system.custody.Empty
                     * @static
                     * @param {lab.system.custody.Empty} message Empty
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Empty.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this Empty to JSON.
                     * @function toJSON
                     * @memberof lab.system.custody.Empty
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Empty.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Empty
                     * @function getTypeUrl
                     * @memberof lab.system.custody.Empty
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lab.system.custody.Empty";
                    };
    
                    return Empty;
                })();
    
                custody.CustodyAdd = (function() {
    
                    /**
                     * Properties of a CustodyAdd.
                     * @memberof lab.system.custody
                     * @interface ICustodyAdd
                     * @property {string|null} [period] CustodyAdd period
                     * @property {string|null} [stock] CustodyAdd stock
                     * @property {string|null} [client_id] CustodyAdd client_id
                     * @property {number|null} [quantity] CustodyAdd quantity
                     */
    
                    /**
                     * Constructs a new CustodyAdd.
                     * @memberof lab.system.custody
                     * @classdesc Represents a CustodyAdd.
                     * @implements ICustodyAdd
                     * @constructor
                     * @param {lab.system.custody.ICustodyAdd=} [properties] Properties to set
                     */
                    function CustodyAdd(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CustodyAdd period.
                     * @member {string} period
                     * @memberof lab.system.custody.CustodyAdd
                     * @instance
                     */
                    CustodyAdd.prototype.period = "";
    
                    /**
                     * CustodyAdd stock.
                     * @member {string} stock
                     * @memberof lab.system.custody.CustodyAdd
                     * @instance
                     */
                    CustodyAdd.prototype.stock = "";
    
                    /**
                     * CustodyAdd client_id.
                     * @member {string} client_id
                     * @memberof lab.system.custody.CustodyAdd
                     * @instance
                     */
                    CustodyAdd.prototype.client_id = "";
    
                    /**
                     * CustodyAdd quantity.
                     * @member {number} quantity
                     * @memberof lab.system.custody.CustodyAdd
                     * @instance
                     */
                    CustodyAdd.prototype.quantity = 0;
    
                    /**
                     * Creates a new CustodyAdd instance using the specified properties.
                     * @function create
                     * @memberof lab.system.custody.CustodyAdd
                     * @static
                     * @param {lab.system.custody.ICustodyAdd=} [properties] Properties to set
                     * @returns {lab.system.custody.CustodyAdd} CustodyAdd instance
                     */
                    CustodyAdd.create = function create(properties) {
                        return new CustodyAdd(properties);
                    };
    
                    /**
                     * Encodes the specified CustodyAdd message. Does not implicitly {@link lab.system.custody.CustodyAdd.verify|verify} messages.
                     * @function encode
                     * @memberof lab.system.custody.CustodyAdd
                     * @static
                     * @param {lab.system.custody.ICustodyAdd} message CustodyAdd message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CustodyAdd.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.period != null && Object.hasOwnProperty.call(message, "period"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.period);
                        if (message.stock != null && Object.hasOwnProperty.call(message, "stock"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.stock);
                        if (message.client_id != null && Object.hasOwnProperty.call(message, "client_id"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.client_id);
                        if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                            writer.uint32(/* id 4, wireType 1 =*/33).double(message.quantity);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CustodyAdd message, length delimited. Does not implicitly {@link lab.system.custody.CustodyAdd.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lab.system.custody.CustodyAdd
                     * @static
                     * @param {lab.system.custody.ICustodyAdd} message CustodyAdd message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CustodyAdd.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CustodyAdd message from the specified reader or buffer.
                     * @function decode
                     * @memberof lab.system.custody.CustodyAdd
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lab.system.custody.CustodyAdd} CustodyAdd
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CustodyAdd.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lab.system.custody.CustodyAdd();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.period = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.stock = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.client_id = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.quantity = reader.double();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a CustodyAdd message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lab.system.custody.CustodyAdd
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lab.system.custody.CustodyAdd} CustodyAdd
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CustodyAdd.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CustodyAdd message.
                     * @function verify
                     * @memberof lab.system.custody.CustodyAdd
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CustodyAdd.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.period != null && message.hasOwnProperty("period"))
                            if (!$util.isString(message.period))
                                return "period: string expected";
                        if (message.stock != null && message.hasOwnProperty("stock"))
                            if (!$util.isString(message.stock))
                                return "stock: string expected";
                        if (message.client_id != null && message.hasOwnProperty("client_id"))
                            if (!$util.isString(message.client_id))
                                return "client_id: string expected";
                        if (message.quantity != null && message.hasOwnProperty("quantity"))
                            if (typeof message.quantity !== "number")
                                return "quantity: number expected";
                        return null;
                    };
    
                    /**
                     * Creates a CustodyAdd message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lab.system.custody.CustodyAdd
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lab.system.custody.CustodyAdd} CustodyAdd
                     */
                    CustodyAdd.fromObject = function fromObject(object) {
                        if (object instanceof $root.lab.system.custody.CustodyAdd)
                            return object;
                        var message = new $root.lab.system.custody.CustodyAdd();
                        if (object.period != null)
                            message.period = String(object.period);
                        if (object.stock != null)
                            message.stock = String(object.stock);
                        if (object.client_id != null)
                            message.client_id = String(object.client_id);
                        if (object.quantity != null)
                            message.quantity = Number(object.quantity);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a CustodyAdd message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lab.system.custody.CustodyAdd
                     * @static
                     * @param {lab.system.custody.CustodyAdd} message CustodyAdd
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CustodyAdd.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.period = "";
                            object.stock = "";
                            object.client_id = "";
                            object.quantity = 0;
                        }
                        if (message.period != null && message.hasOwnProperty("period"))
                            object.period = message.period;
                        if (message.stock != null && message.hasOwnProperty("stock"))
                            object.stock = message.stock;
                        if (message.client_id != null && message.hasOwnProperty("client_id"))
                            object.client_id = message.client_id;
                        if (message.quantity != null && message.hasOwnProperty("quantity"))
                            object.quantity = options.json && !isFinite(message.quantity) ? String(message.quantity) : message.quantity;
                        return object;
                    };
    
                    /**
                     * Converts this CustodyAdd to JSON.
                     * @function toJSON
                     * @memberof lab.system.custody.CustodyAdd
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CustodyAdd.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for CustodyAdd
                     * @function getTypeUrl
                     * @memberof lab.system.custody.CustodyAdd
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CustodyAdd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lab.system.custody.CustodyAdd";
                    };
    
                    return CustodyAdd;
                })();
    
                custody.CloseFilters = (function() {
    
                    /**
                     * Properties of a CloseFilters.
                     * @memberof lab.system.custody
                     * @interface ICloseFilters
                     * @property {string|null} [period] CloseFilters period
                     * @property {string|null} [market] CloseFilters market
                     */
    
                    /**
                     * Constructs a new CloseFilters.
                     * @memberof lab.system.custody
                     * @classdesc Represents a CloseFilters.
                     * @implements ICloseFilters
                     * @constructor
                     * @param {lab.system.custody.ICloseFilters=} [properties] Properties to set
                     */
                    function CloseFilters(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CloseFilters period.
                     * @member {string} period
                     * @memberof lab.system.custody.CloseFilters
                     * @instance
                     */
                    CloseFilters.prototype.period = "";
    
                    /**
                     * CloseFilters market.
                     * @member {string} market
                     * @memberof lab.system.custody.CloseFilters
                     * @instance
                     */
                    CloseFilters.prototype.market = "";
    
                    /**
                     * Creates a new CloseFilters instance using the specified properties.
                     * @function create
                     * @memberof lab.system.custody.CloseFilters
                     * @static
                     * @param {lab.system.custody.ICloseFilters=} [properties] Properties to set
                     * @returns {lab.system.custody.CloseFilters} CloseFilters instance
                     */
                    CloseFilters.create = function create(properties) {
                        return new CloseFilters(properties);
                    };
    
                    /**
                     * Encodes the specified CloseFilters message. Does not implicitly {@link lab.system.custody.CloseFilters.verify|verify} messages.
                     * @function encode
                     * @memberof lab.system.custody.CloseFilters
                     * @static
                     * @param {lab.system.custody.ICloseFilters} message CloseFilters message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CloseFilters.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.period != null && Object.hasOwnProperty.call(message, "period"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.period);
                        if (message.market != null && Object.hasOwnProperty.call(message, "market"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.market);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CloseFilters message, length delimited. Does not implicitly {@link lab.system.custody.CloseFilters.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lab.system.custody.CloseFilters
                     * @static
                     * @param {lab.system.custody.ICloseFilters} message CloseFilters message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CloseFilters.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CloseFilters message from the specified reader or buffer.
                     * @function decode
                     * @memberof lab.system.custody.CloseFilters
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lab.system.custody.CloseFilters} CloseFilters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CloseFilters.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lab.system.custody.CloseFilters();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.period = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.market = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a CloseFilters message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lab.system.custody.CloseFilters
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lab.system.custody.CloseFilters} CloseFilters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CloseFilters.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CloseFilters message.
                     * @function verify
                     * @memberof lab.system.custody.CloseFilters
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CloseFilters.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.period != null && message.hasOwnProperty("period"))
                            if (!$util.isString(message.period))
                                return "period: string expected";
                        if (message.market != null && message.hasOwnProperty("market"))
                            if (!$util.isString(message.market))
                                return "market: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a CloseFilters message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lab.system.custody.CloseFilters
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lab.system.custody.CloseFilters} CloseFilters
                     */
                    CloseFilters.fromObject = function fromObject(object) {
                        if (object instanceof $root.lab.system.custody.CloseFilters)
                            return object;
                        var message = new $root.lab.system.custody.CloseFilters();
                        if (object.period != null)
                            message.period = String(object.period);
                        if (object.market != null)
                            message.market = String(object.market);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a CloseFilters message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lab.system.custody.CloseFilters
                     * @static
                     * @param {lab.system.custody.CloseFilters} message CloseFilters
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CloseFilters.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.period = "";
                            object.market = "";
                        }
                        if (message.period != null && message.hasOwnProperty("period"))
                            object.period = message.period;
                        if (message.market != null && message.hasOwnProperty("market"))
                            object.market = message.market;
                        return object;
                    };
    
                    /**
                     * Converts this CloseFilters to JSON.
                     * @function toJSON
                     * @memberof lab.system.custody.CloseFilters
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CloseFilters.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for CloseFilters
                     * @function getTypeUrl
                     * @memberof lab.system.custody.CloseFilters
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CloseFilters.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lab.system.custody.CloseFilters";
                    };
    
                    return CloseFilters;
                })();
    
                custody.CustodyFilter = (function() {
    
                    /**
                     * Properties of a CustodyFilter.
                     * @memberof lab.system.custody
                     * @interface ICustodyFilter
                     * @property {string|null} [period] CustodyFilter period
                     * @property {string|null} [stock] CustodyFilter stock
                     * @property {string|null} [client_id] CustodyFilter client_id
                     */
    
                    /**
                     * Constructs a new CustodyFilter.
                     * @memberof lab.system.custody
                     * @classdesc Represents a CustodyFilter.
                     * @implements ICustodyFilter
                     * @constructor
                     * @param {lab.system.custody.ICustodyFilter=} [properties] Properties to set
                     */
                    function CustodyFilter(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CustodyFilter period.
                     * @member {string} period
                     * @memberof lab.system.custody.CustodyFilter
                     * @instance
                     */
                    CustodyFilter.prototype.period = "";
    
                    /**
                     * CustodyFilter stock.
                     * @member {string} stock
                     * @memberof lab.system.custody.CustodyFilter
                     * @instance
                     */
                    CustodyFilter.prototype.stock = "";
    
                    /**
                     * CustodyFilter client_id.
                     * @member {string} client_id
                     * @memberof lab.system.custody.CustodyFilter
                     * @instance
                     */
                    CustodyFilter.prototype.client_id = "";
    
                    /**
                     * Creates a new CustodyFilter instance using the specified properties.
                     * @function create
                     * @memberof lab.system.custody.CustodyFilter
                     * @static
                     * @param {lab.system.custody.ICustodyFilter=} [properties] Properties to set
                     * @returns {lab.system.custody.CustodyFilter} CustodyFilter instance
                     */
                    CustodyFilter.create = function create(properties) {
                        return new CustodyFilter(properties);
                    };
    
                    /**
                     * Encodes the specified CustodyFilter message. Does not implicitly {@link lab.system.custody.CustodyFilter.verify|verify} messages.
                     * @function encode
                     * @memberof lab.system.custody.CustodyFilter
                     * @static
                     * @param {lab.system.custody.ICustodyFilter} message CustodyFilter message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CustodyFilter.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.period != null && Object.hasOwnProperty.call(message, "period"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.period);
                        if (message.stock != null && Object.hasOwnProperty.call(message, "stock"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.stock);
                        if (message.client_id != null && Object.hasOwnProperty.call(message, "client_id"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.client_id);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CustodyFilter message, length delimited. Does not implicitly {@link lab.system.custody.CustodyFilter.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lab.system.custody.CustodyFilter
                     * @static
                     * @param {lab.system.custody.ICustodyFilter} message CustodyFilter message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CustodyFilter.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CustodyFilter message from the specified reader or buffer.
                     * @function decode
                     * @memberof lab.system.custody.CustodyFilter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lab.system.custody.CustodyFilter} CustodyFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CustodyFilter.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lab.system.custody.CustodyFilter();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.period = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.stock = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.client_id = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a CustodyFilter message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lab.system.custody.CustodyFilter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lab.system.custody.CustodyFilter} CustodyFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CustodyFilter.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CustodyFilter message.
                     * @function verify
                     * @memberof lab.system.custody.CustodyFilter
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CustodyFilter.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.period != null && message.hasOwnProperty("period"))
                            if (!$util.isString(message.period))
                                return "period: string expected";
                        if (message.stock != null && message.hasOwnProperty("stock"))
                            if (!$util.isString(message.stock))
                                return "stock: string expected";
                        if (message.client_id != null && message.hasOwnProperty("client_id"))
                            if (!$util.isString(message.client_id))
                                return "client_id: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a CustodyFilter message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lab.system.custody.CustodyFilter
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lab.system.custody.CustodyFilter} CustodyFilter
                     */
                    CustodyFilter.fromObject = function fromObject(object) {
                        if (object instanceof $root.lab.system.custody.CustodyFilter)
                            return object;
                        var message = new $root.lab.system.custody.CustodyFilter();
                        if (object.period != null)
                            message.period = String(object.period);
                        if (object.stock != null)
                            message.stock = String(object.stock);
                        if (object.client_id != null)
                            message.client_id = String(object.client_id);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a CustodyFilter message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lab.system.custody.CustodyFilter
                     * @static
                     * @param {lab.system.custody.CustodyFilter} message CustodyFilter
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CustodyFilter.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.period = "";
                            object.stock = "";
                            object.client_id = "";
                        }
                        if (message.period != null && message.hasOwnProperty("period"))
                            object.period = message.period;
                        if (message.stock != null && message.hasOwnProperty("stock"))
                            object.stock = message.stock;
                        if (message.client_id != null && message.hasOwnProperty("client_id"))
                            object.client_id = message.client_id;
                        return object;
                    };
    
                    /**
                     * Converts this CustodyFilter to JSON.
                     * @function toJSON
                     * @memberof lab.system.custody.CustodyFilter
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CustodyFilter.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for CustodyFilter
                     * @function getTypeUrl
                     * @memberof lab.system.custody.CustodyFilter
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CustodyFilter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lab.system.custody.CustodyFilter";
                    };
    
                    return CustodyFilter;
                })();
    
                custody.Custodies = (function() {
    
                    /**
                     * Properties of a Custodies.
                     * @memberof lab.system.custody
                     * @interface ICustodies
                     * @property {Array.<lab.system.custody.Custodies.ICustody>|null} [items] Custodies items
                     */
    
                    /**
                     * Constructs a new Custodies.
                     * @memberof lab.system.custody
                     * @classdesc Represents a Custodies.
                     * @implements ICustodies
                     * @constructor
                     * @param {lab.system.custody.ICustodies=} [properties] Properties to set
                     */
                    function Custodies(properties) {
                        this.items = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Custodies items.
                     * @member {Array.<lab.system.custody.Custodies.ICustody>} items
                     * @memberof lab.system.custody.Custodies
                     * @instance
                     */
                    Custodies.prototype.items = $util.emptyArray;
    
                    /**
                     * Creates a new Custodies instance using the specified properties.
                     * @function create
                     * @memberof lab.system.custody.Custodies
                     * @static
                     * @param {lab.system.custody.ICustodies=} [properties] Properties to set
                     * @returns {lab.system.custody.Custodies} Custodies instance
                     */
                    Custodies.create = function create(properties) {
                        return new Custodies(properties);
                    };
    
                    /**
                     * Encodes the specified Custodies message. Does not implicitly {@link lab.system.custody.Custodies.verify|verify} messages.
                     * @function encode
                     * @memberof lab.system.custody.Custodies
                     * @static
                     * @param {lab.system.custody.ICustodies} message Custodies message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Custodies.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.items != null && message.items.length)
                            for (var i = 0; i < message.items.length; ++i)
                                $root.lab.system.custody.Custodies.Custody.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Custodies message, length delimited. Does not implicitly {@link lab.system.custody.Custodies.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof lab.system.custody.Custodies
                     * @static
                     * @param {lab.system.custody.ICustodies} message Custodies message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Custodies.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Custodies message from the specified reader or buffer.
                     * @function decode
                     * @memberof lab.system.custody.Custodies
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {lab.system.custody.Custodies} Custodies
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Custodies.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lab.system.custody.Custodies();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.items && message.items.length))
                                        message.items = [];
                                    message.items.push($root.lab.system.custody.Custodies.Custody.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Custodies message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof lab.system.custody.Custodies
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {lab.system.custody.Custodies} Custodies
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Custodies.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Custodies message.
                     * @function verify
                     * @memberof lab.system.custody.Custodies
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Custodies.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.items != null && message.hasOwnProperty("items")) {
                            if (!Array.isArray(message.items))
                                return "items: array expected";
                            for (var i = 0; i < message.items.length; ++i) {
                                var error = $root.lab.system.custody.Custodies.Custody.verify(message.items[i]);
                                if (error)
                                    return "items." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Custodies message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof lab.system.custody.Custodies
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {lab.system.custody.Custodies} Custodies
                     */
                    Custodies.fromObject = function fromObject(object) {
                        if (object instanceof $root.lab.system.custody.Custodies)
                            return object;
                        var message = new $root.lab.system.custody.Custodies();
                        if (object.items) {
                            if (!Array.isArray(object.items))
                                throw TypeError(".lab.system.custody.Custodies.items: array expected");
                            message.items = [];
                            for (var i = 0; i < object.items.length; ++i) {
                                if (typeof object.items[i] !== "object")
                                    throw TypeError(".lab.system.custody.Custodies.items: object expected");
                                message.items[i] = $root.lab.system.custody.Custodies.Custody.fromObject(object.items[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Custodies message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof lab.system.custody.Custodies
                     * @static
                     * @param {lab.system.custody.Custodies} message Custodies
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Custodies.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.items = [];
                        if (message.items && message.items.length) {
                            object.items = [];
                            for (var j = 0; j < message.items.length; ++j)
                                object.items[j] = $root.lab.system.custody.Custodies.Custody.toObject(message.items[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Custodies to JSON.
                     * @function toJSON
                     * @memberof lab.system.custody.Custodies
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Custodies.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for Custodies
                     * @function getTypeUrl
                     * @memberof lab.system.custody.Custodies
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Custodies.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/lab.system.custody.Custodies";
                    };
    
                    Custodies.Custody = (function() {
    
                        /**
                         * Properties of a Custody.
                         * @memberof lab.system.custody.Custodies
                         * @interface ICustody
                         * @property {string|null} [period] Custody period
                         * @property {string|null} [stock] Custody stock
                         * @property {string|null} [client_id] Custody client_id
                         * @property {string|null} [market] Custody market
                         * @property {number|null} [price] Custody price
                         * @property {number|null} [quantity] Custody quantity
                         */
    
                        /**
                         * Constructs a new Custody.
                         * @memberof lab.system.custody.Custodies
                         * @classdesc Represents a Custody.
                         * @implements ICustody
                         * @constructor
                         * @param {lab.system.custody.Custodies.ICustody=} [properties] Properties to set
                         */
                        function Custody(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Custody period.
                         * @member {string} period
                         * @memberof lab.system.custody.Custodies.Custody
                         * @instance
                         */
                        Custody.prototype.period = "";
    
                        /**
                         * Custody stock.
                         * @member {string} stock
                         * @memberof lab.system.custody.Custodies.Custody
                         * @instance
                         */
                        Custody.prototype.stock = "";
    
                        /**
                         * Custody client_id.
                         * @member {string} client_id
                         * @memberof lab.system.custody.Custodies.Custody
                         * @instance
                         */
                        Custody.prototype.client_id = "";
    
                        /**
                         * Custody market.
                         * @member {string} market
                         * @memberof lab.system.custody.Custodies.Custody
                         * @instance
                         */
                        Custody.prototype.market = "";
    
                        /**
                         * Custody price.
                         * @member {number} price
                         * @memberof lab.system.custody.Custodies.Custody
                         * @instance
                         */
                        Custody.prototype.price = 0;
    
                        /**
                         * Custody quantity.
                         * @member {number} quantity
                         * @memberof lab.system.custody.Custodies.Custody
                         * @instance
                         */
                        Custody.prototype.quantity = 0;
    
                        /**
                         * Creates a new Custody instance using the specified properties.
                         * @function create
                         * @memberof lab.system.custody.Custodies.Custody
                         * @static
                         * @param {lab.system.custody.Custodies.ICustody=} [properties] Properties to set
                         * @returns {lab.system.custody.Custodies.Custody} Custody instance
                         */
                        Custody.create = function create(properties) {
                            return new Custody(properties);
                        };
    
                        /**
                         * Encodes the specified Custody message. Does not implicitly {@link lab.system.custody.Custodies.Custody.verify|verify} messages.
                         * @function encode
                         * @memberof lab.system.custody.Custodies.Custody
                         * @static
                         * @param {lab.system.custody.Custodies.ICustody} message Custody message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Custody.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.period != null && Object.hasOwnProperty.call(message, "period"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.period);
                            if (message.stock != null && Object.hasOwnProperty.call(message, "stock"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.stock);
                            if (message.client_id != null && Object.hasOwnProperty.call(message, "client_id"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.client_id);
                            if (message.market != null && Object.hasOwnProperty.call(message, "market"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.market);
                            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                                writer.uint32(/* id 5, wireType 1 =*/41).double(message.price);
                            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.quantity);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Custody message, length delimited. Does not implicitly {@link lab.system.custody.Custodies.Custody.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof lab.system.custody.Custodies.Custody
                         * @static
                         * @param {lab.system.custody.Custodies.ICustody} message Custody message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Custody.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Custody message from the specified reader or buffer.
                         * @function decode
                         * @memberof lab.system.custody.Custodies.Custody
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {lab.system.custody.Custodies.Custody} Custody
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Custody.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lab.system.custody.Custodies.Custody();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.period = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.stock = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.client_id = reader.string();
                                        break;
                                    }
                                case 4: {
                                        message.market = reader.string();
                                        break;
                                    }
                                case 5: {
                                        message.price = reader.double();
                                        break;
                                    }
                                case 6: {
                                        message.quantity = reader.int32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a Custody message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof lab.system.custody.Custodies.Custody
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {lab.system.custody.Custodies.Custody} Custody
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Custody.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a Custody message.
                         * @function verify
                         * @memberof lab.system.custody.Custodies.Custody
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Custody.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.period != null && message.hasOwnProperty("period"))
                                if (!$util.isString(message.period))
                                    return "period: string expected";
                            if (message.stock != null && message.hasOwnProperty("stock"))
                                if (!$util.isString(message.stock))
                                    return "stock: string expected";
                            if (message.client_id != null && message.hasOwnProperty("client_id"))
                                if (!$util.isString(message.client_id))
                                    return "client_id: string expected";
                            if (message.market != null && message.hasOwnProperty("market"))
                                if (!$util.isString(message.market))
                                    return "market: string expected";
                            if (message.price != null && message.hasOwnProperty("price"))
                                if (typeof message.price !== "number")
                                    return "price: number expected";
                            if (message.quantity != null && message.hasOwnProperty("quantity"))
                                if (!$util.isInteger(message.quantity))
                                    return "quantity: integer expected";
                            return null;
                        };
    
                        /**
                         * Creates a Custody message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof lab.system.custody.Custodies.Custody
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {lab.system.custody.Custodies.Custody} Custody
                         */
                        Custody.fromObject = function fromObject(object) {
                            if (object instanceof $root.lab.system.custody.Custodies.Custody)
                                return object;
                            var message = new $root.lab.system.custody.Custodies.Custody();
                            if (object.period != null)
                                message.period = String(object.period);
                            if (object.stock != null)
                                message.stock = String(object.stock);
                            if (object.client_id != null)
                                message.client_id = String(object.client_id);
                            if (object.market != null)
                                message.market = String(object.market);
                            if (object.price != null)
                                message.price = Number(object.price);
                            if (object.quantity != null)
                                message.quantity = object.quantity | 0;
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Custody message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof lab.system.custody.Custodies.Custody
                         * @static
                         * @param {lab.system.custody.Custodies.Custody} message Custody
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Custody.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.period = "";
                                object.stock = "";
                                object.client_id = "";
                                object.market = "";
                                object.price = 0;
                                object.quantity = 0;
                            }
                            if (message.period != null && message.hasOwnProperty("period"))
                                object.period = message.period;
                            if (message.stock != null && message.hasOwnProperty("stock"))
                                object.stock = message.stock;
                            if (message.client_id != null && message.hasOwnProperty("client_id"))
                                object.client_id = message.client_id;
                            if (message.market != null && message.hasOwnProperty("market"))
                                object.market = message.market;
                            if (message.price != null && message.hasOwnProperty("price"))
                                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
                            if (message.quantity != null && message.hasOwnProperty("quantity"))
                                object.quantity = message.quantity;
                            return object;
                        };
    
                        /**
                         * Converts this Custody to JSON.
                         * @function toJSON
                         * @memberof lab.system.custody.Custodies.Custody
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Custody.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for Custody
                         * @function getTypeUrl
                         * @memberof lab.system.custody.Custodies.Custody
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Custody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/lab.system.custody.Custodies.Custody";
                        };
    
                        return Custody;
                    })();
    
                    return Custodies;
                })();
    
                return custody;
            })();
    
            return system;
        })();
    
        return lab;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {number|Long|null} [seconds] Timestamp seconds
                 * @property {number|null} [nanos] Timestamp nanos
                 */
    
                /**
                 * Constructs a new Timestamp.
                 * @memberof google.protobuf
                 * @classdesc Represents a Timestamp.
                 * @implements ITimestamp
                 * @constructor
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 */
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timestamp seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
    
                /**
                 * Creates a new Timestamp instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 * @returns {google.protobuf.Timestamp} Timestamp instance
                 */
                Timestamp.create = function create(properties) {
                    return new Timestamp(properties);
                };
    
                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.seconds = reader.int64();
                                break;
                            }
                        case 2: {
                                message.nanos = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Timestamp message.
                 * @function verify
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timestamp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Timestamp} Timestamp
                 */
                Timestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Timestamp)
                        return object;
                    var message = new $root.google.protobuf.Timestamp();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timestamp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Timestamp to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Timestamp
                 * @function getTypeUrl
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.Timestamp";
                };
    
                return Timestamp;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
