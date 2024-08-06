import { BridgeConfig } from "bridges";

export enum ChainType {
  EVM = "evm",
  COSMOS = "cosmos",
  BTC = "bitcoin",
}

export type BaseChain = {
  chainId: string;
  chainType: ChainType;
  axelarChainName: ChainName;
  networkIdentifier: NetworkIdentifier;
  networkName: string;
  rpc: string;
  internalRpc: string;
  chainIconURI: string;
  blockExplorerUrls: string[];
  enableBoostByDefault: boolean;
  swapAmountForGas: string;
  sameChainSwapsSupported: boolean;
  interchainService?: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
    icon: string;
  };
  squidContracts: {
    defaultCrosschainToken: string;
    squidRouter?: string;
    squidMulticall?: string;
    squidFeeCollector?: string;
  };
  bridges: {
    [key: string]: BridgeConfig;
  };
  compliance?: {
    trmIdentifier: string;
  };
  boostSupported?: boolean;
};

export type EvmChain = BaseChain & {
  chainNativeContracts: {
    wrappedNativeToken: string;
    ensRegistry: string;
    multicall: string;
    usdcToken: string;
  };
  gas?: {
    lastBaseFeePerGas: string;
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
    gasPrice: string;
  };
};

export type CosmosChain = BaseChain & {
  rest: string;
  rpcList: string[];
  stakeCurrency: CosmosCurrency;
  walletUrl?: string;
  walletUrlForStaking?: string;
  bip44: BIP44;
  alternativeBIP44s?: BIP44[];
  bech32Config: Bech32Config;
  currencies: CosmosCurrency[];
  feeCurrencies: CosmosCurrency[];
  coinType?: number;
  features?: string[];
  gasPriceStep?: CosmosGasType;
  chainToAxelarChannelId: string;
};

export type CosmosCurrency = {
  coinDenom: string;
  coinMinimalDenom: string;
  coinDecimals: number;
  coingeckoId?: string;
  gasPriceStep?: CosmosGasType;
};

export type BIP44 = {
  coinType: number;
};

export type Bech32Config = {
  bech32PrefixAccAddr: string;
  bech32PrefixAccPub: string;
  bech32PrefixValAddr: string;
  bech32PrefixValPub: string;
  bech32PrefixConsAddr: string;
  bech32PrefixConsPub: string;
};

export type CosmosGasType = {
  low: number;
  average: number;
  high: number;
};

export type ChainData = BaseChain | EvmChain | CosmosChain;

export enum ChainName {
  ARBITRUM = "Arbitrum",
  ARBITRUM2 = "arbitrum", //testnet
  AURORA = "aurora",
  AVALANCHE = "Avalanche",
  BASE = "base",
  BINANCE = "binance",
  CELO = "celo",
  CENTRIFUGE = "centrifuge",
  ETHEREUM = "Ethereum",
  ETHEREUM2 = "Ethereum-2", //testnet
  FANTOM = "Fantom",
  FILECOIN = "filecoin",
  FILECOIN2 = "filecoin-2", //testnet
  IMMUTABLE_ZKEVM = "immutable",
  KAVA = "kava",
  MANTLE = "mantle",
  MOONBEAM = "Moonbeam",
  OPTIMISM = "optimism",
  POLYGON_ZKEVM = "polygon-zkevm",
  POLYGON = "Polygon",
  LINEA = "linea",
  SCROLL = "scroll",
  BLAST = "blast",
  FRAXTAL = "fraxtal",

  // Cosmos
  AGORIC = "agoric",
  ASSETMANTLE = "assetmantle",
  AXELARNET = "axelarnet",
  CARBON = "carbon",
  COMDEX = "comdex",
  COSMOS = "cosmoshub",
  CRESCENT = "crescent",
  EVMOS = "evmos",
  FETCH = "fetch",
  INJECTIVE = "injective",
  JUNO = "juno",
  KI = "ki",
  KUJIRA = "kujira",
  NEUTRON = "neutron",
  NOBLE = "noble",
  OSMOSIS = "osmosis",
  OSMOSIS7 = "osmosis-7", //testnet
  REGEN = "regen",
  SEI = "sei",
  SECRETSNIP = "secret-snip",
  STARGAZE = "stargaze",
  STRIDE = "stride",
  TERRA2 = "terra-2",
  UMEE = "umee",
  DYDX = "dydx",
  ACRECHAIN = "acre",
  ARCHWAY = "archway",
  BITCANNA = "bitcanna",
  BITSONG = "bitsong",
  CHEQD = "cheqd",
  CELESTIA = "celestia",
  COREUM = "coreum",
  DECENTR = "decentr",
  DESMOS = "desmos",
  DIG = "dig",
  DYMENSION = "dymension",
  IRISNET = "irisnet",
  IXO = "impacthub",
  JACKAL = "jackal",
  LUM = "lumnetwork",
  LIKECOIN = "likecoin",
  KAVA_IBC = "kava-ibc",
  NOLUS = "nolus",
  XPLA = "xpla", // disabled on V1
  AKASH = "akash",
  CHIHUAHUA = "chihuahua",
  CRONOS = "cronos",
  GRAVITYBRIDGE = "gravitybridge",
  MARS = "mars",
  MIGALOO = "migaloo",
  PERSISTENCE = "persistence",
  OMNIFLIXHUB = "omniflixhub",
  QUICKSILVER = "quicksilver",
  SOMMELIER = "sommelier",
  TERRA = "terra",
  TERITORI = "teritori",
  SENTINEL = "sentinel",
  HUMANS = "humans",
  CHAIN4ENERGY = "c4e",
  SAGA = "saga",
  NIBIRU = "nibiru",

