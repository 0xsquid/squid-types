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

export enum WrapperName {
  WRAPPED_NATIVE = "Native Wrapper",
  OVERNIGHT = "Overnight Finance",
  DEUS = "DEUS Finance",
  WSTETH = "Lido Wrapped stETH",
  WRAPPED_MAI = "QiDAO Wrapped MAI",
  WRAPPED_USDY = "Ondo Finance",
}

export enum WrapperIcon {
  WRAPPED_NATIVE = "https://raw.githubusercontent.com/0xsquid/assets/main/images/providers/weth.svg",
  OVERNIGHT = "https://raw.githubusercontent.com/0xsquid/assets/main/images/providers/overnight.svg",
  DEUS = "https://raw.githubusercontent.com/0xsquid/assets/main/images/providers/deus.svg",
  WSTETH = "https://raw.githubusercontent.com/0xsquid/assets/main/images/providers/lido.svg",
  WRAPPED_MAI = "https://raw.githubusercontent.com/0xsquid/assets/main/images/providers/qidao.svg",
  WRAPPED_USDY = "https://raw.githubusercontent.com/0xsquid/assets/main/images/providers/ondo.svg",
}

export interface Wrapper {
  chainId: string;
  address: string;
  coinAddresses: string[];
  coinNames: string[];
  type: WrapperType;
  name: WrapperName;
  properties?: Record<string, any>;
}
