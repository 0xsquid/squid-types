import { ChainType } from "../chains";

export enum SquidRouteType {
  CALL_BRIDGE_CALL = "CALL_BRIDGE_CALL",
  CALL_BRIDGE = "CALL_BRIDGE",
  BRIDGE_CALL = "BRIDGE_CALL",
  BRIDGE = "BRIDGE",
  EVM_ONLY = "EVM_ONLY",
  COSMOS_ONLY = "COSMOS_ONLY",
}

export interface SquidData {
  routeType: SquidRouteType;
  target: string;
  data: string;
  value: string;
  gasLimit?: string;
  gasPrice?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
}

export type ChainCall = EvmContractCall | CosmosContractCall;

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

export interface CosmosContractCall {
  chainType: ChainType.COSMOS;
  call: CosmosCctpCall;
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

export enum SlippageMode {
  AGGRESSIVE,
  NORMAL,
  FLEXIBLE,
}
