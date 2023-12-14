export type SquidError = {
  errorType: string;
  message: string;
  reason: string;
  path?: string;
};

export type SquidErrorResponse = {
  errors: SquidError[];
};
