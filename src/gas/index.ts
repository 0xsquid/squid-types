export interface FeeData {
  lastBaseFeePerGas?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  gasPrice: string;
  // sui specific
  createOrderFee?: string;
  fillOrderFee?: string;
  itsTransferFee?: string;
  // xrpl specific
  baseReserve?: string;
}

export interface AxelarFeeData {
  baseFee: string;
  expressFee: string;
  executeMultiplier: string;
  expressMultiplier: string;
  expressSupported: boolean;
}
