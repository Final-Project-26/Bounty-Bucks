// const { ethers } = require("ethers");
import "@nomiclabs/hardhat-etherscan";
import "hardhat-typechain";
import "hardhat-deploy";
import "solidity-coverage";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@nomicfoundation/hardhat-chai-matchers";
import { config as dotEnvConfig } from "dotenv";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

dotEnvConfig();


module.exports = {
  solidity: "0.8.7",
  networks: {
    goerli: {
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
