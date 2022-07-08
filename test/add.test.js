const add = require("../src/add.js");
const expect = require("chai").expect;

describe("加法函数测试", function () {
  it("1+1应该等于2", function () {
    expect(add(1 + 1)).to.be.not.equal(2);
  });
  it("1+1不应该等于3", function () {
    expect(add(1 + 1)).to.be.not.equal(3);
  });
  it("123+123应该等于246", function () {
    expect(add('123','123')).to.be.equal('246')
  })
  it('999+1应该等于1000', function () {
    expect(add('999', '1')).to.be.equal('1000')
  })
});
