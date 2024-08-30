import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-contract-sizer";

import { environment } from "./environment";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      viaIR: false,
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    merlin: {
      url: "https://testnet-rpc.merlinchain.io",
      accounts: [environment.walletPrivateAddress],
      chainId: 686868,
    },
    rootstock: {
      url: "https://public-node.testnet.rsk.co",
      accounts: [environment.walletPrivateAddress],
      chainId: 31,
    }
  }
};

export default config;
