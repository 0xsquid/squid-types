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
  /** Exact output only: the input cap encoded in the transaction, fromAmount widened by the route slippage */
  fromAmountMax?: string;
  exchangeRate: string;
  aggregatePriceImpact: string;
  estimatedRouteDuration: number;
  fromAmountUSD?: string;
  toAmountUSD?: string;
  toAmountMinUSD?: string;
  /** Exact output only: USD value of fromAmountMax */
  fromAmountMaxUSD?: string;
  aggregateSlippage?: number;
}

export interface QuoteAction extends Omit<PathAction, "data"> {
  fromAmount: string;
  toAmount: string;
  toAmountMin: string;
  /** Exact output only: the most this action may consume, fromAmount widened by the slippage of this and every later action */
  fromAmountMax?: string;
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
