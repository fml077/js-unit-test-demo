const chai = require("chai");
const { expect } = chai;

describe("异步调用测试", () => {
  it("应该在5秒后结束", (done) => {
    let x = true;
    const t = () => {
      x = false;
      expect(x).to.be.not.ok;
      done();
    };
    setTimeout(t, 5000);
  });
});
