/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import { protoMetadata as protoMetadata7, ShippingAddress } from "./address";
import { Amount, protoMetadata as protoMetadata8 } from "./amount";
import { Attribute, protoMetadata as protoMetadata6 } from "./attribute";
import { protoMetadata as protoMetadata4, Subject } from "./auth";
import { Item, Parcel, protoMetadata as protoMetadata12 } from "./fulfillment";
import { protoMetadata as protoMetadata11 } from "./fulfillment_courier";
import { BoundingBox3D, protoMetadata as protoMetadata10 } from "./geometry";
import { Meta, protoMetadata as protoMetadata3 } from "./meta";
import { KafkaSubscription, protoMetadata as protoMetadata13, Resolver } from "./options";
import { Price, protoMetadata as protoMetadata9 } from "./price";
import { protoMetadata as protoMetadata1, Reference } from "./reference";
import { DeleteRequest, DeleteResponse, protoMetadata as protoMetadata2, ReadRequest } from "./resource_base";
import { OperationStatus, protoMetadata as protoMetadata5, Status } from "./status";

export const protobufPackage = "io.restorecommerce.fulfillment_product";

export interface Preferences {
  /** ID, name or type */
  couriers: Attribute[];
  options: Attribute[];
}

export interface ProductQuery {
  sender?: ShippingAddress | undefined;
  receiver?: ShippingAddress | undefined;
  items: Item[];
  preferences?:
    | Preferences
    | undefined;
  /**
   * A forigner_key using the following pattern: `${collection}/${id}`
   * most likly an order_id or fulfillment_id.
   */
  reference_id?: string | undefined;
}

