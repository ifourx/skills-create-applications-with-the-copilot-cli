/**
 * Node.js CLI Calculator App
 * Supports the four basic math operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 */

/**
 * Performs addition of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Performs subtraction of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Performs multiplication of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Performs division of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The quotient of a and b.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Error: Division by zero.");
  }
  return a / b;
}

// Command-line interface support
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.log("Usage: node src/calculator.js <operation> <number1> <number2>");
    console.log("Supported operations: add, subtract, multiply, divide");
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Both arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    let result;
    switch (operation) {
      case "add":
      case "addition":
      case "+":
        result = add(num1, num2);
        console.log(`${num1} + ${num2} = ${result}`);
        break;
      case "subtract":
      case "subtraction":
      case "-":
        result = subtract(num1, num2);
        console.log(`${num1} - ${num2} = ${result}`);
        break;
      case "multiply":
      case "multiplication":
      case "*":
      case "x":
        result = multiply(num1, num2);
        console.log(`${num1} * ${num2} = ${result}`);
        break;
      case "divide":
      case "division":
      case "/":
        result = divide(num1, num2);
        console.log(`${num1} / ${num2} = ${result}`);
        break;
      default:
        console.log(`Error: Unknown operation '${operation}'.`);
        console.log("Supported operations: add, subtract, multiply, divide");
        process.exit(1);
    }
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
