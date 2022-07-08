const assert = require('assert')
const Stack = require('../src/stack')

/* describe('AAA 安排、行动、断言', () => {
  // 不好的写法
  describe('[Bad] test stack class', () => {
    it('stack methods', () => {
      const stack = new Stack();          // 安排
      assert.equal(stack.length, 0);      // 断言

      // test push method
      stack.push(3);                      // 行动
      assert.equal(stack.length, 1);      // 断言

      // test pop method
      const last = stack.pop();           // 安排
      assert.equal(last, 3);              // 断言
      assert.equal(stack.length, 0);      // 断言
    });
  });

  // 推荐的写法
  describe('[Good] test stack class', () => {
    it('when push, length increase 1', () => {
      const stack = new Stack();
      stack.push(3);
      assert.equal(stack.length, 1);
    });
    it('push multiple at the same time', () => {
      const stack = new Stack();
      stack.push(4, 5, 6);
      assert.equal(stack.length, 3);
    });

    it('when pop, length decrease 1 and return last item', () => {
      const stack = new Stack();
      stack.push(3);
      const last = stack.pop();
      assert.equal(last, 3);
      assert.equal(stack.length, 0);
    });
    it('when pop an empty stack', () => {
      const stack = new Stack();
      const last = stack.pop();
      assert.equal(last, null);
      assert.equal(stack.length, 0);
    });
  });
}); */

describe('Stack test', () => {
  let stack;
  // 工厂模式
  function stackFactory(...items) {
    return new Stack(...items)
  }
  it('stack default length', () => {
    stack = stackFactory(1, 2, 3)
    assert.equal(stack.length,3)
  })
  it('when push, length increase 1', () => {
    stack = stackFactory();
    stack.push(3);
    assert.equal(stack.length, 1)
  })
  it('when pop, length decrease 1 and return last item', () => {
    stack = stackFactory(1, 2, 3);
    const last = stack.pop()
    assert.equal(stack.length, 2)
    assert.equal(last, 3)
  })
})