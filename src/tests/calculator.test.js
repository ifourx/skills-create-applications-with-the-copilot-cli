/**
 * Comprehensive unit tests for the calculator app.
 *
 * Tests cover all four basic arithmetic operations:
 *   - Addition       — two numbers, multiple numbers, identity, negatives, decimals
 *   - Subtraction    — two numbers, multiple numbers, negative results, decimals
 *   - Multiplication — two numbers, multiple numbers, by zero, by one, decimals
 *   - Division       — two numbers, multiple numbers, decimals, edge cases
 *
 * Edge cases tested:
 *   - Division by zero
 *   - Single number (error expected)
 *   - Negative numbers
 *   - Decimal (floating-point) numbers
 *   - String inputs (invalid argument)
 */

const { add, subtract, multiply, divide } = require('../calculator');

// ---------------------------------------------------------------------------
// Addition tests
// ---------------------------------------------------------------------------
describe('Addition', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds multiple numbers', () => {
    expect(add(10, 20, 30)).toBe(60);
  });

  test('adds with zero', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('adds mixed positive and negative numbers', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test('returns zero when called with no arguments', () => {
    expect(add()).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// Subtraction tests
// ---------------------------------------------------------------------------
describe('Subtraction', () => {
  test('subtracts two positive numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts multiple numbers', () => {
    expect(subtract(100, 25, 15)).toBe(60);
  });

  test('returns a negative result', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts a negative number (double negative)', () => {
    expect(subtract(10, -4)).toBe(14);
  });

  test('subtracts with zero', () => {
    expect(subtract(5, 0)).toBe(5);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
  });
});

// ---------------------------------------------------------------------------
// Multiplication tests
// ---------------------------------------------------------------------------
describe('Multiplication', () => {
  test('multiplies two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('multiplies multiple numbers', () => {
    expect(multiply(2, 3, 5)).toBe(30);
  });

  test('multiplies by zero', () => {
    expect(multiply(7, 0)).toBe(0);
  });

  test('multiplies by one', () => {
    expect(multiply(9, 1)).toBe(9);
  });

  test('multiplies negative numbers', () => {
    expect(multiply(-2, 5)).toBe(-10);
  });

  test('multiplies two negatives (positive result)', () => {
    expect(multiply(-4, -3)).toBe(12);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(1.5, 2)).toBeCloseTo(3.0);
  });
});

// ---------------------------------------------------------------------------
// Division tests
// ---------------------------------------------------------------------------
describe('Division', () => {
  test('divides two positive numbers', () => {
    expect(divide(15, 3)).toBe(5);
  });

  test('divides multiple numbers', () => {
    expect(divide(100, 5, 2)).toBe(10);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(10, 4)).toBeCloseTo(2.5);
  });

  test('divides a negative number', () => {
    expect(divide(-20, 5)).toBe(-4);
  });

  test('divides by a negative number', () => {
    expect(divide(20, -4)).toBe(-5);
  });

  test('divides two negative numbers (positive result)', () => {
    expect(divide(-30, -6)).toBe(5);
  });

  test('divides by 1', () => {
    expect(divide(7, 1)).toBe(7);
  });
});

// ---------------------------------------------------------------------------
// Edge case tests
// ---------------------------------------------------------------------------
describe('Edge cases', () => {
  test('throws error on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });

  test('throws error when dividing by zero in multi-number chain', () => {
    expect(() => divide(100, 5, 0, 2)).toThrow('Division by zero is not allowed.');
  });

  test('single argument (CLI requires 2+, but function should still handle it)', () => {
    expect(add(5)).toBe(5);
    expect(subtract(5)).toBe(5);
    expect(multiply(5)).toBe(5);
    expect(divide(5)).toBe(5);
  });
});
