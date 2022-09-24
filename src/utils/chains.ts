import { Chain as ChainInterface } from "@usedapp/core";

export const Chain: ChainInterface = {
  chainId: 1313161555,
  chainName: "Aurora",
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: "0x36301982d6B3544C88Cf19f5BfF0556876f17e48",
  getExplorerAddressLink: (address: string) =>
    `https://testnet.aurorascan.dev/#/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) =>
    `https://testnet.aurorascan.dev/#/tx/${transactionHash}`,
  rpcUrl: "https://testnet.aurora.dev",
  blockExplorerUrl: "https://testnet.aurorascan.dev/",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
};
