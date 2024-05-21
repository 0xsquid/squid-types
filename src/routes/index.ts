import { ChainData, ChainType } from "../chains";
import { Dex, DexName } from "../dexes";
import { FeeCost, GasCost } from "../fees";
import { QuoteAction } from "../quote";
import { ChainCall, SlippageMode, SquidData } from "../squid";
import { Token } from "../tokens";
import { WrapDirection, WrapperType } from "../wrappers";
import { BridgeType } from "../bridges";

export interface RouteResponse {
  route: {
    estimate: Estimate;
    transactionRequest?: SquidData;
    params: RouteRequest;
  };
}

export interface RouteRequest {
  fromChain: string;
  fromToken: string;
  fromAmount: string;
  fromAddress?: string;
  toChain: string;
  toToken: string;
  toAddress?: string;
  slippageConfig: {
    slippage?: number;
    autoMode: SlippageMode;
  };
  quoteOnly?: boolean;
  enableBoost?: boolean;
  preHook?: Hook;
  postHook?: Omit<Hook, "fundAmount" | "fundToken">;
  prefer?: DexName[];
  receiveGasOnDestination?: boolean;
  fallbackAddresses?: FallbackAddress[];
  bypassGuardrails?: boolean;
  onChainQuoting?: boolean;
}

export interface RouteRequestPopulated {
  fromChain: ChainData;
  toChain: ChainData;
  fromToken: Token;
  toToken: Token;
  fromAmount: string;
  fromAddress?: string;
  toAddress?: string;
  slippageConfig: {
    slippage?: number;
    autoMode: SlippageMode;
  };
  quoteOnly?: boolean;
  enableBoost?: boolean;
  preHook?: Hook;
  postHook?: Omit<Hook, "fundAmount" | "fundToken">;
  prefer?: DexName[];
  receiveGasOnDestination?: boolean;
  fallbackAddresses?: FallbackAddress[];
  onChainQuoting?: boolean;
  bypassGuardrails?: boolean;
}

export interface Estimate extends Omit<Route, "actions"> {
  actions: RouteActionResponse[];
}

export interface Route {
  actions: RouteAction[];
  fromToken: Token;
  toToken: Token;
  fromAmount: string;
  toAmount: string;
  toAmountMin: string;
  sendAmount: string;
  exchangeRate: string;
  aggregatePriceImpact: string;
  estimatedRouteDuration: number;
  fromAmountUSD?: string;
  toAmountUSD?: string;
  toAmountMinUSD?: string;
  isBoostSupported: boolean;
  gasCosts: GasCost[];
  feeCosts: FeeCost[];
}

export interface RouteActionResponse extends Omit<RouteAction, "fromChain" | "toChain" | "data"> {
  fromChain: string;
  toChain: string;
  data: _SwapDetails | WrapDetails | BridgeDetails | CustomCallDetails;
}

export interface RouteAction extends QuoteAction {
  provider?: string;
  description?: string;
  iconURI?: string;
  data: SwapDetails | WrapDetails | BridgeDetails | CustomCallDetails;
}

export enum ActionType {
  SWAP = "swap",
  WRAP = "wrap",
  BRIDGE = "bridge",
  IBC_TRANSFER = "ibc-transfer",
  CUSTOM = "custom",
}

export interface WrapDetails {
  target: string;
  path: string[];
  type: WrapperType;
  address: string;
  wrapper: string;
  coinAddresses: string[];
  direction: WrapDirection;
  calls: ChainCall[];
  custom?: Record<string, any>;
}

export interface _SwapDetails extends Omit<SwapDetails, "dex"> {
  dex: DexName;
}

export interface SwapDetails {
  target: string;
  path: string[];
  dex: Dex;
  calls: ChainCall[];
  poolId: string;
  poolFee: string;
  tickSpacing: number;
  osmosisPools: {
    poolId: string;
    tokenOutDenom: string;
  }[];
  coinAddresses: string[];
  isStable?: boolean;
  exchangeId?: string;
  exchangeProvider?: string;
  address?: string;
  custom?: Record<string, any>;
}

export interface BridgeDetails {
  target: string;
  provider: string;
  type: BridgeType;
  name: string;
  calls?: ChainCall[];
}

export interface CustomCallDetails {
  name: string;
  calls: ChainCall[];
}

export interface Hook {
  chainType: ChainType;
  fundAmount: string;
  fundToken: string;
  calls: ChainCall[];
  description: string;
  iconURI: string;
  provider: string;
}

export interface FallbackAddress {
  coinType: number;
  address: string;
}

export enum ActionStage {
  EVM_SOURCE,
  EVM_DESTINATION,
  EVM_TRANSIENT,
  EVM_ONLY,
  COSMOS_SOURCE,
  COSMOS_DESTINATION,
  COSMOS_TRANSIENT,
  COSMOS_ONLY,
}

export interface StageContext {
  stage?: ActionStage;
  isSourceNative: boolean;
  isDestinationNative: boolean;
  receiver: string;
  fromAddress?: string;
  isFirstAction?: boolean;
  isLastAction?: boolean;
  hasDestinationCalls?: boolean;
  hasSourceCalls?: boolean;
  multicall?: string;
  preHook: boolean;
  postHook: boolean;
}
