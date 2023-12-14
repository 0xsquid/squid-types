import { Token } from "../tokens";

export enum FeeType {
  AXELAR_FEE = "Axelar Fee",
  GAS_RECEIVER_FEE = "Gas Receiver Fee",
  EXPRESS_FEE = "Express Fee",
}

export enum GasCostType {
  EXECUTE_CALL = "executeCall",
}

export type FeeCost = {
  name: FeeType;
  description: string;
  percentage?: string;
  gasLimit?: string;
  gasMultiplier?: number;
  token: Token;
  amount: string;
  amountUsd: string;
};

export type GasCost = {
  type: GasCostType;
  token: Token;
  gasLimit: string;
  amount: string;
  amountUsd: string;
};
