export type SquidError = {
  errorType: string;
  message: string;
  reason: string;
  path?: string;
};

export type SquidErrorResponse = {
  errors: SquidError[];
};

export enum ErrorType {
  SCHEMA_VALIDATION_ERROR = "SCHEMA_VALIDATION_ERROR",
  PATH_FINDER_ERROR = "PATH_FINDER_ERROR",
  QUOTE_ERROR = "QUOTE_ERROR",
  ROUTE_ERROR = "ROUTE_ERROR",
  BAD_REQUEST = "BAD_REQUEST",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
  RATE_LIMIT = "RATE_LIMIT",
  MAINTENANCE = "MAINTENANCE",
  UNAUTHORIZED = "UNAUTHORIZED",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}
