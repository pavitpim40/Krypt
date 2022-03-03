require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		ropsten: {
			url: "https://eth-ropsten.alchemyapi.io/v2/I9F5Kw7r3sPLIX5s__GH2mKeUoYU8561",
			accounts: [
				"c70d1f205e324cad7e175869e1ac5bbd576a673452fe01caeb3ef5f8c95604ec",
			],
		},
	},
};
