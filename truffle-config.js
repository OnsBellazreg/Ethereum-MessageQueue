const path = require("path");
require("dotenv").config();

var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "90c8b1a2f05f49a78dacd27f64644ac2";
var mnemonic =
  "snake marine topic grunt village intact group soon giggle reform proud utility";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    ropsten: {
      provider: new HDWalletProvider(
        mnemonic,
        "https://ropsten.infura.io/" + infura_apikey
      ),
      network_id: "*",
      gas: 4500000
      //  from: "0x2D7E41F0621De0c0a79C7fB6a20E535F109CDA48".toLowerCase()
    }
  }
};
