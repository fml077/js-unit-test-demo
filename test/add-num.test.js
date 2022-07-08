const addNum = require('../src/add-num');
const assert = require('assert');

describe('add type test', () => {
  it('1 + NaN = NaN', function () {
    assert.equal(addNum(1, NaN), NaN)
  })
  it('1 + NaN = 1', function () {
    assert.equal(addNum(1, NaN), 1)
  })
  it('1 + Infinity = Infinity', function () {
    assert.equal(addNum(1, Infinity), Infinity)
  })
  it('Infinity + Infinity = 1', function () {
    assert.equal(addNum(1, Infinity), 1)
  })
  it('Infinity + Infinity = Infinity', function () {
    assert.equal(addNum(Infinity, Infinity), Infinity)
  })
  it('Infinity + -Infinity = Infinity', function () {
    assert.equal(addNum(Infinity, -Infinity), Infinity)
  })
  it('Infinity + -Infinity = 0', function () {
    assert.equal(addNum(Infinity, -Infinity), 0)
  })
})
