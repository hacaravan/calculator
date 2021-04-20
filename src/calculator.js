'use strict'

function calculate(sumString) {
  let numbers = sumString.split('+').map(n => parseInt(n.trim()))
  return [sumString, numbers[0] + numbers[1]]
}
