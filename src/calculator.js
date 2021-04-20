'use strict'

function calculate(sumString) {
  let numberStrings = sumString.split('+')
  let numbers = numberStrings.map(n => parseInt(n.trim()))
  console.log(numbers)
  return [sumString, numbers[0] + numbers[1]]
}
