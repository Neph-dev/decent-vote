// const { ethers } = require("hardhat");
const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Vote", function () {
    describe("Deployment", function () {
        it("deploys successfully", async function () {
            const Vote = await ethers.getContractFactory("Vote");
            const vote = await Vote.deploy();
            expect(await vote.deployed()).to.equal(true);
        });
    });
});
