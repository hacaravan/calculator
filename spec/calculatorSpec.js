'use strict'

describe('calculate', () => {
  describe('when given a simple addition of two numbers', () => {
    it('returns the sum passed to it and the result of the sum', () => {
      expect(calculate('1 + 1')).toEqual(['1 + 1', 2])
      expect(calculate('2 + 3')).toEqual(['2 + 3', 5])
    })
  })
  describe('when given a simple subtraction of two numbers', () => {
    it('returns the sum passed to it and the result of the sum', () => {
      expect(calculate('1 - 1')).toEqual(['1 - 1', 0])
    })
  })
  describe('when given a simple Multiplication of two numbers', () => {
    it('returns the sum passed to it and the result of the sum', () => {
      expect(calculate('2 * 3')).toEqual(['2 * 3', 6])
    })
  })
  describe('when given a simple division of two divisible numbers', () => {
    it('returns the sum passed to it and the result of the sum', () => {
      expect(calculate('6 / 3')).toEqual(['6 / 3', 2])
    })
  })

  describe('when given a sum with incorrect spacing', () => {
    describe('when no spaces between operands and numbers', () => {
      it('raises a syntax error', () => {
        expect(function() {calculate('1+1')} ).toThrowError(SyntaxError, 'Input must be a valid mathematical string separated by spaces')
      })
    })
    describe('when two spaces between operands and numbers', () => {
      it('raises a syntax error', () => {
        expect(function() {calculate('1  + 1')} ).toThrowError(SyntaxError, 'Input must be a valid mathematical string separated by spaces')
      })
    })
    describe('when right number of spaces in all the wrong places', () => {
      it('raises a syntax error', () => {
        expect(function() {calculate('1  +1')} ).toThrowError(SyntaxError, 'Input must be a valid mathematical string separated by spaces')
      })
    })
    describe('when space before first number', () => {
      it('raises a syntax error', () => {
        expect(function() {calculate(' 1 + 1')} ).toThrowError(SyntaxError, 'Input must be a valid mathematical string separated by spaces')
      })
    })
    describe('when space after final number', () => {
      it('raises a syntax error', () => {
        expect(function() {calculate('1 + 1 ')} ).toThrowError(SyntaxError, 'Input must be a valid mathematical string separated by spaces')
      })
    })
  })

  describe('when given a sum with a symbol that is not supported', () => {
    it('raises a syntax error', () => {
      expect(function() { calculate('1 ~ 1') } ).toThrowError(SyntaxError, 'Input must be a valid mathematical string separated by spaces')
        expect(function() { calculate('1 a 1') } ).toThrowError(SyntaxError, 'Input must be a valid mathematical string separated by spaces')
    })
  })
})
