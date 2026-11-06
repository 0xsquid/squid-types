export enum FeeLayer {
  SQUID = "squid",
  ORG = "org",
  INTEGRATOR = "integrator",
}

export enum FeeComponent {
  GENERAL = "GENERAL",
  CHAIN = "CHAIN",
  TOKEN = "TOKEN",
  TIER = "TIER",
  PARTNER = "PARTNER",
  SPLIT = "SPLIT",
}

export enum FeeSource {
  CONFIG = "config",
  REQUEST = "request",
}

export enum RequestFeeLevel {
  ORG = "org",
  INTEGRATOR = "integrator",
}

export type FeeBeneficiary = {
  name: string;
  wallet?: { evmAddress: string };
  bps: number;
};

export type FeeBeneficiaryRow = {
  beneficiaryId: string;
  bps: number;
};

export type RequestFee = {
  level: RequestFeeLevel | `${RequestFeeLevel}`;
  flatUsd?: number;
  bps?: number;
  beneficiaries?: FeeBeneficiaryRow[];
};

export type FeeLine = {
  layer: FeeLayer;
  component: FeeComponent;
  source: FeeSource;
  beneficiaryOrgId: string | null;
  flatUsd?: number;
  bps?: number;
  splitBps?: number | null;
  amount: string;
  amountUsd: string;
  beneficiaryId?: string;
  beneficiary?: string;
};
