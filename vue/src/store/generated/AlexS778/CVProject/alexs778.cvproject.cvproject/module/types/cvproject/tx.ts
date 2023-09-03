/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { CV } from "../cvproject/cv";

export const protobufPackage = "alexs778.cvproject.cvproject";

export interface MsgCreateCV {
  creator: string;
  name: string;
  education: string;
  summary: string;
  skills: string;
  experience: string;
  companies: string[];
}

export interface MsgCreateCVResponse {
  cvIndex: number;
}

export interface MsgUpdateCV {
  creator: string;
  name: string;
  education: string;
  summary: string;
  skills: string;
  experience: string;
  companies: string[];
}

export interface MsgUpdateCVResponse {
  cvIndex: number;
}

export interface MsgGetCVByCosmosAdress {
  creator: string;
  cosmosAddress: string;
}

export interface MsgGetCVByCosmosAdressResponse {
  cvResponse: CV | undefined;
}

export interface MsgConfirmCV {
  creator: string;
  name: string;
}

export interface MsgConfirmCVResponse {}

const baseMsgCreateCV: object = {
  creator: "",
  name: "",
  education: "",
  summary: "",
  skills: "",
  experience: "",
  companies: "",
};

export const MsgCreateCV = {
  encode(message: MsgCreateCV, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.education !== "") {
      writer.uint32(26).string(message.education);
    }
    if (message.summary !== "") {
      writer.uint32(34).string(message.summary);
    }
    if (message.skills !== "") {
      writer.uint32(42).string(message.skills);
    }
    if (message.experience !== "") {
      writer.uint32(50).string(message.experience);
    }
    for (const v of message.companies) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCV {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCV } as MsgCreateCV;
    message.companies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.education = reader.string();
          break;
        case 4:
          message.summary = reader.string();
          break;
        case 5:
          message.skills = reader.string();
          break;
        case 6:
          message.experience = reader.string();
          break;
        case 7:
          message.companies.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCV {
    const message = { ...baseMsgCreateCV } as MsgCreateCV;
    message.companies = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.education !== undefined && object.education !== null) {
      message.education = String(object.education);
    } else {
      message.education = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = String(object.summary);
    } else {
      message.summary = "";
    }
    if (object.skills !== undefined && object.skills !== null) {
      message.skills = String(object.skills);
    } else {
      message.skills = "";
    }
    if (object.experience !== undefined && object.experience !== null) {
      message.experience = String(object.experience);
    } else {
      message.experience = "";
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateCV): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.education !== undefined && (obj.education = message.education);
    message.summary !== undefined && (obj.summary = message.summary);
    message.skills !== undefined && (obj.skills = message.skills);
    message.experience !== undefined && (obj.experience = message.experience);
    if (message.companies) {
      obj.companies = message.companies.map((e) => e);
    } else {
      obj.companies = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCV>): MsgCreateCV {
    const message = { ...baseMsgCreateCV } as MsgCreateCV;
    message.companies = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.education !== undefined && object.education !== null) {
      message.education = object.education;
    } else {
      message.education = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    } else {
      message.summary = "";
    }
    if (object.skills !== undefined && object.skills !== null) {
      message.skills = object.skills;
    } else {
      message.skills = "";
    }
    if (object.experience !== undefined && object.experience !== null) {
      message.experience = object.experience;
    } else {
      message.experience = "";
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(e);
      }
    }
    return message;
  },
};

const baseMsgCreateCVResponse: object = { cvIndex: 0 };

