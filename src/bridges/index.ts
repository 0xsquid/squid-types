export enum BridgeType {
  AXELAR_GMP = "axelar-gmp",
  AXELAR_ITS = "axelar-its",
  CCTP = "cctp",
  NOBLE_CCTP = "noble-cctp",
  IBC = "ibc",
  CHAINFLIP = "chainflip",
  RFQ = "rfq",
}

export enum BridgeProvider {
  AXELAR = "Axelar",
  CCTP = "CCTP",
  NOBLE_CCTP = "Noble CCTP",
  IBC = "IBC",
  PFM = "IBC Packet forward middleware",
  CHAINFLIP = "Chainflip",
  RFQ = "RFQ",
}

export type BridgeConfig = Record<string, string>;
