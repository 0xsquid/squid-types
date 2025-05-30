import { Token } from "../tokens";

export enum FeeType {
  AXELAR_FEE = "Axelar fee",
  GAS_RECEIVER_FEE = "Gas receiver fee",
  BOOST_FEE = "Boost fee",
  INTEGRATOR_FEE = "Integrator fee",
  CHAINFLIP_FEE = "Chainflip fee",
  EXECUTION_FEE = "Execution fee",
  SETTLEMENT_FEE = "Settlement fee",
  SERVICE_FEE = "Service fee",
}

export enum GasCostType {
  EXECUTE_CALL = "executeCall",
  JITO_TIP_FEE = "jitoTipFee",
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
  logoURI?: string;
  data?: Record<string, any>;
};

export type GasCost = {
  type: GasCostType;
  token: Token;
  gasLimit: string;
  amount: string;
  amountUsd: string;
};