  // BTC
  BITCOIN = "bitcoin",
}

export enum NetworkIdentifier {
  // EVM
  ETHEREUM = "ethereum",
  AVALANCHE = "avalanche",
  ARBITRUM = "arbitrum",
  AURORA = "aurora",
  BASE = "base",
  BINANCE = "binance",
  CELO = "celo",
  FANTOM = "fantom",
  FILECOIN = "filecoin",
  IMMUTABLE_ZKEVM = "immutable",
  KAVA = "kava",
  MANTLE = "mantle",
  MOONBEAM = "moonbeam",
  OPTIMISM = "optimism",
  POLYGON = "polygon",
  LINEA = "linea",
  SCROLL = "scroll",
  BLAST = "blast",
  FRAXTAL = "fraxtal",

  // COSMOS
  AGORIC = "agoric",
  ASSETMANTLE = "assetmantle",
  AXELAR = "axelar",
  AXELARNET = "axelarnet",
  CARBON = "carbon",
  COMDEX = "comdex",
  COSMOS = "cosmoshub",
  CRESCENT = "crescent",
  EVMOS = "evmos",
  FETCH = "fetch",
  INJECTIVE = "injective",
  JUNO = "juno",
  KI = "ki",
  KUJIRA = "kujira",
  NOBLE = "noble",
  NEUTRON = "neutron",
  OSMOSIS = "osmosis",
  REGEN = "regen",
  SEI = "sei",
  SECRETSNIP = "secret-snip",
  STARGAZE = "stargaze",
  STRIDE = "stride",
  TERRA2 = "terra-2",
  UMEE = "umee",
  DYDX = "dydx",
  ACRECHAIN = "acre",
  ARCHWAY = "archway",
  BITCANNA = "bitcanna",
  BITSONG = "bitsong",
  CHEQD = "cheqd",
  CELESTIA = "celestia",
  COREUM = "coreum",
  DECENTR = "decentr",
  DESMOS = "desmos",
  DYMENSION = "dymension",
  IRISNET = "irisnet",
  IXO = "impacthub",
  JACKAL = "jackal",
  LUM = "lumnetwork",
  LIKECOIN = "likecoin",
  KAVA_IBC = "kava-ibc",
  NOLUS = "nolus",
  XPLA = "xpla", // disabled on V1
  AKASH = "akash",
  CHIHUAHUA = "chihuahua",
  CRONOS = "cronos",
  GRAVITYBRIDGE = "gravitybridge",
  MARS = "mars",
  MIGALOO = "migaloo",
  PERSISTENCE = "persistence",
  OMNIFLIXHUB = "omniflixhub",
  QUICKSILVER = "quicksilver",
  SOMMELIER = "sommelier",
  TERRA = "terra",
  TERITORI = "teritori",
  SENTINEL = "sentinel",
  HUMANS = "humans",
  CHAIN4ENERGY = "c4e",
  SAGA = "saga",
  NIBIRU = "nibiru",

  // BTC
  BITCOIN = "bitcoin",
}

export type ChainIBCInfo = {
  chain_id: string;
  client_id: string;
  connection_id: string;
};

export type Channel = {
  chain_1: {
    channel_id: string;
    port_id: string;
  };
  chain_2: {
    channel_id: string;
    port_id: string;
  };
  ordering: string;
  version: string;
  tags: {
    status: string;
    preferred?: boolean;
    dex?: string;
  };
};

export type IbcData = {
  chain_1: ChainIBCInfo;
  chain_2: ChainIBCInfo;
  channels: Channel[];
};

export enum CosmosChainFeatures {
  PACKET_FORWARD_MIDDLEWARE = "packet-forward-middleware",
  LEGACY_IBC = "legacy-ibc",
  COSMWASM = "cosmwasm",
}
