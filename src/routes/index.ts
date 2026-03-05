import { ChainData, ChainType } from "../chains";
import { Dex, DexName } from "../dexes";
import { FeeCost, GasCost } from "../fees";
import { QuoteAction } from "../quote";
import { ChainCall, SquidData } from "../squid";
import { Token, Volatility } from "../tokens";
import { WrapDirection, WrapperType } from "../wrappers";
import { BridgeType } from "../bridges";

export interface RouteResponse {
  route: {
    estimate: Estimate;
    transactionRequest?: SquidData;
    params: RouteRequest;
    quoteId: string;
  };
}

export interface RouteRequest {
  fromChain: string;
  fromToken: string;
  fromAmount?: string;
  fromAddress?: string;
  toChain: string;
  toToken: string;
  toAmount?: string;
  toAddress?: string;
  slippage?: number;
  quoteOnly?: boolean;
  preHook?: Hook;
  postHook?: Omit<Hook, "fundAmount" | "fundToken">;
  receiveGasOnDestination?: boolean;
  fallbackAddresses?: FallbackAddress[];
  bypassGuardrails?: boolean;
  customParams?: {
    jitoTipFeeInLamports?: string;
  };
  overrideGasRefundAddress?: string;
}

export interface RouteRequestPopulated {
  fromChain: ChainData;
  toChain: ChainData;
  fromToken: Token;
  toToken: Token;
  fromAmount: string;
  fromAddress?: string;
  toAddress?: string;
  slippage: number;
  quoteOnly?: boolean;
  enableBoost?: boolean;
  preHook?: Hook;
  postHook?: Omit<Hook, "fundAmount" | "fundToken">;
  receiveGasOnDestination?: boolean;
  fallbackAddresses?: FallbackAddress[];
  bypassGuardrails?: boolean;
  customParams?: {
    jitoTipFeeInLamports?: string;
  };
  overrideGasRefundAddress?: string;
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
  exchangeRate: string;
  aggregatePriceImpact: string;
  estimatedRouteDuration: number;
  fromAmountUSD?: string;
  toAmountUSD?: string;
  toAmountMinUSD?: string;
  isBoostSupported: boolean;
  gasCosts: GasCost[];
  feeCosts: FeeCost[];
  aggregateSlippage: number;
}

export interface RouteActionResponse extends Omit<RouteAction, "fromChain" | "toChain" | "data"> {
  fromChain: string;
  toChain: string;
  data:
    | _SwapDetails
    | WrapDetails
    | BridgeDetails
    | CustomCallDetails
    | FeeDetails
    | LiquidityProviderDetails;
}

export interface RouteAction extends QuoteAction {
  provider?: string;
  description?: string;
  logoURI?: string;
  estimatedDuration?: number;
  orderHash?: string;
  data:
    | SwapDetails
    | WrapDetails
    | BridgeDetails
    | CustomCallDetails
    | FeeDetails
    | LiquidityProviderDetails;
}

export enum ActionType {
  SWAP = "swap",
  WRAP = "wrap",
  BRIDGE = "bridge",
  IBC_TRANSFER = "ibc-transfer",
  CUSTOM = "custom",
  FEE = "fee",
  RFQ = "rfq",
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
  logoURI?: string;
  name?: string;
  provider?: string;
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
  binStep: number;
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
  logoURI?: string;
  provider?: string;
}

export interface BridgeDetails {
  target: string;
  provider: string;
  type: BridgeType;
  name: string;
  logoURI?: string;
  calls?: ChainCall[];
  quote?: { estimatedPrice: string };
}

export interface CustomCallDetails {
  name: string;
  logoURI?: string;
  provider?: string;
  calls: ChainCall[];
}

export interface FillerAddresses {
  evm: string;
  cosmos: string;
  solana: string;
  sui: string;
}

export interface LiquidityProviderDetails {
  liquidityProvider: string;
  target: string;
  provider: string;
  type: BridgeType;
  name: string;
  logoURI?: string;
  calls?: ChainCall[];
  fillerAddress?: string;
  fillerAddresses?: FillerAddresses;
  expiry: string;
  estimatedFillDuration?: number;
}

export interface Integrator {
  id: string;
  enabled: boolean;
}

export enum FEES_ENUM {
  PLATFORM = "PLATFORM",
  INTEGRATOR = "INTEGRATOR",
  CHAIN = "CHAIN",
  TOKEN = "TOKEN",
  TIER = "TIER",
}

export interface AddressEntry {
  chainType: ChainType;
  address: string;
}

export interface PlatformFee {
  type: FEES_ENUM.PLATFORM;
  flat: number;
  percentage: number;
  enabled: boolean;
  address: string;
  addressBook?: AddressEntry[];
}

export interface IntegratorFee {
  type: FEES_ENUM.INTEGRATOR;
  flat: number;
  percentage: number;
  flat2?: number;
  percentage2?: number;
  squidFlat: number;
  squidPercentage: number;
  enabled: boolean;
  address: string;
  addressBook?: AddressEntry[];
  address2?: string;
  addressBook2?: AddressEntry[];
  integrator?: Integrator;
}

export interface ChainFee {
  type: FEES_ENUM.CHAIN;
  flat: number;
  percentage: number;
  enabled: boolean;
  chain?: ChainData;
}

export interface TokenFee {
  type: FEES_ENUM.TOKEN;
  flat: number;
  percentage: number;
  enabled: boolean;
  token?: Token;
}

export interface TierFee {
  type: FEES_ENUM.TIER;
  tier: Volatility;
  flat: number;
  percentage: number;
  enabled: boolean;
}

export interface FeeDetails {
  calls?: ChainCall[];
  platformFee: PlatformFee;
  integratorFee: IntegratorFee;
  chainFee: ChainFee;
  tokenFee: TokenFee;
  tierFee: TierFee;
  totalFeeAmount: bigint;
  platformFeeAmount: bigint;
  integratorFeeAmount: bigint;
  integratorFee2Amount: bigint;
  squidFeeAmount: bigint;
  chainFeeAmount: bigint;
  tokenFeeAmount: bigint;
  tierFeeAmount: bigint;
  logoURI: string;
}

export interface Hook {
  chainType: ChainType;
  fundAmount: string;
  fundToken: string;
  calls: ChainCall[];
  description: string;
  logoURI: string;
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
  BTC_SOURCE,
  BTC_DESTINATION,
  SOLANA_SOURCE,
  SOLANA_DESTINATION,
  SOLANA_ONLY,
  SUI_SOURCE,
  SUI_DESTINATION,
  XRPL_SOURCE,
  XRPL_DESTINATION,
  STELLAR_SOURCE,
  STELLAR_DESTINATION,
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
  isExactOutput?: boolean;
}
