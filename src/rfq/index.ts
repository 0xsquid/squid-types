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

export type Order = {
  fromAddress: string;
  toAddress: string;
  filler: string;
  fromToken: string;
  toToken: string;
  expiry: string;
  fromAssetType: string;
  toAssetType: string;
  fromAmount: string;
  tokenId: string;
  fillAmount: string;
  fillTokenId: string;
  feeRate: string;
  fromChain: string;
  toChain: string;
  postHookHash: string;
};
