/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "alexs778.cvproject.cvproject";

export interface CompanyWorkedIn {
  uuid: string;
  companyName: string;
  timestampStart: string;
  timestampEnd: string;
  comments: string;
  creator: string;
}

const baseCompanyWorkedIn: object = {
  uuid: "",
  companyName: "",
  timestampStart: "",
  timestampEnd: "",
  comments: "",
  creator: "",
};

export const CompanyWorkedIn = {
  encode(message: CompanyWorkedIn, writer: Writer = Writer.create()): Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.companyName !== "") {
      writer.uint32(18).string(message.companyName);
    }
    if (message.timestampStart !== "") {
      writer.uint32(26).string(message.timestampStart);
    }
    if (message.timestampEnd !== "") {
      writer.uint32(34).string(message.timestampEnd);
    }
    if (message.comments !== "") {
      writer.uint32(42).string(message.comments);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CompanyWorkedIn {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCompanyWorkedIn } as CompanyWorkedIn;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.companyName = reader.string();
          break;
        case 3:
          message.timestampStart = reader.string();
          break;
        case 4:
          message.timestampEnd = reader.string();
          break;
        case 5:
          message.comments = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CompanyWorkedIn {
    const message = { ...baseCompanyWorkedIn } as CompanyWorkedIn;
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.companyName !== undefined && object.companyName !== null) {
      message.companyName = String(object.companyName);
    } else {
      message.companyName = "";
    }
    if (object.timestampStart !== undefined && object.timestampStart !== null) {
      message.timestampStart = String(object.timestampStart);
    } else {
      message.timestampStart = "";
    }
    if (object.timestampEnd !== undefined && object.timestampEnd !== null) {
      message.timestampEnd = String(object.timestampEnd);
    } else {
      message.timestampEnd = "";
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: CompanyWorkedIn): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.companyName !== undefined &&
      (obj.companyName = message.companyName);
    message.timestampStart !== undefined &&
      (obj.timestampStart = message.timestampStart);
    message.timestampEnd !== undefined &&
      (obj.timestampEnd = message.timestampEnd);
    message.comments !== undefined && (obj.comments = message.comments);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<CompanyWorkedIn>): CompanyWorkedIn {
    const message = { ...baseCompanyWorkedIn } as CompanyWorkedIn;
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.companyName !== undefined && object.companyName !== null) {
      message.companyName = object.companyName;
    } else {
      message.companyName = "";
    }
    if (object.timestampStart !== undefined && object.timestampStart !== null) {
      message.timestampStart = object.timestampStart;
    } else {
      message.timestampStart = "";
    }
    if (object.timestampEnd !== undefined && object.timestampEnd !== null) {
      message.timestampEnd = object.timestampEnd;
    } else {
      message.timestampEnd = "";
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
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
