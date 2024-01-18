import {
  ActionStage,
  BridgeDetails,
  CustomCallDetails,
  SwapDetails,
  PathAction,
  WrapDetails,
} from "../index";

export interface Quote {
  actions: QuoteAction[];
  fromAmount: string;
  toAmount: string;
  toAmountMin: string;
  sendAmount: string;
  exchangeRate: string;
  aggregatePriceImpact: string;
  estimatedRouteDuration: number;
  fromAmountUsd?: string;
  toAmountUsd?: string;
  toAmountMinUsd?: string;
  aggregateSlippage?: number;
}

export interface QuoteAction extends Omit<PathAction, "data"> {
  fromAmount: string;
  toAmount: string;
  toAmountMin: string;
  exchangeRate: string;
  priceImpact: string;
  stage?: ActionStage;
  data: SwapDetails | WrapDetails | BridgeDetails | CustomCallDetails;
}
