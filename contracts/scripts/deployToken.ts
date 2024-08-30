import { ethers, run } from "hardhat";

async function main() {
  const MunhnaFactory = await ethers.getContractFactory("MunhnaFactory");
  const fManager = await ethers.getContractFactory("BondingMunhna");
  const fMunhna = await ethers.getContractFactory("Munhna_ERC20");

  const factory = MunhnaFactory.attach(
    // Factory contract address from testnet
    "0xAe467A4CfCe5310C50E2b2A1ad30768A02155fAC"
  );

  const tx = await (
    await factory.deployMunhna(
      "Merlin",
      "Merlin",
      "MUN.com",
      ethers.utils.parseEther("1000000"),
      1,
      100,
      1,
      "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
      ethers.utils.solidityKeccak256(
        ["uint256"],
        [Math.round(Math.random() * 10000)]
      )
    )
  ).wait();

  console.log("Token deployed");
  console.log("tx hash: ", tx.transactionHash);

  const tokenList = await factory.getTokenPairList();
  const tokenManager = tokenList[tokenList.length - 1].tokenManager;
  const tokenAAddress = tokenList[tokenList.length - 1].tokenA;
  const tokenBAddress = tokenList[tokenList.length - 1].tokenB;

  const tokenA = fMunhna.attach(tokenAAddress);
  const manager = fManager.attach(tokenManager);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