export const MsgCreateCVResponse = {
  encode(
    message: MsgCreateCVResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cvIndex !== 0) {
      writer.uint32(8).uint64(message.cvIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCVResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCVResponse } as MsgCreateCVResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cvIndex = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCVResponse {
    const message = { ...baseMsgCreateCVResponse } as MsgCreateCVResponse;
    if (object.cvIndex !== undefined && object.cvIndex !== null) {
      message.cvIndex = Number(object.cvIndex);
    } else {
      message.cvIndex = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCVResponse): unknown {
    const obj: any = {};
    message.cvIndex !== undefined && (obj.cvIndex = message.cvIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCVResponse>): MsgCreateCVResponse {
    const message = { ...baseMsgCreateCVResponse } as MsgCreateCVResponse;
    if (object.cvIndex !== undefined && object.cvIndex !== null) {
      message.cvIndex = object.cvIndex;
    } else {
      message.cvIndex = 0;
    }
    return message;
  },
};

const baseMsgUpdateCV: object = {
  creator: "",
  name: "",
  education: "",
  summary: "",
  skills: "",
  experience: "",
  companies: "",
};

export const MsgUpdateCV = {
  encode(message: MsgUpdateCV, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.education !== "") {
      writer.uint32(26).string(message.education);
    }
    if (message.summary !== "") {
      writer.uint32(34).string(message.summary);
    }
    if (message.skills !== "") {
      writer.uint32(42).string(message.skills);
    }
    if (message.experience !== "") {
      writer.uint32(50).string(message.experience);
    }
    for (const v of message.companies) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCV {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCV } as MsgUpdateCV;
    message.companies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.education = reader.string();
          break;
        case 4:
          message.summary = reader.string();
          break;
        case 5:
          message.skills = reader.string();
          break;
        case 6:
          message.experience = reader.string();
          break;
        case 7:
          message.companies.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCV {
    const message = { ...baseMsgUpdateCV } as MsgUpdateCV;
    message.companies = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.education !== undefined && object.education !== null) {
      message.education = String(object.education);
    } else {
      message.education = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = String(object.summary);
    } else {
      message.summary = "";
    }
    if (object.skills !== undefined && object.skills !== null) {
      message.skills = String(object.skills);
    } else {
      message.skills = "";
    }
    if (object.experience !== undefined && object.experience !== null) {
      message.experience = String(object.experience);
    } else {
      message.experience = "";
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateCV): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.education !== undefined && (obj.education = message.education);
    message.summary !== undefined && (obj.summary = message.summary);
    message.skills !== undefined && (obj.skills = message.skills);
    message.experience !== undefined && (obj.experience = message.experience);
    if (message.companies) {
      obj.companies = message.companies.map((e) => e);
    } else {
      obj.companies = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCV>): MsgUpdateCV {
    const message = { ...baseMsgUpdateCV } as MsgUpdateCV;
    message.companies = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.education !== undefined && object.education !== null) {
      message.education = object.education;
    } else {
      message.education = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    } else {
      message.summary = "";
    }
    if (object.skills !== undefined && object.skills !== null) {
      message.skills = object.skills;
    } else {
      message.skills = "";
    }
    if (object.experience !== undefined && object.experience !== null) {
      message.experience = object.experience;
    } else {
      message.experience = "";
    }
    if (object.companies !== undefined && object.companies !== null) {
      for (const e of object.companies) {
        message.companies.push(e);
      }
    }
    return message;
  },
};

const baseMsgUpdateCVResponse: object = { cvIndex: 0 };

export const MsgUpdateCVResponse = {
  encode(
    message: MsgUpdateCVResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cvIndex !== 0) {
      writer.uint32(8).uint64(message.cvIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCVResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCVResponse } as MsgUpdateCVResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cvIndex = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCVResponse {
    const message = { ...baseMsgUpdateCVResponse } as MsgUpdateCVResponse;
    if (object.cvIndex !== undefined && object.cvIndex !== null) {
      message.cvIndex = Number(object.cvIndex);
    } else {
      message.cvIndex = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateCVResponse): unknown {
    const obj: any = {};
    message.cvIndex !== undefined && (obj.cvIndex = message.cvIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCVResponse>): MsgUpdateCVResponse {
    const message = { ...baseMsgUpdateCVResponse } as MsgUpdateCVResponse;
    if (object.cvIndex !== undefined && object.cvIndex !== null) {
      message.cvIndex = object.cvIndex;
    } else {
      message.cvIndex = 0;
    }
    return message;
  },
};

const baseMsgGetCVByCosmosAdress: object = { creator: "", cosmosAddress: "" };

export const MsgGetCVByCosmosAdress = {
  encode(
    message: MsgGetCVByCosmosAdress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cosmosAddress !== "") {
      writer.uint32(18).string(message.cosmosAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGetCVByCosmosAdress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgGetCVByCosmosAdress } as MsgGetCVByCosmosAdress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.cosmosAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGetCVByCosmosAdress {
    const message = { ...baseMsgGetCVByCosmosAdress } as MsgGetCVByCosmosAdress;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.cosmosAddress !== undefined && object.cosmosAddress !== null) {
      message.cosmosAddress = String(object.cosmosAddress);
    } else {
      message.cosmosAddress = "";
    }
    return message;
  },

  toJSON(message: MsgGetCVByCosmosAdress): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cosmosAddress !== undefined &&
      (obj.cosmosAddress = message.cosmosAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgGetCVByCosmosAdress>
  ): MsgGetCVByCosmosAdress {
    const message = { ...baseMsgGetCVByCosmosAdress } as MsgGetCVByCosmosAdress;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.cosmosAddress !== undefined && object.cosmosAddress !== null) {
      message.cosmosAddress = object.cosmosAddress;
    } else {
      message.cosmosAddress = "";
    }
    return message;
  },
};

const baseMsgGetCVByCosmosAdressResponse: object = {};

export const MsgGetCVByCosmosAdressResponse = {
  encode(
    message: MsgGetCVByCosmosAdressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cvResponse !== undefined) {
      CV.encode(message.cvResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgGetCVByCosmosAdressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgGetCVByCosmosAdressResponse,
    } as MsgGetCVByCosmosAdressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cvResponse = CV.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGetCVByCosmosAdressResponse {
    const message = {
      ...baseMsgGetCVByCosmosAdressResponse,
    } as MsgGetCVByCosmosAdressResponse;
    if (object.cvResponse !== undefined && object.cvResponse !== null) {
      message.cvResponse = CV.fromJSON(object.cvResponse);
    } else {
      message.cvResponse = undefined;
    }
    return message;
  },

  toJSON(message: MsgGetCVByCosmosAdressResponse): unknown {
    const obj: any = {};
    message.cvResponse !== undefined &&
      (obj.cvResponse = message.cvResponse
        ? CV.toJSON(message.cvResponse)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgGetCVByCosmosAdressResponse>
  ): MsgGetCVByCosmosAdressResponse {
    const message = {
      ...baseMsgGetCVByCosmosAdressResponse,
    } as MsgGetCVByCosmosAdressResponse;
    if (object.cvResponse !== undefined && object.cvResponse !== null) {
      message.cvResponse = CV.fromPartial(object.cvResponse);
    } else {
      message.cvResponse = undefined;
    }
    return message;
  },
};

const baseMsgConfirmCV: object = { creator: "", name: "" };

export const MsgConfirmCV = {
  encode(message: MsgConfirmCV, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConfirmCV {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConfirmCV } as MsgConfirmCV;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmCV {
    const message = { ...baseMsgConfirmCV } as MsgConfirmCV;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgConfirmCV): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConfirmCV>): MsgConfirmCV {
    const message = { ...baseMsgConfirmCV } as MsgConfirmCV;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgConfirmCVResponse: object = {};

export const MsgConfirmCVResponse = {
  encode(_: MsgConfirmCVResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConfirmCVResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConfirmCVResponse } as MsgConfirmCVResponse;
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

  fromJSON(_: any): MsgConfirmCVResponse {
    const message = { ...baseMsgConfirmCVResponse } as MsgConfirmCVResponse;
    return message;
  },

  toJSON(_: MsgConfirmCVResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgConfirmCVResponse>): MsgConfirmCVResponse {
    const message = { ...baseMsgConfirmCVResponse } as MsgConfirmCVResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateCV(request: MsgCreateCV): Promise<MsgCreateCVResponse>;
  UpdateCV(request: MsgUpdateCV): Promise<MsgUpdateCVResponse>;
  GetCVByCosmosAdress(
    request: MsgGetCVByCosmosAdress
  ): Promise<MsgGetCVByCosmosAdressResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ConfirmCV(request: MsgConfirmCV): Promise<MsgConfirmCVResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateCV(request: MsgCreateCV): Promise<MsgCreateCVResponse> {
    const data = MsgCreateCV.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "CreateCV",
      data
    );
    return promise.then((data) => MsgCreateCVResponse.decode(new Reader(data)));
  }

  UpdateCV(request: MsgUpdateCV): Promise<MsgUpdateCVResponse> {
    const data = MsgUpdateCV.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "UpdateCV",
      data
    );
    return promise.then((data) => MsgUpdateCVResponse.decode(new Reader(data)));
  }

  GetCVByCosmosAdress(
    request: MsgGetCVByCosmosAdress
  ): Promise<MsgGetCVByCosmosAdressResponse> {
    const data = MsgGetCVByCosmosAdress.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "GetCVByCosmosAdress",
      data
    );
    return promise.then((data) =>
      MsgGetCVByCosmosAdressResponse.decode(new Reader(data))
    );
  }

  ConfirmCV(request: MsgConfirmCV): Promise<MsgConfirmCVResponse> {
    const data = MsgConfirmCV.encode(request).finish();
    const promise = this.rpc.request(
      "alexs778.cvproject.cvproject.Msg",
      "ConfirmCV",
      data
    );
    return promise.then((data) =>
      MsgConfirmCVResponse.decode(new Reader(data))
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
