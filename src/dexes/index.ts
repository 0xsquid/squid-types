export interface Dex {
  name: DexName;
  chainId: string;
  type: DexType;
  properties: Record<string, any>;
  logoURI: string;
}

// identifiers for dexes
export enum DexName {
  AGNI_V3 = "Agni V3",
  AERODROME = "Aerodrome",
  AERODROME_V3 = "Aerodrome V3",
  APESWAP = "Apeswap",
  APESWAP_V3 = "Apeswap V3",
  BALANCER_V2 = "Balancer V2",
  BASESWAP = "Baseswap",
  BASESWAP_V3 = "Baseswap V3",
  BEAMSWAP = "Beamswap",
  BEAMSWAP_V3 = "Beamswap V3",
  CAMELOT = "Camelot",
  CURVE_V2 = "Curve V2",
  ELLIPSIS = "Ellipsis",
  EQUILIBRE = "Equilibre",
  EQUALIZER = "Equalizer",
  FUSIONX_V2 = "FusionX V2",
  FUSIONX_V3 = "FusionX V3",
  GMX = "GMX",
  HORIZON = "Horizon",
  HORIZON_V3 = "Horizon V3",
  KYBERSWAP = "KyberSwap",
  KYBERSWAP_AGGREGATOR = "kyberswap Aggregator",
  KINETIX_V3 = "Kinetix V3",
  MENTO_V2 = "Mento V2",
  OPENOCEAN = "OpenOcean",
  OSMOSIS = "Osmosis",
  PANCAKESWAP = "Pancakeswap",
  PANCAKESWAP_V3 = "Pancakeswap V3",
  PANCAKESWAP_STABLE = "Pancakeswap Stable",
  PANGOLIN = "Pangolin",
  PLATYPUS = "Platypus",
  QUICKSWAP = "Quickswap",
  QUICKSWAP_V3 = "Quickswap V3",
  RAMSES = "Ramses",
  RAMSES_V3 = "Ramses V3",
  SPOOKYSWAP = "Spookyswap",
  STELLASWAP = "Stellaswap",
  STELLASWAP_V3 = "Stellaswap V3",
  STELLASWAP_SADDLE = "Stellaswap Saddle",
  SUSHISWAP = "Sushiswap",
  SUSHISWAP_V3 = "Sushiswap V3",
  SWAPBASED = "SwapBased",
  SYNTHSWAP_V2 = "SynthSwap V2",
  SYNTHSWAP_V3 = "SynthSwap V3",
  SKYDROME = "Skydrome",
  THENA = "Thena",
  THENA_V3 = "Thena V3",
  TRADERJOE = "TraderJoe",
  TRIDENT = "Trident",
  THRUSTER_V3 = "Thruster V3",
  UBESWAP = "Ubeswap",
  UBESWAP_V3 = "Ubeswap V3",
  UNISWAP_V2 = "Uniswap V2",
  UNISWAP_V3 = "Uniswap V3",
  WIGOSWAP = "WigoSwap",
  WOMBAT = "Wombat",
  VELODROME = "Velodrome",
  VELODROME_V2 = "Velodrome V2",
  VELODROME_V3 = "Velodrome V3",
  VELOCIMETER = "Velocimeter",
  ZYBERSWAP = "Zyberswap",
  ZYBERSWAP_V3 = "Zyberswap V3",
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
