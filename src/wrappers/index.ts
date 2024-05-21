export enum WrapperType {
  WRAPPED_NATIVE = "WrappedNative",
  OVERNIGHT = "Overnight",
  DEUS = "Deus",
  WSTETH = "WstETH",
  WRAPPED_MAI = "WrappedMAI",
  WRAPPED_USDY = "WrappedUSDY",
}

export enum WrapperName {
  WRAPPED_NATIVE = "Native Wrapper",
  OVERNIGHT = "Overnight Finance",
  DEUS = "DEUS Finance",
  WSTETH = "Lido Wrapped stETH",
  WRAPPED_MAI = "QiDAO Wrapped MAI",
  WRAPPED_USDY = "Ondo Finance",
}

export enum WrapDirection {
  WRAP = "wrap",
  UNWRAP = "unwrap",
}

export interface Wrapper {
  chainId: string;
  address: string;
  coinAddresses: string[];
  coinNames: string[];
  type: WrapperType;
  name: WrapperName;
  logoURI: string;
  properties?: Record<string, any>;
}
