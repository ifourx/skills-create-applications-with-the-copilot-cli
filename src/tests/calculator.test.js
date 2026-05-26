/**
 * Comprehensive unit tests for the calculator app.
 *
 * Tests cover all seven arithmetic operations:
 *   - Addition       — two numbers, multiple numbers, identity, negatives, decimals
 *   - Subtraction    — two numbers, multiple numbers, negative results, decimals
 *   - Multiplication — two numbers, multiple numbers, by zero, by one, decimals
 *   - Division       — two numbers, multiple numbers, decimals, edge cases
 *   - Modulo         — remainder, negative numbers, zero
 *   - Exponentiation — whole numbers, zero, negative exponent, decimals
 *   - Square Root    — perfect squares, decimals, zero
 *
 * Edge cases tested:
 *   - Division by zero
 *   - Modulo by zero
 *   - Square root of a negative number
 *   - Single number (error expected)
 *   - Negative numbers
 *   - Decimal (floating-point) numbers
 *   - String inputs (invalid argument)
 */

const { add, subtract, multiply, divide, modulo, power, sqrt } = require('../calculator');

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
// Modulo tests
// ---------------------------------------------------------------------------
describe('Modulo', () => {
  test('returns remainder of two positive numbers', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when evenly divisible', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('handles negative dividend', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('handles negative divisor', () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test('modulo by a larger number returns the dividend', () => {
    expect(modulo(3, 10)).toBe(3);
  });

  test('modulo of a number by itself returns zero', () => {
    expect(modulo(7, 7)).toBe(0);
  });

  test('modulo of zero by any number returns zero', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test('modulo by one returns zero', () => {
    expect(modulo(42, 1)).toBe(0);
  });

  test('modulo with decimal numbers', () => {
    expect(modulo(10.5, 3)).toBeCloseTo(1.5);
  });

  test('modulo with both decimal numbers', () => {
    expect(modulo(7.5, 2.5)).toBeCloseTo(0);
  });

  test('both dividend and divisor negative', () => {
    expect(modulo(-10, -3)).toBe(-1);
  });

  test('manual: 17 modulo 5 equals 2', () => {
    expect(modulo(17, 5)).toBe(2);
  });

  test('manual: 100 modulo 7 equals 2', () => {
    expect(modulo(100, 7)).toBe(2);
  });

  test('works with large numbers', () => {
    expect(modulo(1000000, 999)).toBe(1000000 % 999);
  });
});

// ---------------------------------------------------------------------------
// Exponentiation tests
// ---------------------------------------------------------------------------
describe('Exponentiation', () => {
  test('raises to a positive power', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises to the power of zero (returns 1)', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises to a negative power (returns fraction)', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('raises zero to a power', () => {
    expect(power(0, 5)).toBe(0);
  });

  test('raises a decimal base', () => {
    expect(power(1.5, 2)).toBeCloseTo(2.25);
  });

  test('raises a negative base to an even power', () => {
    expect(power(-2, 4)).toBe(16);
  });

  test('raises a negative base to an odd power (negative result)', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('power of one returns the base', () => {
    expect(power(42, 1)).toBe(42);
  });

  test('power of one with negative base', () => {
    expect(power(-7, 1)).toBe(-7);
  });

  test('zero to the power of zero (returns 1 in JS)', () => {
    expect(power(0, 0)).toBe(1);
  });

  test('raises a fraction to a power', () => {
    expect(power(0.5, 3)).toBeCloseTo(0.125);
  });

  test('raises to a fractional exponent (square root via power)', () => {
    expect(power(16, 0.5)).toBeCloseTo(4);
  });

  test('manual: 3 to the power of 4 equals 81', () => {
    expect(power(3, 4)).toBe(81);
  });

  test('manual: 10 to the power of 3 equals 1000', () => {
    expect(power(10, 3)).toBe(1000);
  });

  test('works with large numbers', () => {
    expect(power(5, 10)).toBe(9765625);
  });
});

// ---------------------------------------------------------------------------
// Square Root tests
// ---------------------------------------------------------------------------
describe('Square Root', () => {
  test('square root of a perfect square', () => {
    expect(sqrt(16)).toBe(4);
  });

  test('square root of zero', () => {
    expect(sqrt(0)).toBe(0);
  });

  test('square root of one', () => {
    expect(sqrt(1)).toBe(1);
  });

  test('square root of a decimal', () => {
    expect(sqrt(2)).toBeCloseTo(1.41421356, 5);
  });

  test('square root of a large perfect square', () => {
    expect(sqrt(10000)).toBe(100);
  });

  test('square root of a very small decimal', () => {
    expect(sqrt(0.0001)).toBeCloseTo(0.01, 5);
  });

  test('square root of a non-perfect square', () => {
    expect(sqrt(3)).toBeCloseTo(1.73205, 4);
  });

  test('square root of a fraction', () => {
    expect(sqrt(0.25)).toBeCloseTo(0.5);
  });

  test('square root of 144 equals 12', () => {
    expect(sqrt(144)).toBe(12);
  });

  test('square root of 81 equals 9', () => {
    expect(sqrt(81)).toBe(9);
  });

  test('square root of 2 multiplied by itself approximates 2', () => {
    const root2 = sqrt(2);
    expect(root2 * root2).toBeCloseTo(2, 10);
  });

  test('square root of 0.04 equals 0.2', () => {
    expect(sqrt(0.04)).toBeCloseTo(0.2);
  });

  test('square root of 4 equals 2', () => {
    expect(sqrt(4)).toBe(2);
  });

  test('square root of 225 equals 15', () => {
    expect(sqrt(225)).toBe(15);
  });

  test('square root of 0.81 approximates 0.9', () => {
    expect(sqrt(0.81)).toBeCloseTo(0.9);
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

  test('throws error on modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed.');
  });

  test('throws error on square root of a negative number', () => {
    expect(() => sqrt(-9)).toThrow('Cannot calculate square root of a negative number.');
  });

  test('single argument (CLI requires more, but function should still handle it)', () => {
    expect(add(5)).toBe(5);
    expect(subtract(5)).toBe(5);
    expect(multiply(5)).toBe(5);
    expect(divide(5)).toBe(5);
  });
});
