export enum SpokeEventType {
  ORDER_CREATED = "OrderCreated",
  ORDER_FILLED = "OrderFilled",
  ORDER_REFUNDED = "OrderRefunded",
  SETTLEMENT_FORWARDED = "SettlementForwarded",
  TOKENS_RELEASED = "TokensReleased",
}

export enum HubEventType {
  SETTLEMENT_FILLED = "SettlementFilled",
  SETTLEMENT_PROCESSED = "SettlementProcessed",
}

export enum CoralMessageProvider {
  UNSUPPORTED = "Unsupported",
  AXELAR = "Axelar",
  LAYER_ZERO = "LayerZero",
}

export type Order = {
  fromAddress: string;
  toAddress: string;
  filler?: string;
  fillerFrom?: string;
  fillerTo?: string;
  fromToken: string;
  toToken: string;
  expiry: string;
  fromAmount: string;
  fillAmount: string;
  feeRate: string;
  fromChain: string;
  toChain: string;
  postHookHash: string;
};
