// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateCompanyWorkedIn } from "./types/cvproject/tx";
import { MsgConfirmCV } from "./types/cvproject/tx";
import { MsgCreateCV } from "./types/cvproject/tx";
import { MsgCreateCompanyWorkedIn } from "./types/cvproject/tx";
import { MsgDeleteCompanyWorkedIn } from "./types/cvproject/tx";
import { MsgUpdateCV } from "./types/cvproject/tx";


const types = [
  ["/alexs778.cvproject.cvproject.MsgUpdateCompanyWorkedIn", MsgUpdateCompanyWorkedIn],
  ["/alexs778.cvproject.cvproject.MsgConfirmCV", MsgConfirmCV],
  ["/alexs778.cvproject.cvproject.MsgCreateCV", MsgCreateCV],
  ["/alexs778.cvproject.cvproject.MsgCreateCompanyWorkedIn", MsgCreateCompanyWorkedIn],
  ["/alexs778.cvproject.cvproject.MsgDeleteCompanyWorkedIn", MsgDeleteCompanyWorkedIn],
  ["/alexs778.cvproject.cvproject.MsgUpdateCV", MsgUpdateCV],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateCompanyWorkedIn: (data: MsgUpdateCompanyWorkedIn): EncodeObject => ({ typeUrl: "/alexs778.cvproject.cvproject.MsgUpdateCompanyWorkedIn", value: MsgUpdateCompanyWorkedIn.fromPartial( data ) }),
    msgConfirmCV: (data: MsgConfirmCV): EncodeObject => ({ typeUrl: "/alexs778.cvproject.cvproject.MsgConfirmCV", value: MsgConfirmCV.fromPartial( data ) }),
    msgCreateCV: (data: MsgCreateCV): EncodeObject => ({ typeUrl: "/alexs778.cvproject.cvproject.MsgCreateCV", value: MsgCreateCV.fromPartial( data ) }),
    msgCreateCompanyWorkedIn: (data: MsgCreateCompanyWorkedIn): EncodeObject => ({ typeUrl: "/alexs778.cvproject.cvproject.MsgCreateCompanyWorkedIn", value: MsgCreateCompanyWorkedIn.fromPartial( data ) }),
    msgDeleteCompanyWorkedIn: (data: MsgDeleteCompanyWorkedIn): EncodeObject => ({ typeUrl: "/alexs778.cvproject.cvproject.MsgDeleteCompanyWorkedIn", value: MsgDeleteCompanyWorkedIn.fromPartial( data ) }),
    msgUpdateCV: (data: MsgUpdateCV): EncodeObject => ({ typeUrl: "/alexs778.cvproject.cvproject.MsgUpdateCV", value: MsgUpdateCV.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
