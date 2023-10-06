/* eslint-disable */
import { Params } from "../cvproject/params";
import { CV, Company } from "../cvproject/cv";
import { CompanyWorkedIn } from "../cvproject/company_worked_in";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "alexs778.cvproject.cvproject";

/** GenesisState defines the cvproject module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  cVList: CV[];
  companyList: Company[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  companyWorkedInList: CompanyWorkedIn[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cVList) {
      CV.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.companyList) {
      Company.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.companyWorkedInList) {
      CompanyWorkedIn.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.cVList = [];
    message.companyList = [];
    message.companyWorkedInList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.cVList.push(CV.decode(reader, reader.uint32()));
          break;
        case 4:
          message.companyList.push(Company.decode(reader, reader.uint32()));
          break;
        case 5:
          message.companyWorkedInList.push(
            CompanyWorkedIn.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.cVList = [];
    message.companyList = [];
    message.companyWorkedInList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.cVList !== undefined && object.cVList !== null) {
      for (const e of object.cVList) {
        message.cVList.push(CV.fromJSON(e));
      }
    }
    if (object.companyList !== undefined && object.companyList !== null) {
      for (const e of object.companyList) {
        message.companyList.push(Company.fromJSON(e));
      }
    }
    if (
      object.companyWorkedInList !== undefined &&
      object.companyWorkedInList !== null
    ) {
      for (const e of object.companyWorkedInList) {
        message.companyWorkedInList.push(CompanyWorkedIn.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.cVList) {
      obj.cVList = message.cVList.map((e) => (e ? CV.toJSON(e) : undefined));
    } else {
      obj.cVList = [];
    }
    if (message.companyList) {
      obj.companyList = message.companyList.map((e) =>
        e ? Company.toJSON(e) : undefined
      );
    } else {
      obj.companyList = [];
    }
    if (message.companyWorkedInList) {
      obj.companyWorkedInList = message.companyWorkedInList.map((e) =>
        e ? CompanyWorkedIn.toJSON(e) : undefined
      );
    } else {
      obj.companyWorkedInList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.cVList = [];
    message.companyList = [];
    message.companyWorkedInList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.cVList !== undefined && object.cVList !== null) {
      for (const e of object.cVList) {
        message.cVList.push(CV.fromPartial(e));
      }
    }
    if (object.companyList !== undefined && object.companyList !== null) {
      for (const e of object.companyList) {
        message.companyList.push(Company.fromPartial(e));
      }
    }
    if (
      object.companyWorkedInList !== undefined &&
      object.companyWorkedInList !== null
    ) {
      for (const e of object.companyWorkedInList) {
        message.companyWorkedInList.push(CompanyWorkedIn.fromPartial(e));
      }
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
