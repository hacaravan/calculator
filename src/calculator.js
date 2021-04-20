'use strict'

function calculate(sumString) {
  let returnArr;
  const operations = {
    '+': (a, b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => a / b,
  }

  let operand = sumString.split(' ')[1];

  const separateOnOperand = () => {
    return sumString.split(operand).map(n => parseInt(n.trim()))
  }

  const hasCorrectSpacing = () => {
    return sumString === sumString.trim() &&
           sumString.split(' ').length === 3 &&
           Math.min(...sumString.split(' ').map(a => a.length)) >= 1
  };

  const hasValidOperand = () => {
    return Object.keys(operations).includes(operand)
  }

  if(!(hasCorrectSpacing() && hasValidOperand())) {
    throw new SyntaxError('Input must be a valid mathematical string separated by spaces')
  };

  Object.keys(operations).forEach((operand) => {
    if (sumString.includes(operand)) {
      let numbers = separateOnOperand(operand);
      returnArr = [sumString, operations[operand](numbers[0], numbers[1])]
    };
  });

  return returnArr;
}
