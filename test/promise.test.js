const expect = require("chai").expect;

describe("异步测试", () => {
  it("异步请求返回一个对象", () => {
    return fetch("https://api.github.com")
      .then((res) => {
        console.log('res11:', res.json())
        return res.json();
      })
      .then((json) => {
        expect(json).to.be.an("object");
      });
  });
});
