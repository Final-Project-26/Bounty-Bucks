require("hardhat");
// const { ethers } = require("ethers");


async function main() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const BountyBucksEscrow = await ethers.getContractFactory("BountyBucksEscrow");
    const bountybucksescrow = await BountyBucksEscrow.deploy();

    console.log("BountyBucksEscrow deployed:", bountybucksescrow.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
