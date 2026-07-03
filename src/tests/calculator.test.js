const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

test('Calculator - Extended Operations', async (t) => {
  await t.test('should correctly perform modulo (remainder)', () => {
    // Test cases from calc-extended-operations.png
    assert.strictEqual(modulo(10, 3), 1);
    assert.strictEqual(modulo(15, 4), 3);
    assert.strictEqual(modulo(9, 3), 0);
    assert.strictEqual(modulo(-7, 3), -1);
  });

  await t.test('should throw an error on modulo by zero', () => {
    assert.throws(() => {
      modulo(10, 0);
    }, /Error: Modulo by zero\./);
  });

  await t.test('should correctly perform exponentiation (power)', () => {
    // Test cases from calc-extended-operations.png
    assert.strictEqual(power(2, 10), 1024);
    assert.strictEqual(power(3, 3), 27);
    assert.strictEqual(power(5, 0), 1);
    assert.strictEqual(power(4, 0.5), 2);
  });

  await t.test('should correctly compute square root', () => {
    // Test cases from calc-extended-operations.png
    assert.strictEqual(squareRoot(144), 12);
    assert.strictEqual(squareRoot(25), 5);
    assert.strictEqual(squareRoot(0), 0);
    assert.strictEqual(squareRoot(2), Math.sqrt(2));
  });

  await t.test('should throw an error for square root of a negative number', () => {
    assert.throws(() => {
      squareRoot(-9);
    }, /Error: Cannot compute the square root of a negative number\./);
  });
});
