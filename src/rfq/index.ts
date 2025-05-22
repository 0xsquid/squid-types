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

export enum LayerZeroEndpoint {
  DEFAULT = "0",
  ETHEREUM = "30101",
  OPTIMISM = "30111",
  BINANCE = "30102",
  GNOSIS = "30145",
  POLYGON = "30109",
  SONIC = "30332",
  FANTOM = "30112",
  HYPER_EVM = "30367",
  SONEIUM = "30340",
  PEAQ = "30302",
  BASE = "30184",
  ARBITRUM = "30110",
  CELO = "30125",
  AVALANCHE = "30106",
  LINEA = "30183",
  BERACHAIN = "30362",
  BLAST = "30243",
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
