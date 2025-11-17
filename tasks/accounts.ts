import { task } from "hardhat/config";

task("accounts", "Prints the list of accounts with balances", async (_taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  const provider = hre.ethers.provider;

  console.log("Available accounts:");
  console.log("===================");

  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    const balance = await provider.getBalance(account.address);

    console.log(`${i}: ${account.address} (${hre.ethers.formatEther(balance)} ETH)`);
  }

  console.log("\nNote: These are development accounts with test ETH.");
  console.log("For production use, configure your own private keys securely.");
});

