/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "alexs778.cvproject.cvproject";

export interface Company {
  uUID: string;
  name: string;
  creator: string;
}

const baseCompany: object = { uUID: "", name: "", creator: "" };

export const Company = {
  encode(message: Company, writer: Writer = Writer.create()): Writer {
    if (message.uUID !== "") {
      writer.uint32(10).string(message.uUID);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
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
          message.uUID = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.creator = reader.string();
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
    if (object.uUID !== undefined && object.uUID !== null) {
      message.uUID = String(object.uUID);
    } else {
      message.uUID = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Company): unknown {
    const obj: any = {};
    message.uUID !== undefined && (obj.uUID = message.uUID);
    message.name !== undefined && (obj.name = message.name);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Company>): Company {
    const message = { ...baseCompany } as Company;
    if (object.uUID !== undefined && object.uUID !== null) {
      message.uUID = object.uUID;
    } else {
      message.uUID = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
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
