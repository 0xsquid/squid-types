export interface ChainflipDepositAddressResponse {
  depositAddress: string;
  amount: string;
  chainflipStatusTrackingId: string;
}

export type DepositAddressResponse = ChainflipDepositAddressResponse;