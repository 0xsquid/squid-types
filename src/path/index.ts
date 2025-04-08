import { Dex, DexName } from "../dexes";
import { ChainData, ChainType } from "../chains";
import { ActionType, FillerAddresses } from "../routes";
import { Token } from "../tokens";
import { WrapperType } from "../wrappers";
import { BridgeType } from "../bridges";

export interface PathInternal {
  fromChain: string;
  fromToken: string;
  toChain: string;
  toToken: string;
  actions: PathActionInternal[];
}

export interface Path {
  fromChain: ChainData;
  fromToken: Token;
  toChain: ChainData;
  toToken: Token;
  actions: PathAction[];
}

export interface PathActionInternal {
  type: ActionType;
  chainType: ChainType;
  fromChainId: string;
  toChainId: string;
  fromToken: string;
  toToken: string;
  data: Record<string, any>;
}

export interface Buckets {
  [key: number]: string;
}

export interface ActionBaseData {
  dex: DexName | Dex;
  chainId: string;
  slippage: number;
  path: string[];
  custom: Record<string, any>;
  type: WrapperType | BridgeType;

  // pools
  poolFee: number;
  poolId: string;
  isStable: boolean;
  exchangeId?: string;
  exchangeProvider?: string;
  osmosisPools: {
    poolId: string;
    tokenOutDenom: string;
  }[];
  buckets: Buckets;
  tickSpacing: number;
  binStep: number;

  // wrappers
  address: string;
  wrapper: string;
  coinAddresses: string[];

  // bridges
  name: string;

  // rfq
  provider: string;
  liquidityProvider: string;
  fillerAddresses: FillerAddresses;
}

export interface PathAction {
  type: ActionType;
  chainType: ChainType;
  fromChain: ChainData;
  toChain: ChainData;
  fromToken: Token;
  toToken: Token;
  data: ActionBaseData;
}

export interface PathParams {
  fromChainId: string;
  toChainId: string;
  fromToken: string;
  toToken: string;
  amountInUsd: number;
}
