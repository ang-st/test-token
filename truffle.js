require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 4500000,
      network_id: "1337"
    },
    ropsten: {
        provider: new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/" + process.env.INFURA_API_KEY,0),
        network_id: 3,
        gas: 4500000
    },
  }
};
