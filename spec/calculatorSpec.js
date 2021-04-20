'use strict'

describe('calculate', () => {
  describe('when given a simple addition of two numbers', () => {
    it('returns the sum passed to it and the result of the sum', () => {
      expect(calculate('1 + 1')).toEqual(['1 + 1', 2])
      expect(calculate('2 + 3')).toEqual(['2 + 3', 5])
    })
  })
})
