#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports seven arithmetic operations:
 *   - Addition       (+)  — add two or more numbers
 *   - Subtraction    (-)  — subtract one number from another
 *   - Multiplication (×)  — multiply two or more numbers
 *   - Division       (÷)  — divide one number by another
 *   - Modulo         (%)  — remainder of division (two numbers)
 *   - Exponentiation (^)  — raise a number to a power (two numbers)
 *   - Square Root    (√)  — square root of a number (one number)
 *
 * Usage:
 *   node src/calculator.js <operation> <numbers...>
 *
 * Examples:
 *   node src/calculator.js add 5 3          → 8
 *   node src/calculator.js subtract 10 4    → 6
 *   node src/calculator.js multiply 2 3 4   → 24
 *   node src/calculator.js divide 20 4      → 5
 *   node src/calculator.js modulo 10 3      → 1
 *   node src/calculator.js power 2 3        → 8
 *   node src/calculator.js sqrt 16          → 4
 */

// --- Supported Operations ---

/**
 * Addition — returns the sum of two or more numbers.
 */
function add(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

/**
 * Subtraction — subtracts the second (and subsequent) numbers
 * from the first.
 */
function subtract(...numbers) {
  return numbers.reduce((total, n) => total - n);
}

/**
 * Multiplication — returns the product of two or more numbers.
 */
function multiply(...numbers) {
  return numbers.reduce((total, n) => total * n, 1);
}

/**
 * Division — divides the first number by the second (and subsequent
 * numbers).  Throws an error on division by zero.
 */
function divide(...numbers) {
  return numbers.reduce((total, n) => {
    if (n === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return total / n;
  });
}

/**
 * Modulo — returns the remainder of dividing the first number by
 * the second.  Throws an error on modulo by zero.
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

/**
 * Exponentiation — raises the first number to the power of the
 * second number.
 */
function power(a, b) {
  return Math.pow(a, b);
}

/**
 * Square Root — returns the square root of a number.  Throws an
 * error for negative inputs.
 */
function sqrt(a) {
  if (a < 0) {
    throw new Error("Cannot calculate square root of a negative number.");
  }
  return Math.sqrt(a);
}

module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };

// --- CLI Entry Point ---
// Only run when executed directly (not when required as a module)

if (require.main === module) {
  const operation = process.argv[2];
  const args = process.argv.slice(3).map(Number);

  if (!operation) {
    console.error("Error: No operation specified.");
    console.error("Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|power|sqrt> <numbers...>");
    process.exit(1);
  }

  // sqrt takes 1 argument; all others need at least 2
  const minArgs = operation === "sqrt" ? 1 : 2;

  if (args.length < minArgs) {
    console.error(`Error: At least ${minArgs} number(s) are required for "${operation}".`);
    process.exit(1);
  }

  if (args.some(isNaN)) {
    console.error("Error: All arguments must be valid numbers.");
    process.exit(1);
  }

  let result;

  try {
    switch (operation) {
      case "add":
        result = add(...args);
        break;
      case "subtract":
        result = subtract(...args);
        break;
      case "multiply":
        result = multiply(...args);
        break;
      case "divide":
        result = divide(...args);
        break;
      case "modulo":
        result = modulo(...args);
        break;
      case "power":
        result = power(...args);
        break;
      case "sqrt":
        result = sqrt(...args);
        break;
      default:
        console.error(`Error: Unknown operation "${operation}".`);
        console.error("Supported operations: add, subtract, multiply, divide, modulo, power, sqrt");
        process.exit(1);
    }

    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
