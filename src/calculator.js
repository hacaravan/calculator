'use strict'

function calculate(sumString) {
  let numbers, returnArr;
  const operations = {
    '+': (a, b) => a + b,
    '-': (a,b) => a - b
  }

  const separateOnOperand = (operand) => {
    return sumString.split(operand).map(n => parseInt(n.trim()))
  }

  Object.keys(operations).forEach((operand) => {
    if (sumString.includes(operand)) {
      numbers = separateOnOperand(operand);
      returnArr = [sumString, operations[operand](numbers[0], numbers[1])]
    };
  });

  return returnArr;

}
