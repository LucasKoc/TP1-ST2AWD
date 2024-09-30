export function filter(array, predicate)  {
    const filteredArray = []
    for (const item of array) {
        if (predicate(item)) {
            filteredArray.push(item)
        }
    }
    return filteredArray
}

const array = [1, 2, 3, 4, 5]
const filteredArray = filter(array, item => item > 2)
console.log(filteredArray)