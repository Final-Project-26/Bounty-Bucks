import { ethers } from "hardhat";
// eslint-disable-next-line import/no-extraneous-dependencies
import { solidity } from "ethereum-waffle";
import chai from "chai";
// eslint-disable-next-line import/extensions,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/extensions
import { Greeter } from "../typechain/Greeter";

chai.use(solidity);
const { expect } = chai;

describe("Greeter", async () => {
  let greeter: Greeter;
  beforeEach(async () => {
    const greeterFactory = await ethers.getContractFactory("Greeter");
    greeter = (await greeterFactory.deploy("Hello, world!")) as Greeter;
    await greeter.deployed();
  });

  it("should return the greeting", async () => {
    expect(await greeter.greet()).to.equal("Hello, world!");
  });

  it("should return the new greeting once changed", async () => {
    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
