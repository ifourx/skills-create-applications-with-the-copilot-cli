/**
 * Node.js CLI Calculator App
 * Supports the four basic math operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * And extended operations:
 * - modulo
 * - exponentiation (power)
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
 * Performs modulo (remainder) of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The remainder of a divided by b.
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Error: Modulo by zero.");
  }
  return a % b;
}

/**
 * Performs exponentiation (power): raises base to the exponent.
 * @param {number} base
 * @param {number} exponent
 * @returns {number} base raised to the power of exponent.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Computes the square root of a number.
 * @param {number} n
 * @returns {number} The square root of n.
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Error: Cannot compute the square root of a negative number.");
  }
  return Math.sqrt(n);
}

// Command-line interface support
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log("Usage: node src/calculator.js <operation> <number1> [number2]");
    console.log("Supported operations: add, subtract, multiply, divide, modulo, power, sqrt");
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const num1 = parseFloat(args[1]);
  const num2 = args[2] !== undefined ? parseFloat(args[2]) : undefined;

  if (isNaN(num1)) {
    console.log("Error: First argument must be a valid number.");
    process.exit(1);
  }

  if (num2 !== undefined && isNaN(num2)) {
    console.log("Error: Second argument must be a valid number.");
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
      case "%":
        result = modulo(num1, num2);
        console.log(`${num1} % ${num2} = ${result}`);
        break;
      case "power":
      case "exponentiation":
      case "**":
      case "^":
        result = power(num1, num2);
        console.log(`${num1} ^ ${num2} = ${result}`);
        break;
      case "sqrt":
      case "squareroot":
      case "square root":
        result = squareRoot(num1);
        console.log(`sqrt(${num1}) = ${result}`);
        break;
      default:
        console.log(`Error: Unknown operation '${operation}'.`);
        console.log("Supported operations: add, subtract, multiply, divide, modulo, power, sqrt");
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
