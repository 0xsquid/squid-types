import { Token } from "../tokens";

export enum FeeType {
  AXELAR_FEE = "Axelar fee",
  GAS_RECEIVER_FEE = "Gas receiver fee",
  BOOST_FEE = "Boost fee",
  INTEGRATOR_FEE = "Integrator fee",
  CHAINFLIP_FEE = "Chainflip fee",
  EXECUTION_FEE = "Execution fee",
  SETTLEMENT_FEE = "Settlement fee",
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
