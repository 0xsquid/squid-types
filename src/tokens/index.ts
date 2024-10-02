import { ChainType } from "../index";

export interface Token {
  type: ChainType;
  chainId: string;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI?: string;
  coingeckoId?: string;
  interchainTokenId?: string;
  volatility: Volatility;
  usdPrice?: number;
  axelarNetworkSymbol?: string;
  subGraphOnly?: boolean;
  subGraphIds?: string[];
  feeOnTransfer?: boolean;
  isLpToken?: boolean;
  disabled?: boolean;
  originalAddress?: string;
}

export interface CosmosToken extends Token {
  denom: string;
  base_denom: string;
  base_type: string;
  dp_denom: string;
  origin_chain: string;
  decimal: number;
  description: string;
  image: string;
}

export interface EvmToken extends Token {
  address: string;
}

export enum Volatility {
  SUPER_STABLE,
  STABLE,
  HIGH_CAP,
  VOLATILE,
}
