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

export enum BridgeName {
  AXELAR = "Axelar",
  CCTP = "CCTP",
  NOBLE_CCTP = "CCTP (Noble)",
  IBC = "IBC",
  PFM = "IBC forward",
}

export enum BridgeIcon {
  AXELAR = "https://raw.githubusercontent.com/0xsquid/assets/main/images/providers/axelar.svg",
  CCTP = "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/circle.svg",
  NOBLE_CCTP = "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/noble.svg",
  IBC = "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ibc.svg",
  PFM = "https://raw.githubusercontent.com/0xsquid/assets/main/images/tokens/ibc.svg",
}

export type BridgeConfig = Record<string, string>;
