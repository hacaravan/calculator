'use strict'

function calculate(sumString) {
  let numbers;
  const operands = ['+', '-']

  const separateOnOperand = (operand) => {
    return sumString.split(operand).map(n => parseInt(n.trim()))
  }

  operands.forEach((operand) => {
    if (sumString.includes(operand)) {
      numbers = separateOnOperand(operand);
    };
  });


  if(sumString.includes('+')){
    return [sumString, numbers[0] + numbers[1]]
  } else if(sumString.includes('-')){
    return [sumString, numbers[0] - numbers[1]]
  }

}
