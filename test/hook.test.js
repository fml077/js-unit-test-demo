const assert = require('assert');
const add = require('../src/add');
// 所有before()钩子运行（一次），然后任何beforeEach()钩子，测试，任何afterEach()钩子，最后after()钩子（一次）
describe('hooks', function () {
  before(function() {
    // runs before all tests in this block
    console.log('before')
  });

  after(function() {
    // runs after all tests in this block
    console.log('after')
  });

  beforeEach(function() {
    // runs before each test in this block
    console.log('beforeEach')
  });

  afterEach(function() {
    // runs after each test in this block
    console.log('afterEach')
  });

  // test cases
  it('1+99应该等于100', function () {
    assert.equal(add(1,99),100)
  })
  // test cases
  it('字符型1+99不应该等于100', function () {
    assert.equal(add('1','99'),100)
  })
});