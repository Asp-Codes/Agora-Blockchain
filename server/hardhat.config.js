// /** @type import('hardhat/config').HardhatUserConfig */
// require("dotenv").config();

// require("@nomiclabs/hardhat-waffle");

// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     goerli: {
//       network_id: 5,
//       url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
//       accounts: [process.env.GOERLI_PRIVATE_KEY]
//     }
//   }, solidity: {
//     version: "0.8.9",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };

/** @type import('hardhat/config').HardhatUserConfig */
//require("hardhat-contract-sizer");
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: '0.8.10',
  defaultNetwork:"mumbai",
  networks:{
    hardhat:{
      allowUnlimitedContractSize:true
    },
    mumbai:{
      allowUnlimitedContractSize:true,
      url:"https://rpc-mumbai.maticvigil.com/",
      accounts:["c1fb8fb8d4301e38669706d60e1aecc2eae798857d3eb63e9ff189f56801af90"],  //private key place here
    }
  },  
  mocha: {
    timeout: 100000000
  },
  settings: {
    optimizer: {
      enabled: true
    }
  },
  contractSizer:{
    runOnCompile:true
  }
};

