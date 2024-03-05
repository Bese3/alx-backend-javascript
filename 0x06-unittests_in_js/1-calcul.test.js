const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('type SUM', function() {
  it('test for 0 add', function(){
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0)
  })

  it('test for negative add', function() {
    assert.strictEqual(calculateNumber('SUM', -1, 0), -1)
    assert.strictEqual(calculateNumber('SUM', -2, -1), -3)
  })

  it('negative with decimal add', function() {
    assert.strictEqual(calculateNumber('SUM', -1.2, -2.1), -3)
    assert.strictEqual(calculateNumber('SUM', -1.2, -3.7), -5)
    assert.strictEqual(calculateNumber('SUM', -5.9, -7.8), -14)
  })

  it('test for positive add', function() {
    assert.strictEqual(calculateNumber('SUM', 2, 4), 6)
    assert.strictEqual(calculateNumber('SUM', 2.5, 5), 8)
    assert.strictEqual(calculateNumber('SUM', 2.5, 5.5), 9)
  })

  it('positive with negative add', function() {
    assert.strictEqual(calculateNumber('SUM', 2, -4), -2)
    assert.strictEqual(calculateNumber('SUM', 2.4, -5.6), -4)
    assert.strictEqual(calculateNumber('SUM', 4.5, -3.2), 2)
  })

 })

 describe('type SUBTRACT', function() {
  it('test for 0 sub', function(){
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0)
  })

  it('test for negative sub', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, 0), -1)
    assert.strictEqual(calculateNumber('SUBTRACT', -2, -1), -1)
  })

  it('negative with decimal sub', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.2, -2.1), 1)
    assert.strictEqual(calculateNumber('SUBTRACT', -1.2, -3.7), 3)
    assert.strictEqual(calculateNumber('SUBTRACT', -5.9, -7.8), 2)
  })

  it('test for positive sub', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 2, 4), -2)
    assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 5), -2)
    assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 5.5), -3)
  })

  it('positive with negative sub', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 2, -4), 6)
    assert.strictEqual(calculateNumber('SUBTRACT', 2.4, -5.6), 8)
    assert.strictEqual(calculateNumber('SUBTRACT', 4.5, -3.2), 8)
  })
 })
 describe('test DIVIDE', function() {
  it('test for 0 div', function(){
    assert.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error')
    assert.strictEqual(calculateNumber('DIVIDE', 0, 3), 0)
  })

  it('test for negative div', function() {
    assert.strictEqual(calculateNumber('DIVIDE', -1, 1), -1)
    assert.strictEqual(calculateNumber('DIVIDE', -2, -1), 2)
  })

  it('negative with decimal div', function() {
    assert.strictEqual(calculateNumber('DIVIDE', -1.2, -2.1), 0.5)
    assert.strictEqual(calculateNumber('DIVIDE', -1.2, -3.7), 0.25)
    assert.strictEqual(calculateNumber('DIVIDE', -5.9, -7.8), 0.75)
  })

  it('test for positive div', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 2, 4), 0.5)
    assert.strictEqual(calculateNumber('DIVIDE', 2.5, 5), 3 / 5)
    assert.strictEqual(calculateNumber('DIVIDE', 2.5, 5.5), 3 / 6)
  })

  it('positive with negative div', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 2, -4), -0.5)
    assert.strictEqual(calculateNumber('DIVIDE', 2.4, -5.6), -2 / 6)
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, -3.2), -5 / 3)
  })
 })

})