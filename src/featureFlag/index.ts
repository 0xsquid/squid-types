export enum FeatureFlagType {
  MaintenanceMode = "maintenance",
  Bitcoin = "bitcoin",
  Solana = "solana",
  Chainflip = "chainflip",
  Coral = "coral",
  ChainflipMultihop = "chainflipMultihop",
}

export interface FeatureFlag {
  feature: FeatureFlagType;
  allowedIntegrators: string[];
  enabled: boolean;
}
