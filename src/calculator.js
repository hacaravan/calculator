'use strict'

function calculate(sumString) {
  let numbers;
  if(sumString.includes('+')){
    numbers = sumString.split('+').map(n => parseInt(n.trim()))
    return [sumString, numbers[0] + numbers[1]]
  } else if(sumString.includes('-')){
    numbers = sumString.split('-').map(n => parseInt(n.trim()))
    return [sumString, numbers[0] - numbers[1]]
  }

}
