const sinon = require("sinon");
const createUser = require("../src/create-user");
// 仿真框架sinon
describe("Sinon spies 使用", function () {
  it("should call save once", () => {
    var save = sinon.spy(Database, "save");
    createUser({ name: "test", age: 25 }, () => {
      save.restore(); // 清理监听函数，必须的，否则替代对象一直存在
      sinon.assert.calledOnce(save);
    });
  });
});

describe("Sinon spies 使用", function () {
  it("create User 的参数传递是否正确", () => {
    const save = sinon.spy(Database, "save");
    const info = { name: "test", age: 25 };
    createUser(info, () => {});
    save.restore();
    sinon.assert.calledWith(save, info);
  });
});
