const { calculateNumber } = require('./0-calcul')
const assert = require('assert')


describe('calculateNumber', function() {
  it('test for 0', function(){
    assert.strictEqual(calculateNumber(0, 0), 0)
  })

  it('test for negative', function() {
    assert.strictEqual(calculateNumber(-1, 0), -1)
    assert.strictEqual(calculateNumber(-2, -1), -3)
  })

  it('negative with decimal', function() {
    assert.strictEqual(calculateNumber(-1.2, -2.1), -3)
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5)
    assert.strictEqual(calculateNumber(-5.9, -7.8), -14)
  })

  it('test for positive', function() {
    assert.strictEqual(calculateNumber(2, 4), 6)
    assert.strictEqual(calculateNumber(2.5, 5), 8)
    assert.strictEqual(calculateNumber(2.5, 5.5), 9)
  })

  it('positive with negative', function() {
    assert.strictEqual(calculateNumber(2, -4), -2)
    assert.strictEqual(calculateNumber(2.4, -5.6), -4)
    assert.strictEqual(calculateNumber(4.5, -3.2), 2)
  })

})