const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { expect, request } = chai;

describe("接口测试", () => {
  it("get 请求测试", (done) => {
    request("https://qq.com")
      .get("/")
      .end((err, res) => {
        expect(res).have.status(200);
        expect(res).to.be.html;
        expect(res).not.to.be.json;

        done(err);
      });
  });
  it("HTTP header测试", function (done) {
    request("https://qq.com")
      .get("/response-headers")
      .query({ "content-type": "application/json" })
      .query({ pragma: "test1" })
      .query({ location: "test2" })
      .query({ "x-api-key": "test3" })
      .end((err, res) => {
        expect(res).have.status(200);
        expect(res).have.header("Content-type", /json$/);
        expect(res).have.header("Pragma", "test1");
      });
  });
});
