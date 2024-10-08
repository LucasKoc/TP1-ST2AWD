/*To run a 'mocha' test    : npx mocha exo1.spec.js */
/*To run all 'mocha' tests : npx mocha *.js */
import { expect } from 'chai'
import { sumV1 } from '../src/exo1.js'

const implementations = [sumV1]

describe('ex. 1', function () {
  describe('sum(...terms)', function () {
    it('should raise an error if not term to sum', function () {
      for (const sum of implementations) {
        expect(sum).to.throw(Error, 'At least one number is expected')
      }
    })

    it('should sum 0 + 0 = 0', function () {
      for (const sum of implementations) expect(sum(0, 0)).to.eq(0)
    })

    it('should sum 1 term', function () {
      for (const sum of implementations) expect(sum(1)).to.eq(1)
    })

    it('should sum 2 terms', function () {
      for (const sum of implementations) expect(sum(1, 2)).to.eq(3)
    })

    it('should sum 3 terms', function () {
      for (const sum of implementations) expect(sum(1, 2, 3)).to.eq(6)
    })
  })
})
