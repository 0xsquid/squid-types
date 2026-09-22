export enum BridgeType {
  AXELAR_GMP = "axelar-gmp",
  AXELAR_ITS = "axelar-its",
  CCTP = "cctp",
  NOBLE_CCTP = "noble-cctp",
  CCTP_V2 = "cctp-v2",
  IBC = "ibc",
  CHAINFLIP = "chainflip",
  RFQ = "rfq",
  ITB = "immutable-token-bridge",
  CORAL_V2 = "coral-v2",
  RELAY = "relay",
}

export enum BridgeProvider {
  AXELAR = "Axelar",
  CCTP = "CCTP",
  NOBLE_CCTP = "Noble CCTP",
  IBC = "IBC",
  PFM = "IBC Packet forward middleware",
  CHAINFLIP = "Chainflip",
  RFQ = "Squid Intents",
  IMMUTABLE = "Immutable",
  RELAY = "Relay",
}

export type BridgeConfig = Record<string, string>;
