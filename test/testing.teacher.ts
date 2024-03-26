import { assert } from "chai";
import { ethers } from "hardhat";
import { SchoolManagement } from "../typechain-types";

describe("School Management Basic Test", function() {
  let factory: any;
  let schoolManagement: SchoolManagement;
  
  beforeEach(async function(){
    factory = await ethers.getContractFactory("SchoolManagement");
    schoolManagement = await factory.deploy();
  });

  it("deploy success", async function(){
    console.log("Address: ", await schoolManagement.getAddress());
    assert.isOk(await schoolManagement.getAddress());
  });

  it("Register teacher", async function(){
    const txn = await schoolManagement.register("Yusuf", 1);

    const allTeachers = await schoolManagement.getAllTeachers();
    assert.equal(allTeachers[0][2], "Yusuf");
  });
});