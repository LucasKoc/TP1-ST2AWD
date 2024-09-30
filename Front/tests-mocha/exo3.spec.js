import { expect } from 'chai';
import { map } from '../src/exo3.js';

describe('ex. 3', function () {
    describe('map(array, transform)', function () {
        it('should return a new array', function () {
            /** @type {any[]} */
            const originalArray = [1, 2, 3];
            expect(map(originalArray, x => x * 2)).to.not.eq(originalArray);
            expect(map(originalArray, x => x * 2)).to.deep.eq([2, 4, 6]);
        });

        it('should transform every item of the array', function () {
            expect(map([1, 2, 3], x => x + 1)).to.deep.eq([2, 3, 4]);
            expect(map(['a', 'b', 'c'], x => x.toUpperCase())).to.deep.eq(['A', 'B', 'C']);
        });

        it('should not mutate the original array', function () {
            const originalArray = [1, 2, 3];
            map(originalArray, x => x + 1);
            expect(originalArray).to.deep.eq([1, 2, 3]);
        });
    });
});
