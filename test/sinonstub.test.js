const sinon = require("sinon");
// stub替换数据库操作功能
describe("Sinon stub使用", () => {
  it("模拟数据库的建立", () => {
    const save = sinon.stub(Database, "save");
    const info = { name: "test", age: 25 };
    createUser(info, () => {});
    save.restore();
    sinon.assert.calledWith(save, info);
  });
});

describe("Sinon stub 使用异常处理", () => {
  it("模拟异常分支情况", () => {
    const err = new Error("数据库操作异常");
    //   stub 抛出异常
    const save = sinon.stub(Database, "save");
    save.throws(err);
    const callback = sinon.spy();
    createUser({ name: "test", age: 25 }, callback);
    save.restore();
    sinon.assert.calledWith(callback, err);
  });
});
