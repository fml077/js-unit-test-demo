const chai = require("chai");
const { expect } = chai;
const add = require("../src/add.js");

describe("mocha 生命周期钩子函数", () => {
  before(() => {
    console.log("before");
  });
  after(() => {
    console.log("before");
  });
  beforeEach(() => {
    console.log("before");
  });
  afterEach(() => {
    console.log("before");
  });
  it("1+1应该等于2", function () {
    expect(add(1 + 1)).to.be.equal(2);
  });
  it("1+1不应该等于3", function () {
    expect(add(1 + 1)).to.be.not.equal(3);
  });
});
