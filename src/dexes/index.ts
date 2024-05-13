export interface Dex {
  name: DexName;
  chainId: string;
  type: DexType;
  properties: Record<string, any>;
}

// identifiers for dexes
export enum DexName {
  AGNI_V3 = "Agni-v3",
  AERODROME = "Aerodrome",
  AERODROME_V3 = "Aerodrome-v3",
  APESWAP = "Apeswap",
  APESWAP_V3 = "Apeswap-v3",
  BALANCER_V2 = "Balancer-v2",
  BASESWAP = "Baseswap",
  BASESWAP_V3 = "Baseswap-v3",
  BEAMSWAP = "Beamswap",
  BEAMSWAP_V3 = "Beamswap-v3",
  CAMELOT = "Camelot",
  CURVE_V2 = "Curve-v2",
  ELLIPSIS = "Ellipsis",
  EQUILIBRE = "Equilibre",
  EQUALIZER = "Equalizer",
  FUSIONX_V2 = "FusionX-v2",
  FUSIONX_V3 = "FusionX-v3",
  GMX = "GMX",
  HORIZON = "Horizon",
  HORIZON_V3 = "Horizon-v3",
  KYBERSWAP = "KyberSwap",
  KYBERSWAP_AGGREGATOR = "kyberswap-aggregator",
  KINETIX_V3 = "Kinetix-v3",
  MENTO_V2 = "Mento-v2",
  OPENOCEAN = "OpenOcean",
  OSMOSIS = "Osmosis",
  PANCAKESWAP = "Pancakeswap",
  PANCAKESWAP_V3 = "Pancakeswap-v3",
  PANCAKESWAP_STABLE = "Pancakeswap-stable",
  PANGOLIN = "Pangolin",
  PLATYPUS = "Platypus",
  QUICKSWAP = "Quickswap",
  QUICKSWAP_V3 = "Quickswap-v3",
  RAMSES = "Ramses",
  SPOOKYSWAP = "Spookyswap",
  STELLASWAP = "Stellaswap",
  STELLASWAP_V3 = "Stellaswap-v3",
  STELLASWAP_SADDLE = "Stellaswap-saddle",
  SUSHISWAP = "Sushiswap",
  SUSHISWAP_V3 = "Sushiswap-v3",
  SWAPBASED = "SwapBased",
  SYNTHSWAP_V2 = "SynthSwap-v2",
  SYNTHSWAP_V3 = "SynthSwap-v3",
  SKYDROME = "Skydrome",
  THENA = "Thena",
  THENA_V3 = "Thena-v3",
  TRADERJOE = "TraderJoe",
  TRIDENT = "Trident",
  UBESWAP = "Ubeswap",
  UBESWAP_V3 = "Ubeswap-v3",
  UNISWAP_V2 = "Uniswap-v2",
  UNISWAP_V3 = "Uniswap-v3",
  WIGOSWAP = "WigoSwap",
  WOMBAT = "Wombat",
  VELODROME = "Velodrome",
  VELODROME_V2 = "Velodrome-v2",
  VELODROME_V3 = "Velodrome-v3",
  VELOCIMETER = "Velocimeter",
  ZYBERSWAP = "Zyberswap",
  ZYBERSWAP_V3 = "Zyberswap-v3",
}

// identifiers dex adapters
export enum DexType {
  // EVM
  ALGEBRA = "algebra",
  BALANCER_V2 = "balancer-v2",
  CURVE = "curve",
  GMX = "gmx",
  KYBERSWAP_ELASTIC = "kyberswap-elastic",
  PLATYPUS = "platypus",
  PANCAKESWAP_STABLE = "pancakeswap-stable",
  SADDLE = "saddle",
  SLIPSTREAM = "slipstream",
  SOLIDLY = "solidly",
  TRIDENT = "trident",
  WOMBAT = "wombat",
  UNISWAP_V2 = "uniswap-v2",
  UNISWAP_V3 = "uniswap-v3",
  MENTO_V2 = "mento-v2",
  // COSMOS
  OSMOSIS = "osmosis",

  // ONCE WE START ADDING DEXES WE WILL BE MOVING THEM ABOVE
  /*
  DUALITY = "Duality",
  */
}
