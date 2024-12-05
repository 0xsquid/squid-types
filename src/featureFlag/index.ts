export enum FeatureFlagType {
  MaintenanceMode = "maintenance",
  Bitcoin = "bitcoin",
  Solana = "solana",
  Chainflip = "chainflip",
  Coral = "coral",
  Chainflip_Multihop = "chainflip_multihop",
}

export interface FeatureFlag {
  feature: FeatureFlagType;
  allowedIntegrators: string[];
  enabled: boolean;
}
