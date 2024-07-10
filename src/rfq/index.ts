export interface Spoke {
  chainId: string;
  address: string;
  startBlock: string;
  subgraphUrl: string;
}

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
