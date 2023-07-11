const hre = require("hardhat")

async function main() {
  const Vote = await hre.ethers.getContractFactory("Vote");
  const vote = await Vote.deploy();

  await vote.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});