// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgGetCVByCosmosAdress } from "./types/cvproject/tx";
import { MsgCreateCV } from "./types/cvproject/tx";
import { MsgUpdateCV } from "./types/cvproject/tx";
import { MsgConfirmCV } from "./types/cvproject/tx";


const types = [
  ["/alexs778.cvproject.cvproject.MsgGetCVByCosmosAdress", MsgGetCVByCosmosAdress],
  ["/alexs778.cvproject.cvproject.MsgCreateCV", MsgCreateCV],
  ["/alexs778.cvproject.cvproject.MsgUpdateCV", MsgUpdateCV],
  ["/alexs778.cvproject.cvproject.MsgConfirmCV", MsgConfirmCV],
  
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
    msgGetCVByCosmosAdress: (data: MsgGetCVByCosmosAdress): EncodeObject => ({ typeUrl: "/alexs778.cvproject.cvproject.MsgGetCVByCosmosAdress", value: MsgGetCVByCosmosAdress.fromPartial( data ) }),
    msgCreateCV: (data: MsgCreateCV): EncodeObject => ({ typeUrl: "/alexs778.cvproject.cvproject.MsgCreateCV", value: MsgCreateCV.fromPartial( data ) }),
    msgUpdateCV: (data: MsgUpdateCV): EncodeObject => ({ typeUrl: "/alexs778.cvproject.cvproject.MsgUpdateCV", value: MsgUpdateCV.fromPartial( data ) }),
    msgConfirmCV: (data: MsgConfirmCV): EncodeObject => ({ typeUrl: "/alexs778.cvproject.cvproject.MsgConfirmCV", value: MsgConfirmCV.fromPartial( data ) }),
    
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
