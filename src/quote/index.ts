import {
  ActionStage,
  BridgeDetails,
  CustomCallDetails,
  SwapDetails,
  PathAction,
  WrapDetails,
  FeeDetails,
  LiquidityProviderDetails,
} from "../index";

export interface Quote {
  actions: QuoteAction[];
  fromAmount: string;
  toAmount: string;
  toAmountMin: string;
  exchangeRate: string;
  aggregatePriceImpact: string;
  estimatedRouteDuration: number;
  fromAmountUSD?: string;
  toAmountUSD?: string;
  toAmountMinUSD?: string;
  aggregateSlippage?: number;
}

export interface QuoteAction extends Omit<PathAction, "data"> {
  fromAmount: string;
  toAmount: string;
  toAmountMin: string;
  exchangeRate: string;
  priceImpact: string;
  stage?: ActionStage;
  data:
    | SwapDetails
    | WrapDetails
    | BridgeDetails
    | CustomCallDetails
    | FeeDetails
    | LiquidityProviderDetails;
}
