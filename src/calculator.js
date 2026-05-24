#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports four basic arithmetic operations:
 *   - Addition       (+)  — add two or more numbers
 *   - Subtraction    (-)  — subtract one number from another
 *   - Multiplication (×)  — multiply two or more numbers
 *   - Division       (÷)  — divide one number by another
 *
 * Usage:
 *   node src/calculator.js <operation> <numbers...>
 *
 * Examples:
 *   node src/calculator.js add 5 3          → 8
 *   node src/calculator.js subtract 10 4    → 6
 *   node src/calculator.js multiply 2 3 4   → 24
 *   node src/calculator.js divide 20 4      → 5
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

module.exports = { add, subtract, multiply, divide };

// --- CLI Entry Point ---
// Only run when executed directly (not when required as a module)

if (require.main === module) {
  const operation = process.argv[2];
  const args = process.argv.slice(3).map(Number);

  if (!operation) {
    console.error("Error: No operation specified.");
    console.error("Usage: node src/calculator.js <add|subtract|multiply|divide> <numbers...>");
    process.exit(1);
  }

  if (args.length < 2) {
    console.error("Error: At least two numbers are required.");
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
      default:
        console.error(`Error: Unknown operation "${operation}".`);
        console.error("Supported operations: add, subtract, multiply, divide");
        process.exit(1);
    }

    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
