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

export type RequestFee = {
  level: RequestFeeLevel | `${RequestFeeLevel}`;
  flatUsd?: number;
  bps?: number;
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
};
