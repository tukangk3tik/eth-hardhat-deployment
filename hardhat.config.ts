import { HardhatUserConfig } from "hardhat/types";
import '@nomicfoundation/hardhat-toolbox';

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    localnet: {
      url: "http://127.0.0.1:8545/"
    }
  },
  defaultNetwork: 'localnet'
};

export default config;