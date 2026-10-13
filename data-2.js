// make a calculator
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Error: Cannot divide by zero";
    }
    return a / b;
  }
  
  modulo(a, b) {
    return a % b;
  }
}

// Usage examples
const calc = new Calculator();

console.log(calc.add(10, 5));      // 15
console.log(calc.subtract(10, 5)); // 5
console.log(calc.multiply(10, 5)); // 50
console.log(calc.divide(10, 5));   // 2
console.log(calc.divide(10, 0));   // Error: Cannot divide by zero