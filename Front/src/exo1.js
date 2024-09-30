export function sumV1(...numbers) {
    if (numbers.length === 0) throw new Error('At least one number is expected');

    // catch error in case of NaN operation
    let comp = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number') throw new Error('All parameters must be numbers');
        comp += numbers[i];
    }
    return comp;
}

// console.log(sumV1())
console.log(sumV1(1))
console.log(sumV1(1, 2, 3))
// console.log(sumV1('Bonjour', 2, 3))