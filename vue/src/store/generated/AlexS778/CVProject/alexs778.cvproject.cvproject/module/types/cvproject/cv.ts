/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "alexs778.cvproject.cvproject";

export interface CV {
  index: number;
  name: string;
  education: string;
  summary: string;
  skills: string;
  experience: string;
  cosmos_address: string;
  Companies: Company[];
}

export interface Company {
  uuid: string;
  name: string;
  timestamp_start: string;
  timestamp_end: string;
  comments: string;
}

const baseCV: object = {
  index: 0,
  name: "",
  education: "",
  summary: "",
  skills: "",
  experience: "",
  cosmos_address: "",
};

export const CV = {
  encode(message: CV, writer: Writer = Writer.create()): Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint64(message.index);
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
    if (message.cosmos_address !== "") {
      writer.uint32(58).string(message.cosmos_address);
    }
    for (const v of message.Companies) {
      Company.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CV {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCV } as CV;
    message.Companies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToNumber(reader.uint64() as Long);
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
          message.cosmos_address = reader.string();
          break;
        case 8:
          message.Companies.push(Company.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CV {
    const message = { ...baseCV } as CV;
    message.Companies = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
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
    if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
      message.cosmos_address = String(object.cosmos_address);
    } else {
      message.cosmos_address = "";
    }
    if (object.Companies !== undefined && object.Companies !== null) {
      for (const e of object.Companies) {
        message.Companies.push(Company.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: CV): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
    message.education !== undefined && (obj.education = message.education);
    message.summary !== undefined && (obj.summary = message.summary);
    message.skills !== undefined && (obj.skills = message.skills);
    message.experience !== undefined && (obj.experience = message.experience);
    message.cosmos_address !== undefined &&
      (obj.cosmos_address = message.cosmos_address);
    if (message.Companies) {
      obj.Companies = message.Companies.map((e) =>
        e ? Company.toJSON(e) : undefined
      );
    } else {
      obj.Companies = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CV>): CV {
    const message = { ...baseCV } as CV;
    message.Companies = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
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
    if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
      message.cosmos_address = object.cosmos_address;
    } else {
      message.cosmos_address = "";
    }
    if (object.Companies !== undefined && object.Companies !== null) {
      for (const e of object.Companies) {
        message.Companies.push(Company.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCompany: object = {
  uuid: "",
  name: "",
  timestamp_start: "",
  timestamp_end: "",
  comments: "",
};

export const Company = {
  encode(message: Company, writer: Writer = Writer.create()): Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.timestamp_start !== "") {
      writer.uint32(26).string(message.timestamp_start);
    }
    if (message.timestamp_end !== "") {
      writer.uint32(34).string(message.timestamp_end);
    }
    if (message.comments !== "") {
      writer.uint32(42).string(message.comments);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Company {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompany } as Company;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.timestamp_start = reader.string();
          break;
        case 4:
          message.timestamp_end = reader.string();
          break;
        case 5:
          message.comments = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Company {
    const message = { ...baseCompany } as Company;
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.timestamp_start !== undefined &&
      object.timestamp_start !== null
    ) {
      message.timestamp_start = String(object.timestamp_start);
    } else {
      message.timestamp_start = "";
    }
    if (object.timestamp_end !== undefined && object.timestamp_end !== null) {
      message.timestamp_end = String(object.timestamp_end);
    } else {
      message.timestamp_end = "";
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    return message;
  },

  toJSON(message: Company): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.name !== undefined && (obj.name = message.name);
    message.timestamp_start !== undefined &&
      (obj.timestamp_start = message.timestamp_start);
    message.timestamp_end !== undefined &&
      (obj.timestamp_end = message.timestamp_end);
    message.comments !== undefined && (obj.comments = message.comments);
    return obj;
  },

  fromPartial(object: DeepPartial<Company>): Company {
    const message = { ...baseCompany } as Company;
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.timestamp_start !== undefined &&
      object.timestamp_start !== null
    ) {
      message.timestamp_start = object.timestamp_start;
    } else {
      message.timestamp_start = "";
    }
    if (object.timestamp_end !== undefined && object.timestamp_end !== null) {
      message.timestamp_end = object.timestamp_end;
    } else {
      message.timestamp_end = "";
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    return message;
  },
};

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
