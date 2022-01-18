
//https://eth-ropsten.alchemyapi.io/v2/rH3TTJR_T32a6goDkinvJRoQQ-vNKOMV
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/rH3TTJR_T32a6goDkinvJRoQQ-vNKOMV",
      accounts: [
        "774b7dac43bef17fc89b5682b8f27787fbe68b71a993af2edaaa229b64c179be",
      ],
    },
  },
};


