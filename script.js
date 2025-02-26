// define 4 functions for calculate: add, subtract, multiply, divide

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  } 
  return "DivisionZeroError";
}
const sqrt = (a) => Math.sqrt(a);
const percentage = (a) => a / 100;

//create variables and operate function
let num1 = null;
let operator = null;
let num2 = null;
let resetScreen = false;

function operate(operator, a, b){
  a = parseFloat(a);
  b = parseFloat(b);
  switch(operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return "Error: Invalid operator";
  }
}

// DOM elements
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Clear function
    if (button.textContent === 'AC') {
      display.textContent = '0';
      num1 = null;
      operator = null;
      num2 = null;
      resetScreen = false;
    } else if (button.textContent === '√') {
      const currentNum = parseFloat(display.textContent);
      if (currentNum >= 0) {
        const result = sqrt(currentNum);
        display.textContent = Math.round(result * 100) / 100;
        num1 = display.textContent;
        resetScreen = true;
      } else {
        display.textContent = 'Error';
        resetScreen = true;
      }
    } else if (button.textContent === '%') {
      const currentNum = parseFloat(display.textContent);
      const result = percentage(currentNum);
      display.textContent = Math.round(result * 100) / 100;
      num1 = display.textContent;
      resetScreen = true;
    }
  })
})