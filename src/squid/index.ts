import { ChainType } from "../chains";
import Long from "long";

export enum SquidDataType {
  OnChainExecution = "ON_CHAIN_EXECUTION",
  ChainflipDepositAddress = "CHAINFLIP_DEPOSIT_ADDRESS",
  DepositAddressCalldata = "DEPOSIT_ADDRESS_CALLDATA",
  DepositAddressWithMemo = "DEPOSIT_ADDRESS_WITH_MEMO",
  DepositAddressWithSignature = "DEPOSIT_ADDRESS_WITH_SIGNATURE",
}

export enum SquidRouteType {
  CALL_BRIDGE_CALL = "CALL_BRIDGE_CALL",
  CALL_BRIDGE = "CALL_BRIDGE",
  BRIDGE_CALL = "BRIDGE_CALL",
  BRIDGE = "BRIDGE",
  EVM_ONLY = "EVM_ONLY",
  COSMOS_ONLY = "COSMOS_ONLY",
  SOLANA_ONLY = "SOLANA_ONLY",
  RFQ = "RFQ",
  CORAL_V2 = "CORAL_V2",
  FUND_AND_RUN_MULTICALL = "FUND_AND_RUN_MULTICALL",
}

export type SquidData = OnChainExecutionData | ChainflipDepositAddressData;

export interface OnChainExecutionData {
  type: SquidDataType;
  routeType: SquidRouteType;
  target: string;
  data: string;
  value: string;
  gasLimit?: string;
  gasPrice?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  requestId?: string;
  expiry?: string;
  expiryOffset?: string;
  hasJitoTipFee?: boolean;
}

export interface ChainflipDepositAddressData {
  type: SquidDataType;
  request: {
    quote: any;
    amount: string;
    fromAddress?: string;
    toAddress: string;
    ccmParams?: {
      message: string;
      gasBudget: string;
    };
    fillOrKillParams: {
      minPrice: string;
      refundAddress: string;
      retryDurationBlocks: number;
    };
  };
}

export type ChainCall = EvmContractCall | CosmosCall | SuiCoralCall;

export interface EvmContractCall {
  chainType: ChainType.EVM;
  callType: SquidCallType;
  target: string;
  value?: string;
  callData: string;
  payload?: {
    tokenAddress: string;
    inputPos: number;
  };
  estimatedGas: string;
}

export enum SquidCallType {
  DEFAULT = 0,
  FULL_TOKEN_BALANCE = 1,
  FULL_NATIVE_BALANCE = 2,
  COLLECT_TOKEN_BALANCE = 3,
}

export type SquidCallData = {
  callType: SquidCallType;
  target: string;
  value: string;
  callData: string;
  payload: string;
};

export interface CosmosCall {
  chainType: ChainType.COSMOS;
  callType: CosmosCallType;
  call:
    | CosmosMulticallContractCall
    | CosmosIbcTransferCall
    | CosmosPfmCall
    | CosmosGmpCall
    | CosmosBankSendCall
    | CosmosCctpCall;
}

export enum CosmosCallType {
  MULTICALL,
  IBC_TRANSFER,
  PFM,
  GMP,
  CCTP,
}

export interface CosmosMulticallContractCall {
  msg: object;
  actions: (NativeBalanceFetchAction | IbcTrackingAction | FieldToProtoBinaryAction)[];
}

export interface NativeBalanceFetchAction {
  native_balance_fetch: {
    denom: string;
    replacer: string;
  };
}

export interface IbcTrackingAction {
  ibc_tracking: {
    channel: string;
    denom: string;
    amount?: string;
    amount_pointer?: string;
  };
}

export interface FieldToProtoBinaryAction {
  field_to_binary: {
    replacer: string;
    proto_msg_type: "ibc_transfer" | "osmosis_swap_exact_amt_in";
  };
}

export interface CosmosIbcTransferCall {
  typeUrl: "/ibc.applications.transfer.v1.MsgTransfer";
  value: {
    sourcePort: "transfer";
    sourceChannel: string;
    token: {
      denom: string;
      amount: string;
    };
    sender: string;
    receiver: string;
    timeoutTimestamp: Long;
    memo: string;
  };
}

export interface CosmosPfmCall {
  forward: {
    receiver: string;
    port: "transfer";
    channel: string;
    next?: object;
  };
}

export interface CosmosGmpCall {
  destination_chain: string;
  destination_address: string;
  payload?: number[];
  type: number;
  fee?: {
    amount: string;
    recipient: string;
  };
}

export interface CosmosBankSendCall {
  bank: {
    send: {
      to_address: string;
      amount: {
        denom: string;
        amount: string;
      }[];
    };
  };
}

export interface CosmosCctpCall {
  typeUrl: "/circle.cctp.v1.MsgDepositForBurn";
  value: {
    from: string;
    amount: string;
    destinationDomain: number;
    mintRecipient: string;
    burnToken: string;
  };
}

export interface SuiCoralCall {
  callType?: SuiCoralCallType;
  chainType: ChainType.SUI;
  coralID: string;
  coralStateId: string;
  coinType: string;
  tx: string;
}

export enum SuiCoralCallType {
  DEFAULT = 0,
}
