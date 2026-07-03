const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide } = require('../calculator');

test('Calculator - Basic Operations', async (t) => {
  await t.test('should correctly perform addition', () => {
    // Test case from calc-basic-operations.png
    assert.strictEqual(add(2, 3), 5);
    // Additional cases
    assert.strictEqual(add(-1, 5), 4);
    assert.strictEqual(add(0, 0), 0);
  });

  await t.test('should correctly perform subtraction', () => {
    // Test case from calc-basic-operations.png
    assert.strictEqual(subtract(10, 4), 6);
    // Additional cases
    assert.strictEqual(subtract(0, 5), -5);
    assert.strictEqual(subtract(-3, -2), -1);
  });

  await t.test('should correctly perform multiplication', () => {
    // Test case from calc-basic-operations.png
    assert.strictEqual(multiply(45, 2), 90);
    // Additional cases
    assert.strictEqual(multiply(-2, 3), -6);
    assert.strictEqual(multiply(5, 0), 0);
  });

  await t.test('should correctly perform division', () => {
    // Test case from calc-basic-operations.png
    assert.strictEqual(divide(20, 5), 4);
    // Additional cases
    assert.strictEqual(divide(-10, 2), -5);
    assert.strictEqual(divide(5, 2), 2.5);
  });

  await t.test('should throw an error on division by zero', () => {
    assert.throws(() => {
      divide(20, 0);
    }, /Error: Division by zero\./);
  });
});
