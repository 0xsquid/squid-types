export interface FeeData {
  lastBaseFeePerGas?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  gasPrice: string;
  itsTransferFee?: string;
}

export interface AxelarFeeData {
  baseFee: string;
  expressFee: string;
  executeMultiplier: string;
  expressMultiplier: string;
  expressSupported: boolean;
}
