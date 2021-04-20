'use strict'

function calculate(sumString) {
  if(sumString.trim().split(' ').length !== 3) {
    throw new SyntaxError('Input must be a valid mathematical string separated by spaces')
  }
  let returnArr;
  const operations = {
    '+': (a, b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a / b
  }

  const separateOnOperand = (operand) => {
    return sumString.split(operand).map(n => parseInt(n.trim()))
  }

  Object.keys(operations).forEach((operand) => {
    if (sumString.includes(operand)) {
      let numbers = separateOnOperand(operand);
      returnArr = [sumString, operations[operand](numbers[0], numbers[1])]
    };
  });

  return returnArr;
}
