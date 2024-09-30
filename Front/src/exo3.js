export function map(array, transform) {
    const mapped = [];
    for (const element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

const array = [1, 2, 3, 4, 5];
const doubled = map(array, item => item * 2);
console.log(doubled);