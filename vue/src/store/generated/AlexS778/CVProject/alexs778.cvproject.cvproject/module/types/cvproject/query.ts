/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { CV } from "../cvproject/cv";
import { Params } from "../cvproject/params";
import { SystemInfo } from "../cvproject/system_info";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "alexs778.cvproject.cvproject";

export interface QueryCvByCosmosAddressRequest {
  cosmos_address: string;
}

export interface QueryCvByCosmosAddressResponse {
  cV: CV | undefined;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetSystemInfoRequest {}

export interface QueryGetSystemInfoResponse {
  SystemInfo: SystemInfo | undefined;
}

export interface QueryGetCVRequest {
  index: number;
}

export interface QueryGetCVResponse {
  cV: CV | undefined;
}

export interface QueryAllCVRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCVResponse {
  cV: CV[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCvByCosmosAddressRequest {
  cosmosAddress: string;
}

export interface QueryGetCvByCosmosAddressResponse {
  cV: string;
}

const baseQueryCvByCosmosAddressRequest: object = { cosmos_address: "" };

export const QueryCvByCosmosAddressRequest = {
  encode(
    message: QueryCvByCosmosAddressRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cosmos_address !== "") {
      writer.uint32(10).string(message.cosmos_address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCvByCosmosAddressRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCvByCosmosAddressRequest,
    } as QueryCvByCosmosAddressRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmos_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCvByCosmosAddressRequest {
    const message = {
      ...baseQueryCvByCosmosAddressRequest,
    } as QueryCvByCosmosAddressRequest;
    if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
      message.cosmos_address = String(object.cosmos_address);
    } else {
      message.cosmos_address = "";
    }
    return message;
  },

  toJSON(message: QueryCvByCosmosAddressRequest): unknown {
    const obj: any = {};
    message.cosmos_address !== undefined &&
      (obj.cosmos_address = message.cosmos_address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCvByCosmosAddressRequest>
  ): QueryCvByCosmosAddressRequest {
    const message = {
      ...baseQueryCvByCosmosAddressRequest,
    } as QueryCvByCosmosAddressRequest;
    if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
      message.cosmos_address = object.cosmos_address;
    } else {
      message.cosmos_address = "";
    }
    return message;
  },
};

const baseQueryCvByCosmosAddressResponse: object = {};

export const QueryCvByCosmosAddressResponse = {
  encode(
    message: QueryCvByCosmosAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cV !== undefined) {
      CV.encode(message.cV, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCvByCosmosAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCvByCosmosAddressResponse,
    } as QueryCvByCosmosAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cV = CV.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCvByCosmosAddressResponse {
    const message = {
      ...baseQueryCvByCosmosAddressResponse,
    } as QueryCvByCosmosAddressResponse;
    if (object.cV !== undefined && object.cV !== null) {
      message.cV = CV.fromJSON(object.cV);
    } else {
      message.cV = undefined;
    }
    return message;
  },

  toJSON(message: QueryCvByCosmosAddressResponse): unknown {
    const obj: any = {};
    message.cV !== undefined &&
      (obj.cV = message.cV ? CV.toJSON(message.cV) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCvByCosmosAddressResponse>
  ): QueryCvByCosmosAddressResponse {
    const message = {
      ...baseQueryCvByCosmosAddressResponse,
    } as QueryCvByCosmosAddressResponse;
    if (object.cV !== undefined && object.cV !== null) {
      message.cV = CV.fromPartial(object.cV);
    } else {
      message.cV = undefined;
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetSystemInfoRequest: object = {};

export const QueryGetSystemInfoRequest = {
  encode(
    _: QueryGetSystemInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSystemInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSystemInfoRequest,
    } as QueryGetSystemInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetSystemInfoRequest {
    const message = {
      ...baseQueryGetSystemInfoRequest,
    } as QueryGetSystemInfoRequest;
    return message;
  },

  toJSON(_: QueryGetSystemInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetSystemInfoRequest>
  ): QueryGetSystemInfoRequest {
    const message = {
      ...baseQueryGetSystemInfoRequest,
    } as QueryGetSystemInfoRequest;
    return message;
  },
};

const baseQueryGetSystemInfoResponse: object = {};

export const QueryGetSystemInfoResponse = {
  encode(
    message: QueryGetSystemInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.SystemInfo !== undefined) {
      SystemInfo.encode(message.SystemInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSystemInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSystemInfoResponse,
    } as QueryGetSystemInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SystemInfo = SystemInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSystemInfoResponse {
    const message = {
      ...baseQueryGetSystemInfoResponse,
    } as QueryGetSystemInfoResponse;
    if (object.SystemInfo !== undefined && object.SystemInfo !== null) {
      message.SystemInfo = SystemInfo.fromJSON(object.SystemInfo);
    } else {
      message.SystemInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSystemInfoResponse): unknown {
    const obj: any = {};
    message.SystemInfo !== undefined &&
      (obj.SystemInfo = message.SystemInfo
        ? SystemInfo.toJSON(message.SystemInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSystemInfoResponse>
  ): QueryGetSystemInfoResponse {
    const message = {
      ...baseQueryGetSystemInfoResponse,
    } as QueryGetSystemInfoResponse;
    if (object.SystemInfo !== undefined && object.SystemInfo !== null) {
      message.SystemInfo = SystemInfo.fromPartial(object.SystemInfo);
    } else {
      message.SystemInfo = undefined;
    }
    return message;
  },
};

const baseQueryGetCVRequest: object = { index: 0 };

export const QueryGetCVRequest = {
  encode(message: QueryGetCVRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCVRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCVRequest } as QueryGetCVRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCVRequest {
    const message = { ...baseQueryGetCVRequest } as QueryGetCVRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCVRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCVRequest>): QueryGetCVRequest {
    const message = { ...baseQueryGetCVRequest } as QueryGetCVRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }
    return message;
  },
};

const baseQueryGetCVResponse: object = {};

export const QueryGetCVResponse = {
  encode(
    message: QueryGetCVResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cV !== undefined) {
      CV.encode(message.cV, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCVResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCVResponse } as QueryGetCVResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cV = CV.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCVResponse {
    const message = { ...baseQueryGetCVResponse } as QueryGetCVResponse;
    if (object.cV !== undefined && object.cV !== null) {
      message.cV = CV.fromJSON(object.cV);
    } else {
      message.cV = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCVResponse): unknown {
    const obj: any = {};
    message.cV !== undefined &&
      (obj.cV = message.cV ? CV.toJSON(message.cV) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetCVResponse>): QueryGetCVResponse {
    const message = { ...baseQueryGetCVResponse } as QueryGetCVResponse;
    if (object.cV !== undefined && object.cV !== null) {
      message.cV = CV.fromPartial(object.cV);
    } else {
      message.cV = undefined;
    }
    return message;
  },
};

const baseQueryAllCVRequest: object = {};

export const QueryAllCVRequest = {
  encode(message: QueryAllCVRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCVRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCVRequest } as QueryAllCVRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCVRequest {
    const message = { ...baseQueryAllCVRequest } as QueryAllCVRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCVRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllCVRequest>): QueryAllCVRequest {
    const message = { ...baseQueryAllCVRequest } as QueryAllCVRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCVResponse: object = {};

export const QueryAllCVResponse = {
  encode(
    message: QueryAllCVResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.cV) {
      CV.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCVResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCVResponse } as QueryAllCVResponse;
    message.cV = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cV.push(CV.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCVResponse {
    const message = { ...baseQueryAllCVResponse } as QueryAllCVResponse;
    message.cV = [];
    if (object.cV !== undefined && object.cV !== null) {
      for (const e of object.cV) {
        message.cV.push(CV.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCVResponse): unknown {
    const obj: any = {};
    if (message.cV) {
      obj.cV = message.cV.map((e) => (e ? CV.toJSON(e) : undefined));
    } else {
      obj.cV = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllCVResponse>): QueryAllCVResponse {
    const message = { ...baseQueryAllCVResponse } as QueryAllCVResponse;
    message.cV = [];
    if (object.cV !== undefined && object.cV !== null) {
      for (const e of object.cV) {
        message.cV.push(CV.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCvByCosmosAddressRequest: object = { cosmosAddress: "" };

export const QueryGetCvByCosmosAddressRequest = {
  encode(
    message: QueryGetCvByCosmosAddressRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cosmosAddress !== "") {
      writer.uint32(10).string(message.cosmosAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCvByCosmosAddressRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCvByCosmosAddressRequest,
    } as QueryGetCvByCosmosAddressRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmosAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCvByCosmosAddressRequest {
    const message = {
      ...baseQueryGetCvByCosmosAddressRequest,
    } as QueryGetCvByCosmosAddressRequest;
    if (object.cosmosAddress !== undefined && object.cosmosAddress !== null) {
      message.cosmosAddress = String(object.cosmosAddress);
    } else {
      message.cosmosAddress = "";
    }
    return message;
  },

  toJSON(message: QueryGetCvByCosmosAddressRequest): unknown {
    const obj: any = {};
    message.cosmosAddress !== undefined &&
      (obj.cosmosAddress = message.cosmosAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCvByCosmosAddressRequest>
  ): QueryGetCvByCosmosAddressRequest {
    const message = {
      ...baseQueryGetCvByCosmosAddressRequest,
    } as QueryGetCvByCosmosAddressRequest;
    if (object.cosmosAddress !== undefined && object.cosmosAddress !== null) {
      message.cosmosAddress = object.cosmosAddress;
    } else {
      message.cosmosAddress = "";
    }
    return message;
  },
};

const baseQueryGetCvByCosmosAddressResponse: object = { cV: "" };

export const QueryGetCvByCosmosAddressResponse = {
  encode(
    message: QueryGetCvByCosmosAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cV !== "") {
      writer.uint32(10).string(message.cV);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCvByCosmosAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCvByCosmosAddressResponse,
    } as QueryGetCvByCosmosAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cV = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCvByCosmosAddressResponse {
    const message = {
      ...baseQueryGetCvByCosmosAddressResponse,
    } as QueryGetCvByCosmosAddressResponse;
    if (object.cV !== undefined && object.cV !== null) {
      message.cV = String(object.cV);
    } else {
      message.cV = "";
    }
    return message;
  },

  toJSON(message: QueryGetCvByCosmosAddressResponse): unknown {
    const obj: any = {};
    message.cV !== undefined && (obj.cV = message.cV);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCvByCosmosAddressResponse>
  ): QueryGetCvByCosmosAddressResponse {
    const message = {
      ...baseQueryGetCvByCosmosAddressResponse,
    } as QueryGetCvByCosmosAddressResponse;
    if (object.cV !== undefined && object.cV !== null) {
      message.cV = object.cV;
    } else {
      message.cV = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a SystemInfo by index. */
  SystemInfo(
    request: QueryGetSystemInfoRequest
  ): Promise<QueryGetSystemInfoResponse>;
  /** Queries a CV by index. */
  CV(request: QueryGetCVRequest): Promise<QueryGetCVResponse>;
  /** Queries a list of CV items. */
  CVAll(request: QueryAllCVRequest): Promise<QueryAllCVResponse>;
  CvByCosmosAddress(
    request: QueryCvByCosmosAddressRequest
  ): Promise<QueryCvByCosmosAddressResponse>;
  /** Queries a list of GetCvByCosmosAddress items. */
  GetCvByCosmosAddress(
    request: QueryGetCvByCosmosAddressRequest
  ): Promise<QueryGetCvByCosmosAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  SystemInfo(
    request: QueryGetSystemInfoRequest
  ): Promise<QueryGetSystemInfoResponse> {
    const data = QueryGetSystemInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Query",
      "SystemInfo",
      data
    );
    return promise.then((data) =>
      QueryGetSystemInfoResponse.decode(new Reader(data))
    );
  }

  CV(request: QueryGetCVRequest): Promise<QueryGetCVResponse> {
    const data = QueryGetCVRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Query",
      "CV",
      data
    );
    return promise.then((data) => QueryGetCVResponse.decode(new Reader(data)));
  }

  CVAll(request: QueryAllCVRequest): Promise<QueryAllCVResponse> {
    const data = QueryAllCVRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Query",
      "CVAll",
      data
    );
    return promise.then((data) => QueryAllCVResponse.decode(new Reader(data)));
  }

  CvByCosmosAddress(
    request: QueryCvByCosmosAddressRequest
  ): Promise<QueryCvByCosmosAddressResponse> {
    const data = QueryCvByCosmosAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Query",
      "CvByCosmosAddress",
      data
    );
    return promise.then((data) =>
      QueryCvByCosmosAddressResponse.decode(new Reader(data))
    );
  }

  GetCvByCosmosAddress(
    request: QueryGetCvByCosmosAddressRequest
  ): Promise<QueryGetCvByCosmosAddressResponse> {
    const data = QueryGetCvByCosmosAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Query",
      "GetCvByCosmosAddress",
      data
    );
    return promise.then((data) =>
      QueryGetCvByCosmosAddressResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
