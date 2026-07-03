/**
 * Node.js CLI Calculator App
 * Supports operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power
 * - square root
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

/**
 * Calculates the remainder of a divided by b.
 * @param {number} a
 * @param {number} b
 * @returns {number} The remainder of a divided by b.
 */
function modulo(a, b) {
  return a % b;
}

/**
 * Calculates base raised to the exponent.
 * @param {number} base
 * @param {number} exponent
 * @returns {number} The result of base raised to exponent.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number.
 * @param {number} n
 * @returns {number} The square root of n.
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Error: Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

// Command-line interface support
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log("Usage: node src/calculator.js <operation> <number1> [number2]");
    console.log("Supported operations: add, subtract, multiply, divide, modulo, power, squareroot");
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const num1 = parseFloat(args[1]);
  const num2 = args[2] !== undefined ? parseFloat(args[2]) : null;

  if (isNaN(num1) || (operation !== "squareroot" && operation !== "sqrt" && isNaN(num2))) {
    console.log("Error: Valid numbers must be provided as arguments.");
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
      case "modulo":
      case "mod":
      case "%":
        result = modulo(num1, num2);
        console.log(`${num1} % ${num2} = ${result}`);
        break;
      case "power":
      case "pow":
      case "^":
        result = power(num1, num2);
        console.log(`${num1} ^ ${num2} = ${result}`);
        break;
      case "squareroot":
      case "sqrt":
        result = squareRoot(num1);
        console.log(`sqrt(${num1}) = ${result}`);
        break;
      default:
        console.log(`Error: Unknown operation '${operation}'.`);
        console.log("Supported operations: add, subtract, multiply, divide, modulo, power, squareroot");
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
  divide,
  modulo,
  power,
  squareRoot
};
