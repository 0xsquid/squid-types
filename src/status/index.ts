export declare type BlockTag = string | number;
export interface GMPError {
  txHash: string;
  chain: string;
  message: string;
}

export type StatusRequest = {
  transactionId: string;
  routeType: string;
  destinationAddress?: string;
  toChain?: string;
  fromBlock?: BlockTag;
  toBlock?: BlockTag;
};

type TransactionStatus = {
  transactionId: string;
  blockNumber: string;
  callEventStatus: string;
  callEventLog: Array<any>;
  chainData?: any;
  transactionUrl?: string;
  destinationAddress?: string;
};

export type YupError = {
  path: string;
  message: string;
};

export type ApiBasicResponse = {
  error?: string | TypeError[] | YupError[] | GMPError;
  errorType?: string;
};

export enum SquidTransactionStatus {
  SUCCESS = "success",
  NEEDS_GAS = "needs_gas",
  ONGOING = "ongoing",
  PARTIAL_SUCCESS = "partial_success",
  NOT_FOUND = "not_found",
  FAILED_DESTINATION = "failed_on_destination",
}

export type StatusResponse = ApiBasicResponse & {
  id: string;
  status: string;
  gasStatus: string;
  isGMPTransaction?: boolean;
  axelarTransactionUrl: string;
  fromChain?: TransactionStatus;
  toChain?: TransactionStatus;
  timeSpent?: Record<string, number> | {};
  squidTransactionStatus?: SquidTransactionStatus;
  routeStatus?: Array<any>;
};

export type RouteStatus = {
  chainId: string | number;
  txHash: string;
  status: RouteActionStatus;
  action: AxelarRouteAction;
};

export enum AxelarRouteAction {
  CALL = "call",
  EXECUTED = "executed",
  IBC_TRANSFER = "ibc_transfer",
  SEND = "send",
  VOTE = "vote",
  IBC_SEND = "ibc_send",
  GAS_PAID = "gas_paid",
  APPROVED = "approved",
}

export enum RouteActionStatus {
  SUCCESS = "success",
  FAILURE = "failure",
  NOT_FOUND = "not_found",
  UNKNOWN = "unknown",
  AWAITING = "awaiting",
}

export enum CCTPStatus {
  ERROR = "error",
  COMPLETE = "complete",
  PENDING = "pending",
}

export enum SendTokenStatus {
  ASSET_SENT = "asset_sent",
  EXECUTED = "executed",
}
