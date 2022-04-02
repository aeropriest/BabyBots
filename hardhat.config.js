require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan")
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

//alchemyapi Key
const ALCHEMY_API_KEY = "g3Fa2-JTYxlNEj8dOk7m8YROrpo0YJov"
const WALLET_PRIVATE_KEY = "8e0869fc6df225eba071e1d72f9429b489813ce2e7f5efd15fbf02d8bb472428"
const DEPLOYED_CONTRACT_ADDRESS = "0xBC293808D1bAFA0c4C7d2320fd1fe52f25005BFa"
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    version: "0.8.8",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      accounts: {
        count: 4000
      }
    },
    rinkeby: {
      url:`https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${WALLET_PRIVATE_KEY}`]
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "TTND8HZP3APWAAHHBJA65KXVXG15YSJYAM"
  },
};