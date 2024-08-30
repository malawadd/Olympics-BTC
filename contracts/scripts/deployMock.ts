import { ethers } from "hardhat";

async function main() {
  const tokenName = "Munhana Token";
  const tokenSymbol = "MCK";
  const tokenDecimals = 18;

  // Get the contract factory
  const MockToken = await ethers.getContractFactory("MockToken");

  // Deploy the contract with the constructor arguments
  const mockTokenDeployed = await MockToken.deploy(tokenName, tokenSymbol, tokenDecimals);

  // Wait for the contract to be deployed
  await mockTokenDeployed.deployed();

  console.log("MockToken deployed to:", mockTokenDeployed.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
