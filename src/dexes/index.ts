export interface Dex {
  name: DexName;
  chainId: string;
  type: DexType;
  properties: Record<string, any>;
}

// identifiers for dexes
export enum DexName {
  AGNI_V3 = "Agni V3",
  AERODROME = "Aerodrome",
  APESWAP = "ApeSwap V2",
  APESWAP_V3 = "ApeSwap V3",
  BALANCER_V2 = "Balancer V2",
  BASESWAP = "BaseSwap V2",
  BASESWAP_V3 = "BaseSwap V3",
  BEAMSWAP = "Beamswap V2",
  CAMELOT = "Camelot V3",
  CURVE_V2 = "Curve V2",
  ELLIPSIS = "Ellipsis",
  EQUILIBRE = "Equilibre",
  EQUALIZER = "Equalizer",
  FUSIONX_V2 = "FusionX V2",
  FUSIONX_V3 = "FusionX V3",
  GMX = "GMX",
  HORIZON = "Horizon",
  HORIZON_V3 = "Horizon V3",
  KYBERSWAP = "KyberSwap Elastic",
  KYBERSWAP_AGGREGATOR = "KybersSwap Aggregator",
  KINETIX_V3 = "Kinetix V3",
  MENTO_V2 = "Mento V2",
  OPENOCEAN = "OpenOcean",
  OSMOSIS = "Osmosis",
  PANCAKESWAP = "PancakeSwap",
  PANCAKESWAP_V3 = "PancakeSwap V3",
  PANCAKESWAP_STABLE = "PancakeSwap Stable",
  PANGOLIN = "Pangolin",
  PLATYPUS = "Platypus",
  QUICKSWAP = "Quickswap",
  QUICKSWAP_V3 = "Quickswap V3",
  RAMSES = "Ramses",
  SPOOKYSWAP = "SpookySwap",
  STELLASWAP = "StellaSwap",
  STELLASWAP_V3 = "Stellaswap V3",
  STELLASWAP_SADDLE = "StellaSwap Saddle",
  SUSHISWAP = "Sushi V2",
  SUSHISWAP_V3 = "Sushi V3",
  SWAPBASED = "SwapBased",
  SYNTHSWAP_V2 = "SynthSwap V2",
  SYNTHSWAP_V3 = "SynthSwap V3",
  SKYDROME = "Skydrome",
  THENA = "Thena",
  THENA_V3 = "Thena V3",
  TRADERJOE = "Trader Joe V1",
  TRIDENT = "Trident",
  UBESWAP = "UbeSwap V2",
  UBESWAP_V3 = "UbeSwap V3",
  UNISWAP_V2 = "Uniswap V2",
  UNISWAP_V3 = "Uniswap V3",
  WOMBAT = "Wombat",
  VELODROME = "Velodrome",
  VELODROME_V2 = "Velodrome V2",
  VELOCIMETER = "Velocimeter",
  ZYBERSWAP = "ZyberSwap V2",
  ZYBERSWAP_V3 = "ZyberSwap V3",
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
