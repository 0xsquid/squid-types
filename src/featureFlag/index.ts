export enum FeatureFlagType {
  MaintenanceMode = "maintenance",
  Bitcoin = "bitcoin",
  Solana = "solana",
  Chainflip = "chainflip",
  Coral = "coral",
  ChainflipMultihop = "chainflipMultihop",
  SagaRoutes = "sagaRoutes",
  BypassCompliance = "bypassCompliance",
}

export interface FeatureFlag {
  feature: FeatureFlagType;
  allowedIntegrators: string[];
  enabled: boolean;
}
