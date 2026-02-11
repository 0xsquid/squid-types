export enum FeatureFlagType {
  MaintenanceMode = "maintenance",
  Bitcoin = "bitcoin",
  BitcoinCoralV2 = "bitcoinCoralV2",
  Solana = "solana",
  SolanaCoralV2 = "solanaCoralV2",
  Chainflip = "chainflip",
  Coral = "coral",
  CoralOnly = "coralOnly",
  CoralV2 = "coralV2",
  CoralV2PreHooks = "coralV2PreHooks",
  ChainflipMultihop = "chainflipMultihop",
  SagaRoutes = "sagaRoutes",
  BypassCompliance = "bypassCompliance",
  Ripple = "ripple",
  RippleCoralV2 = "rippleCoralV2",
  Megabridge = "megabridge",
  Stellar = "stellar",
  StellarCoralV2 = "stellarCoralV2",
  Mantra = "mantra",
  HederaPilot = "hederaPilot",
  Citrea = "citrea",
  HederaCoralV2 = "hederaCoralV2",
  AddressQuoteRateLimit = "addressQuoteRateLimit",
  Hyperliquid = "hyperliquid",
  HyperliquidCoralV2 = "hyperliquidCoralV2",
}

export interface FeatureFlag {
  feature: FeatureFlagType;
  allowedIntegrators: string[];
  enabled: boolean;
}
