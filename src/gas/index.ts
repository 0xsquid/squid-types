export interface FeeData {
  lastBaseFeePerGas?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  gasPrice: string;
  // Infura fees
  infuraGasPrice?: string;
  infuraMaxFeePerGas?: string;
  infuraMaxPriorityFeePerGas?: string;
  infuraEstimatedBaseFee?: string;
  // sui specific
  createOrderFee?: string;
  fillOrderFee?: string;
  itsTransferFee?: string;
  // xrpl specific
  baseReserve?: string;
  // btc specific
  feeRate?: string;
}

export interface AxelarFeeData {
  baseFee: string;
  expressFee: string;
  executeMultiplier: string;
  expressMultiplier: string;
  expressSupported: boolean;
}
