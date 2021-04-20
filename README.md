
Academic maths papers easier to read

Scan through maths paper looking for sums

Extracts the sums as strings and evaluates them

Outputs the sum string along with evaluated results

Takes sum string in and evaluates it - finding has already been done

- Adding, subtracting, multiplying, dividing
- Only one operation at a time
- Always integers in equations
- Non-integer results of division out of scope
- On incorrectly spaced input, return a math error with 'Input must be a valid mathematical string separated by spaces'
- On incorrect symbol, return a math error with 'Input must be a valid mathematical string separated by spaces'

Take in a string, output array with the string as 0th element and result as 1th element

Input/Output table
--------
Scenario | Input | Output
-------------| ----| --------
Addition | '1 + 1' | ['1 + 1', 2]
Addition | '2 + 3' | ['2 + 3', 5]
Subtraction | '1 - 1' | ['1 - 1', 2]
Multiplication | '2 * 3' | ['2 * 3', 6]
Division | '6 / 3' | ['6 / 3', 2]
Incorrect spacing | '1+1' | Math Error with message 'Input must be a valid mathematical string separated by spaces'
Incorrect symbol | '1 ~ 1' | Math Error with message 'Input must be a valid mathematical string separated by spaces'
