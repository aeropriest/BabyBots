/*
npx hardhat compile
npx hardhat run scripts/deploy.js --network rinkeby
npx hardhat verify --constructor-args arguments.js --network rinkeby 0x61539e3DCB9333e2e4BC9dEFFd106e4C3A893288
*/
async function main() {
    const BabyBots = await hre.ethers.getContractFactory("BabyBots");
    const babyBots = await BabyBots.deploy("BabyBots", "BABYBOTS", "0x2D23AB17F03b8FF8450FDC05EAF98580bF1d7fb5");
  
    await babyBots.deployed();
  
    console.log("BabyBots deployed to:", babyBots.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });