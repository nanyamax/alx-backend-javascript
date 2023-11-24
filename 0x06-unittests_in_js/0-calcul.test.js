// test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should round and sum two positive numbers', function () {
    const result = calculateNumber(5.3, 4.8);
    assert.strictEqual(result, 10); // 5 + 5 = 10
  });

  it('should round and sum a positive and a negative number', function () {
    const result = calculateNumber(-2.6, 3.1);
    assert.strictEqual(result, 0); // -3 + 3 = 0
  });

  it('should round and sum two negative numbers', function () {
    const result = calculateNumber(-7.4, -3.9);
    assert.strictEqual(result, -11); // -7 + -4 = -11
  });

  it('should round and sum zero and a positive number', function () {
    const result = calculateNumber(0, 2.5);
    assert.strictEqual(result, 3); // 0 + 3 = 3
  });

  it('should round and sum zero and a negative number', function () {
    const result = calculateNumber(0, -4.2);
    assert.strictEqual(result, -4); // 0 + -4 = -4
  });
});
