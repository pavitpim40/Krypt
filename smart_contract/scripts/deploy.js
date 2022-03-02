const main = async () => {
	// Hardhat always runs the compile task when running scripts with its command
	// line interface.
	//
	// If this script is run directly using `node` you may want to call compile
	// manually to make sure everything is compiled
	// await hre.run('compile');

	// We get the contract to deploy
	const Transactions = await hre.ethers.getContractFactory("Transactions");
	const transactions = await Transactions.deploy();

	await transactions.deployed();
	console.log("Greeter deployed to:", greeter.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async () => {
	try {
		await main();
		ProcessingInstruction.exit(0);
	} catch (error) {
		console.error(error);
		ProcessingInstruction.exit(1);
	}
};

runMain();