# Calculator

## Intro
This is a simple calculator app, built in JavaScript and tested using Jasmine. It takes in a string with a calculation in it, and outputs the result. I built the app following a strict TDD process as part of a review of my process, one strand of the Makers Academy course.


---
## Specifications

### Input/Output table
Scenario | Input | Output
-------------| ----| --------
Addition | '1 + 1' | ['1 + 1', 2]
Addition | '2 + 3' | ['2 + 3', 5]
Subtraction | '1 - 1' | ['1 - 1', 2]
Multiplication | '2 * 3' | ['2 * 3', 6]
Division | '6 / 3' | ['6 / 3', 2]
Incorrect spacing | '1+1', '1 +1', '1  + 1', ' 1 + 1', '1 + 1 ' | Math Error with message 'Input must be a valid mathematical string separated by spaces'
Incorrect symbol | '1 ~ 1', '1 a 1' | Math Error with message 'Input must be a valid mathematical string separated by spaces'

### Client Specifications
The below was part of my information gathering phase of the review, and comprises the notes I made based on the client's requirements.

- 'Client' makes academic maths papers easier to read
- They have a tool which scans through maths paper looking for sums
- It extracts the sums as strings and we want to build a tool that evaluates them
- This calculator should output the sum string along with the evaluated result
- The calculator takes sum string in and evaluates it - finding the string has already been done for us

What the calculator needs to do:
- Adding, subtracting, multiplying, dividing
- Only one operation at a time
- Always integers in equations
- Non-integer results of division are out of scope
- On incorrectly spaced input, return a math error with 'Input must be a valid mathematical string separated by spaces'
- On incorrect symbol, return a math error with 'Input must be a valid mathematical string separated by spaces'
- Take in a string, output array with the string as 0th element and result as 1th element
