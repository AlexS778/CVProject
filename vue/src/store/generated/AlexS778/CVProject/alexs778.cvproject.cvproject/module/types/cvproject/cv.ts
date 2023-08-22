/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "alexs778.cvproject.cvproject";

export interface CV {
  index: string;
  name: string;
  education: string;
  summary: string;
  skills: string;
  experience: string;
  companies: string[];
  creator: string;
}

const baseCV: object = {
  index: "",
  name: "",
  education: "",
  summary: "",
  skills: "",
  experience: "",
  companies: "",
  creator: "",
};

export const CV = {
  encode(message: CV, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
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
    if (message.creator !== "") {
      writer.uint32(66).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CV {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCV } as CV;
    message.companies = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
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
        case 8:
          message.creator = reader.string();
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
    message.companies = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    if (message.companies) {
      obj.companies = message.companies.map((e) => e);
    } else {
      obj.companies = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<CV>): CV {
    const message = { ...baseCV } as CV;
    message.companies = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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
