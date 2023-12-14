export enum WrapperType {
  WRAPPED_NATIVE = "WrappedNative",
  OVERNIGHT = "Overnight",
  DEUS = "Deus",
  WSTETH = "WstETH",
  WRAPPED_MAI = "WrappedMAI",
  WRAPPED_USDY = "WrappedUSDY",
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
  properties?: Record<string, any>;
}
