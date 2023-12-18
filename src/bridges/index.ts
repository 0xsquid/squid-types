export enum BridgeType {
  AXELAR_GMP = "gmp",
  AXELAR_ITS = "its",
  CCTP = "cctp",
  NOBLE_CCTP = "noble-cctp",
  IBC = "ibc",
}

export enum BridgeProvider {
  AXELAR = "axelar",
  CCTP = "cctp",
  NOBLE_CCTP = "noble-cctp",
  IBC = "ibc",
  PFM = "pfm",
}

export type BridgeConfig = Record<string, string>;