export interface ProductQueryList {
  items: ProductQuery[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface FulfillmentProduct {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  courier_id?: string | undefined;
  start_zones: string[];
  destination_zones: string[];
  tax_ids: string[];
  attributes: Attribute[];
  variants: Variant[];
  meta?: Meta | undefined;
}

export interface Variant {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  price?: Price | undefined;
  max_size?: BoundingBox3D | undefined;
  max_weight?: number | undefined;
}

export interface FulfillmentProductList {
  items: FulfillmentProduct[];
  total_count?: number | undefined;
  subject?: Subject;
}

export interface FulfillmentProductResponse {
  payload?: FulfillmentProduct;
  status?: Status;
}

export interface FulfillmentProductListResponse {
  items: FulfillmentProductResponse[];
  total_count: number;
  operation_status?: OperationStatus;
}

export interface PackingSolution {
  amount?: Amount | undefined;
  compactness?: number | undefined;
  homogeneity?: number | undefined;
  score?: number | undefined;
  parcels: Parcel[];
}

export interface PackingSolutionResponse {
  reference?: Reference | undefined;
  solutions: PackingSolution[];
  status?: Status | undefined;
}

export interface PackingSolutionListResponse {
  items: PackingSolutionResponse[];
  total_count?: number | undefined;
  operation_status?: OperationStatus;
}

export interface Deleted {
  id: string;
}

function createBasePreferences(): Preferences {
  return { couriers: [], options: [] };
}

export const Preferences = {
  encode(message: Preferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.couriers) {
      Attribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.options) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.couriers.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.options.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences {
    return {
      couriers: Array.isArray(object?.couriers) ? object.couriers.map((e: any) => Attribute.fromJSON(e)) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: Preferences): unknown {
    const obj: any = {};
    if (message.couriers) {
      obj.couriers = message.couriers.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.couriers = [];
    }
    if (message.options) {
      obj.options = message.options.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Preferences>): Preferences {
    return Preferences.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Preferences>): Preferences {
    const message = createBasePreferences();
    message.couriers = object.couriers?.map((e) => Attribute.fromPartial(e)) || [];
    message.options = object.options?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProductQuery(): ProductQuery {
  return { sender: undefined, receiver: undefined, items: [], preferences: undefined, reference_id: undefined };
}

export const ProductQuery = {
  encode(message: ProductQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== undefined) {
      ShippingAddress.encode(message.sender, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== undefined) {
      ShippingAddress.encode(message.receiver, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.preferences !== undefined) {
      Preferences.encode(message.preferences, writer.uint32(34).fork()).ldelim();
    }
    if (message.reference_id !== undefined) {
      writer.uint32(42).string(message.reference_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = ShippingAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = ShippingAddress.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.items.push(Item.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.preferences = Preferences.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.reference_id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductQuery {
    return {
      sender: isSet(object.sender) ? ShippingAddress.fromJSON(object.sender) : undefined,
      receiver: isSet(object.receiver) ? ShippingAddress.fromJSON(object.receiver) : undefined,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : [],
      preferences: isSet(object.preferences) ? Preferences.fromJSON(object.preferences) : undefined,
      reference_id: isSet(object.reference_id) ? String(object.reference_id) : undefined,
    };
  },

  toJSON(message: ProductQuery): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender ? ShippingAddress.toJSON(message.sender) : undefined);
    message.receiver !== undefined &&
      (obj.receiver = message.receiver ? ShippingAddress.toJSON(message.receiver) : undefined);
    if (message.items) {
      obj.items = message.items.map((e) => e ? Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? Preferences.toJSON(message.preferences) : undefined);
    message.reference_id !== undefined && (obj.reference_id = message.reference_id);
    return obj;
  },

  create(base?: DeepPartial<ProductQuery>): ProductQuery {
    return ProductQuery.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductQuery>): ProductQuery {
    const message = createBaseProductQuery();
    message.sender = (object.sender !== undefined && object.sender !== null)
      ? ShippingAddress.fromPartial(object.sender)
      : undefined;
    message.receiver = (object.receiver !== undefined && object.receiver !== null)
      ? ShippingAddress.fromPartial(object.receiver)
      : undefined;
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? Preferences.fromPartial(object.preferences)
      : undefined;
    message.reference_id = object.reference_id ?? undefined;
    return message;
  },
};

function createBaseProductQueryList(): ProductQueryList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const ProductQueryList = {
  encode(message: ProductQueryList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ProductQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductQueryList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductQueryList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(ProductQuery.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductQueryList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ProductQuery.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: ProductQueryList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ProductQuery.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ProductQueryList>): ProductQueryList {
    return ProductQueryList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ProductQueryList>): ProductQueryList {
    const message = createBaseProductQueryList();
    message.items = object.items?.map((e) => ProductQuery.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentProduct(): FulfillmentProduct {
  return {
    id: undefined,
    name: undefined,
    description: undefined,
    courier_id: undefined,
    start_zones: [],
    destination_zones: [],
    tax_ids: [],
    attributes: [],
    variants: [],
    meta: undefined,
  };
}

export const FulfillmentProduct = {
  encode(message: FulfillmentProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.courier_id !== undefined) {
      writer.uint32(34).string(message.courier_id);
    }
    for (const v of message.start_zones) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.destination_zones) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.tax_ids) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.variants) {
      Variant.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentProduct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.courier_id = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.start_zones.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.destination_zones.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.tax_ids.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.variants.push(Variant.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.meta = Meta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FulfillmentProduct {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      courier_id: isSet(object.courier_id) ? String(object.courier_id) : undefined,
      start_zones: Array.isArray(object?.start_zones) ? object.start_zones.map((e: any) => String(e)) : [],
      destination_zones: Array.isArray(object?.destination_zones)
        ? object.destination_zones.map((e: any) => String(e))
        : [],
      tax_ids: Array.isArray(object?.tax_ids) ? object.tax_ids.map((e: any) => String(e)) : [],
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      variants: Array.isArray(object?.variants) ? object.variants.map((e: any) => Variant.fromJSON(e)) : [],
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: FulfillmentProduct): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.courier_id !== undefined && (obj.courier_id = message.courier_id);
    if (message.start_zones) {
      obj.start_zones = message.start_zones.map((e) => e);
    } else {
      obj.start_zones = [];
    }
    if (message.destination_zones) {
      obj.destination_zones = message.destination_zones.map((e) => e);
    } else {
      obj.destination_zones = [];
    }
    if (message.tax_ids) {
      obj.tax_ids = message.tax_ids.map((e) => e);
    } else {
      obj.tax_ids = [];
    }
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    if (message.variants) {
      obj.variants = message.variants.map((e) => e ? Variant.toJSON(e) : undefined);
    } else {
      obj.variants = [];
    }
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentProduct>): FulfillmentProduct {
    return FulfillmentProduct.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentProduct>): FulfillmentProduct {
    const message = createBaseFulfillmentProduct();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.courier_id = object.courier_id ?? undefined;
    message.start_zones = object.start_zones?.map((e) => e) || [];
    message.destination_zones = object.destination_zones?.map((e) => e) || [];
    message.tax_ids = object.tax_ids?.map((e) => e) || [];
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.variants = object.variants?.map((e) => Variant.fromPartial(e)) || [];
    message.meta = (object.meta !== undefined && object.meta !== null) ? Meta.fromPartial(object.meta) : undefined;
    return message;
  },
};

function createBaseVariant(): Variant {
  return {
    id: undefined,
    name: undefined,
    description: undefined,
    price: undefined,
    max_size: undefined,
    max_weight: undefined,
  };
}

export const Variant = {
  encode(message: Variant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    if (message.max_size !== undefined) {
      BoundingBox3D.encode(message.max_size, writer.uint32(50).fork()).ldelim();
    }
    if (message.max_weight !== undefined) {
      writer.uint32(57).double(message.max_weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Variant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.price = Price.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.max_size = BoundingBox3D.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.max_weight = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Variant {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      price: isSet(object.price) ? Price.fromJSON(object.price) : undefined,
      max_size: isSet(object.max_size) ? BoundingBox3D.fromJSON(object.max_size) : undefined,
      max_weight: isSet(object.max_weight) ? Number(object.max_weight) : undefined,
    };
  },

  toJSON(message: Variant): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.price !== undefined && (obj.price = message.price ? Price.toJSON(message.price) : undefined);
    message.max_size !== undefined &&
      (obj.max_size = message.max_size ? BoundingBox3D.toJSON(message.max_size) : undefined);
    message.max_weight !== undefined && (obj.max_weight = message.max_weight);
    return obj;
  },

  create(base?: DeepPartial<Variant>): Variant {
    return Variant.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Variant>): Variant {
    const message = createBaseVariant();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.description = object.description ?? undefined;
    message.price = (object.price !== undefined && object.price !== null) ? Price.fromPartial(object.price) : undefined;
    message.max_size = (object.max_size !== undefined && object.max_size !== null)
      ? BoundingBox3D.fromPartial(object.max_size)
      : undefined;
    message.max_weight = object.max_weight ?? undefined;
    return message;
  },
};

function createBaseFulfillmentProductList(): FulfillmentProductList {
  return { items: [], total_count: undefined, subject: undefined };
}

export const FulfillmentProductList = {
  encode(message: FulfillmentProductList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentProduct.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentProductList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProductList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(FulfillmentProduct.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FulfillmentProductList {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentProduct.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: FulfillmentProductList): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentProduct.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentProductList>): FulfillmentProductList {
    return FulfillmentProductList.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentProductList>): FulfillmentProductList {
    const message = createBaseFulfillmentProductList();
    message.items = object.items?.map((e) => FulfillmentProduct.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentProductResponse(): FulfillmentProductResponse {
  return { payload: undefined, status: undefined };
}

export const FulfillmentProductResponse = {
  encode(message: FulfillmentProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      FulfillmentProduct.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = FulfillmentProduct.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FulfillmentProductResponse {
    return {
      payload: isSet(object.payload) ? FulfillmentProduct.fromJSON(object.payload) : undefined,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: FulfillmentProductResponse): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? FulfillmentProduct.toJSON(message.payload) : undefined);
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentProductResponse>): FulfillmentProductResponse {
    return FulfillmentProductResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentProductResponse>): FulfillmentProductResponse {
    const message = createBaseFulfillmentProductResponse();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? FulfillmentProduct.fromPartial(object.payload)
      : undefined;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseFulfillmentProductListResponse(): FulfillmentProductListResponse {
  return { items: [], total_count: 0, operation_status: undefined };
}

export const FulfillmentProductListResponse = {
  encode(message: FulfillmentProductListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      FulfillmentProductResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== 0) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FulfillmentProductListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFulfillmentProductListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(FulfillmentProductResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FulfillmentProductListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => FulfillmentProductResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : 0,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: FulfillmentProductListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? FulfillmentProductResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<FulfillmentProductListResponse>): FulfillmentProductListResponse {
    return FulfillmentProductListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FulfillmentProductListResponse>): FulfillmentProductListResponse {
    const message = createBaseFulfillmentProductListResponse();
    message.items = object.items?.map((e) => FulfillmentProductResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? 0;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBasePackingSolution(): PackingSolution {
  return { amount: undefined, compactness: undefined, homogeneity: undefined, score: undefined, parcels: [] };
}

export const PackingSolution = {
  encode(message: PackingSolution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.compactness !== undefined) {
      writer.uint32(17).double(message.compactness);
    }
    if (message.homogeneity !== undefined) {
      writer.uint32(25).double(message.homogeneity);
    }
    if (message.score !== undefined) {
      writer.uint32(33).double(message.score);
    }
    for (const v of message.parcels) {
      Parcel.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackingSolution {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackingSolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = Amount.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.compactness = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.homogeneity = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.score = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.parcels.push(Parcel.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PackingSolution {
    return {
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      compactness: isSet(object.compactness) ? Number(object.compactness) : undefined,
      homogeneity: isSet(object.homogeneity) ? Number(object.homogeneity) : undefined,
      score: isSet(object.score) ? Number(object.score) : undefined,
      parcels: Array.isArray(object?.parcels) ? object.parcels.map((e: any) => Parcel.fromJSON(e)) : [],
    };
  },

  toJSON(message: PackingSolution): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Amount.toJSON(message.amount) : undefined);
    message.compactness !== undefined && (obj.compactness = message.compactness);
    message.homogeneity !== undefined && (obj.homogeneity = message.homogeneity);
    message.score !== undefined && (obj.score = message.score);
    if (message.parcels) {
      obj.parcels = message.parcels.map((e) => e ? Parcel.toJSON(e) : undefined);
    } else {
      obj.parcels = [];
    }
    return obj;
  },

  create(base?: DeepPartial<PackingSolution>): PackingSolution {
    return PackingSolution.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PackingSolution>): PackingSolution {
    const message = createBasePackingSolution();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.compactness = object.compactness ?? undefined;
    message.homogeneity = object.homogeneity ?? undefined;
    message.score = object.score ?? undefined;
    message.parcels = object.parcels?.map((e) => Parcel.fromPartial(e)) || [];
    return message;
  },
};

function createBasePackingSolutionResponse(): PackingSolutionResponse {
  return { reference: undefined, solutions: [], status: undefined };
}

export const PackingSolutionResponse = {
  encode(message: PackingSolutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reference !== undefined) {
      Reference.encode(message.reference, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.solutions) {
      PackingSolution.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackingSolutionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackingSolutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reference = Reference.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.solutions.push(PackingSolution.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PackingSolutionResponse {
    return {
      reference: isSet(object.reference) ? Reference.fromJSON(object.reference) : undefined,
      solutions: Array.isArray(object?.solutions) ? object.solutions.map((e: any) => PackingSolution.fromJSON(e)) : [],
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: PackingSolutionResponse): unknown {
    const obj: any = {};
    message.reference !== undefined &&
      (obj.reference = message.reference ? Reference.toJSON(message.reference) : undefined);
    if (message.solutions) {
      obj.solutions = message.solutions.map((e) => e ? PackingSolution.toJSON(e) : undefined);
    } else {
      obj.solutions = [];
    }
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PackingSolutionResponse>): PackingSolutionResponse {
    return PackingSolutionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PackingSolutionResponse>): PackingSolutionResponse {
    const message = createBasePackingSolutionResponse();
    message.reference = (object.reference !== undefined && object.reference !== null)
      ? Reference.fromPartial(object.reference)
      : undefined;
    message.solutions = object.solutions?.map((e) => PackingSolution.fromPartial(e)) || [];
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBasePackingSolutionListResponse(): PackingSolutionListResponse {
  return { items: [], total_count: undefined, operation_status: undefined };
}

export const PackingSolutionListResponse = {
  encode(message: PackingSolutionListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      PackingSolutionResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total_count !== undefined) {
      writer.uint32(16).uint32(message.total_count);
    }
    if (message.operation_status !== undefined) {
      OperationStatus.encode(message.operation_status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackingSolutionListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackingSolutionListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(PackingSolutionResponse.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total_count = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operation_status = OperationStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PackingSolutionListResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => PackingSolutionResponse.fromJSON(e)) : [],
      total_count: isSet(object.total_count) ? Number(object.total_count) : undefined,
      operation_status: isSet(object.operation_status) ? OperationStatus.fromJSON(object.operation_status) : undefined,
    };
  },

  toJSON(message: PackingSolutionListResponse): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? PackingSolutionResponse.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    message.total_count !== undefined && (obj.total_count = Math.round(message.total_count));
    message.operation_status !== undefined &&
      (obj.operation_status = message.operation_status ? OperationStatus.toJSON(message.operation_status) : undefined);
    return obj;
  },

  create(base?: DeepPartial<PackingSolutionListResponse>): PackingSolutionListResponse {
    return PackingSolutionListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PackingSolutionListResponse>): PackingSolutionListResponse {
    const message = createBasePackingSolutionListResponse();
    message.items = object.items?.map((e) => PackingSolutionResponse.fromPartial(e)) || [];
    message.total_count = object.total_count ?? undefined;
    message.operation_status = (object.operation_status !== undefined && object.operation_status !== null)
      ? OperationStatus.fromPartial(object.operation_status)
      : undefined;
    return message;
  },
};

function createBaseDeleted(): Deleted {
  return { id: "" };
}

export const Deleted = {
  encode(message: Deleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deleted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Deleted {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: Deleted): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<Deleted>): Deleted {
    return Deleted.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Deleted>): Deleted {
    const message = createBaseDeleted();
    message.id = object.id ?? "";
    return message;
  },
};

export type FulfillmentProductServiceDefinition = typeof FulfillmentProductServiceDefinition;
export const FulfillmentProductServiceDefinition = {
  name: "FulfillmentProductService",
  fullName: "io.restorecommerce.fulfillment_product.FulfillmentProductService",
  methods: {
    read: {
      name: "Read",
      requestType: ReadRequest,
      requestStream: false,
      responseType: FulfillmentProductListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    find: {
      name: "Find",
      requestType: ProductQueryList,
      requestStream: false,
      responseType: PackingSolutionListResponse,
      responseStream: false,
      options: { _unknownFields: { 248008: [Buffer.from([1])] } },
    },
    create: {
      name: "Create",
      requestType: FulfillmentProductList,
      requestStream: false,
      responseType: FulfillmentProductListResponse,
      responseStream: false,
      options: {},
    },
    update: {
      name: "Update",
      requestType: FulfillmentProductList,
      requestStream: false,
      responseType: FulfillmentProductListResponse,
      responseStream: false,
      options: {},
    },
    upsert: {
      name: "Upsert",
      requestType: FulfillmentProductList,
      requestStream: false,
      responseType: FulfillmentProductListResponse,
      responseStream: false,
      options: {},
    },
    delete: {
      name: "Delete",
      requestType: DeleteRequest,
      requestStream: false,
      responseType: DeleteResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface FulfillmentProductServiceImplementation<CallContextExt = {}> {
  read(
    request: ReadRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductListResponse>>;
  find(
    request: ProductQueryList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PackingSolutionListResponse>>;
  create(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductListResponse>>;
  update(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductListResponse>>;
  upsert(
    request: FulfillmentProductList,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<FulfillmentProductListResponse>>;
  delete(request: DeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteResponse>>;
}

export interface FulfillmentProductServiceClient<CallOptionsExt = {}> {
  read(
    request: DeepPartial<ReadRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductListResponse>;
  find(
    request: DeepPartial<ProductQueryList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PackingSolutionListResponse>;
  create(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductListResponse>;
  update(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductListResponse>;
  upsert(
    request: DeepPartial<FulfillmentProductList>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FulfillmentProductListResponse>;
  delete(request: DeepPartial<DeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteResponse>;
}

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto1;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "io/restorecommerce/fulfillment_product.proto",
    "package": "io.restorecommerce.fulfillment_product",
    "dependency": [
      "io/restorecommerce/reference.proto",
      "io/restorecommerce/resource_base.proto",
      "io/restorecommerce/meta.proto",
      "io/restorecommerce/auth.proto",
      "io/restorecommerce/status.proto",
      "io/restorecommerce/attribute.proto",
      "io/restorecommerce/address.proto",
      "io/restorecommerce/amount.proto",
      "io/restorecommerce/price.proto",
      "io/restorecommerce/geometry.proto",
      "io/restorecommerce/fulfillment_courier.proto",
      "io/restorecommerce/fulfillment.proto",
      "io/restorecommerce/options.proto",
    ],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Preferences",
      "field": [{
        "name": "couriers",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "couriers",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ProductQuery",
      "field": [{
        "name": "sender",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "sender",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "receiver",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.address.ShippingAddress",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "receiver",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "items",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Item",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "preferences",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.Preferences",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "preferences",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "reference_id",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "referenceId",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_sender", "options": undefined }, { "name": "_receiver", "options": undefined }, {
        "name": "_preferences",
        "options": undefined,
      }, { "name": "_reference_id", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ProductQueryList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.ProductQuery",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FulfillmentProduct",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "name",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "courier_id",
        "number": 4,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "courierId",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": false,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": true,
      }, {
        "name": "start_zones",
        "number": 6,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "startZones",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "destination_zones",
        "number": 8,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "destinationZones",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "tax_ids",
        "number": 9,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "taxIds",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "attributes",
        "number": 10,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.attribute.Attribute",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "attributes",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "variants",
        "number": 11,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.Variant",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "variants",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "meta",
        "number": 12,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.meta.Meta",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "meta",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_courier_id", "options": undefined },
        { "name": "_meta", "options": undefined },
      ],
      "options": {
        "messageSetWireFormat": false,
        "noStandardDescriptorAccessor": false,
        "deprecated": false,
        "mapEntry": false,
        "uninterpretedOption": [],
      },
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Variant",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "name",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "description",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "description",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "price",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.price.Price",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "price",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "max_size",
        "number": 6,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.geometry.BoundingBox3D",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 4,
        "jsonName": "maxSize",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "max_weight",
        "number": 7,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 5,
        "jsonName": "maxWeight",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [
        { "name": "_id", "options": undefined },
        { "name": "_name", "options": undefined },
        { "name": "_description", "options": undefined },
        { "name": "_price", "options": undefined },
        { "name": "_max_size", "options": undefined },
        { "name": "_max_weight", "options": undefined },
      ],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FulfillmentProductList",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.FulfillmentProduct",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "subject",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.auth.Subject",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "subject",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FulfillmentProductResponse",
      "field": [{
        "name": "payload",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.FulfillmentProduct",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "payload",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FulfillmentProductListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.FulfillmentProductResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "operation_status",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PackingSolution",
      "field": [{
        "name": "amount",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.amount.Amount",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "compactness",
        "number": 2,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "compactness",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "homogeneity",
        "number": 3,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 2,
        "jsonName": "homogeneity",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "score",
        "number": 4,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 3,
        "jsonName": "score",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "parcels",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment.Parcel",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "parcels",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_amount", "options": undefined }, { "name": "_compactness", "options": undefined }, {
        "name": "_homogeneity",
        "options": undefined,
      }, { "name": "_score", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PackingSolutionResponse",
      "field": [{
        "name": "reference",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.reference.Reference",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "reference",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "solutions",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.PackingSolution",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "solutions",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "status",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.Status",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 1,
        "jsonName": "status",
        "options": undefined,
        "proto3Optional": true,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_reference", "options": undefined }, { "name": "_status", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PackingSolutionListResponse",
      "field": [{
        "name": "items",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".io.restorecommerce.fulfillment_product.PackingSolutionResponse",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "items",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "total_count",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "totalCount",
        "options": undefined,
        "proto3Optional": true,
      }, {
        "name": "operation_status",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".io.restorecommerce.status.OperationStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "operationStatus",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [{ "name": "_total_count", "options": undefined }],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "Deleted",
      "field": [{
        "name": "id",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "id",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [{
      "name": "FulfillmentProductService",
      "method": [{
        "name": "Read",
        "inputType": ".io.restorecommerce.resourcebase.ReadRequest",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Find",
        "inputType": ".io.restorecommerce.fulfillment_product.ProductQueryList",
        "outputType": ".io.restorecommerce.fulfillment_product.PackingSolutionListResponse",
        "options": { "deprecated": false, "idempotencyLevel": 0, "uninterpretedOption": [] },
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Create",
        "inputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Update",
        "inputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Upsert",
        "inputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductList",
        "outputType": ".io.restorecommerce.fulfillment_product.FulfillmentProductListResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }, {
        "name": "Delete",
        "inputType": ".io.restorecommerce.resourcebase.DeleteRequest",
        "outputType": ".io.restorecommerce.resourcebase.DeleteResponse",
        "options": undefined,
        "clientStreaming": false,
        "serverStreaming": false,
      }],
      "options": undefined,
    }],
    "extension": [],
    "options": undefined,
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0, 2, 0],
        "span": [36, 2, 63],
        "leadingComments": "",
        "trailingComments": "ID, name or type\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 4],
        "span": [49, 2, 35],
        "leadingComments":
          "\n A forigner_key using the following pattern: `${collection}/${id}`\n most likly an order_id or fulfillment_id.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".io.restorecommerce.fulfillment_product.Preferences": Preferences,
    ".io.restorecommerce.fulfillment_product.ProductQuery": ProductQuery,
    ".io.restorecommerce.fulfillment_product.ProductQueryList": ProductQueryList,
    ".io.restorecommerce.fulfillment_product.FulfillmentProduct": FulfillmentProduct,
    ".io.restorecommerce.fulfillment_product.Variant": Variant,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductList": FulfillmentProductList,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductResponse": FulfillmentProductResponse,
    ".io.restorecommerce.fulfillment_product.FulfillmentProductListResponse": FulfillmentProductListResponse,
    ".io.restorecommerce.fulfillment_product.PackingSolution": PackingSolution,
    ".io.restorecommerce.fulfillment_product.PackingSolutionResponse": PackingSolutionResponse,
    ".io.restorecommerce.fulfillment_product.PackingSolutionListResponse": PackingSolutionListResponse,
    ".io.restorecommerce.fulfillment_product.Deleted": Deleted,
  },
  dependencies: [
    protoMetadata1,
    protoMetadata2,
    protoMetadata3,
    protoMetadata4,
    protoMetadata5,
    protoMetadata6,
    protoMetadata7,
    protoMetadata8,
    protoMetadata9,
    protoMetadata10,
    protoMetadata11,
    protoMetadata12,
    protoMetadata13,
  ],
  options: {
    messages: {
      "FulfillmentProduct": {
        options: {
          "kafka_subscriber": KafkaSubscription.decode(
            Buffer.from(
              "ChRmdWxmaWxsbWVudF9wcm9kdWN0cxIvaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50X3Byb2R1Y3QucmVzb3VyY2UaGWZ1bGZpbGxtZW50UHJvZHVjdENyZWF0ZWQiGWZ1bGZpbGxtZW50UHJvZHVjdFVwZGF0ZWQqGWZ1bGZpbGxtZW50UHJvZHVjdERlbGV0ZWQ=",
              "base64",
            ),
          ),
        },
        fields: {
          "courier_id": {
            "resolver": Resolver.decode(
              Buffer.from(
                "CjouaW8ucmVzdG9yZWNvbW1lcmNlLmZ1bGZpbGxtZW50X2NvdXJpZXIuRnVsZmlsbG1lbnRDb3VyaWVyEgtmdWxmaWxsbWVudBoTZnVsZmlsbG1lbnRfY291cmllciIEUmVhZCoHY291cmllcg==",
                "base64",
              ),
            ),
          },
        },
      },
    },
    services: {
      "FulfillmentProductService": {
        options: undefined,
        methods: { "Read": { "is_query": true }, "Find": { "is_query": true } },
      },
    },
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
