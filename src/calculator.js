'use strict'

function calculate(sumString) {
  let numbers;
  const separateOnOperand = (string, operand) => {
    return sumString.split(operand).map(n => parseInt(n.trim()))
  }
  if(sumString.includes('+')){
    numbers = separateOnOperand(sumString, '+')
    return [sumString, numbers[0] + numbers[1]]
  } else if(sumString.includes('-')){
    numbers = separateOnOperand(sumString, '-')
    return [sumString, numbers[0] - numbers[1]]
  }

}
