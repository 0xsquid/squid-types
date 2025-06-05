export interface ChainflipDepositAddressResponse {
  depositAddress: string;
  amount: string;
  chainflipStatusTrackingId: string;
  data?: string;
}

export type DepositAddressResponse = ChainflipDepositAddressResponse;
