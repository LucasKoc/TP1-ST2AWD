# TP1 -  ST2AWD - Interface Development and Design (I2 - 2425S7)

20-Sept-2024 | SE Promo 2026 | KOCOGLU Lucas

### Objective

The objective of this TP is to train Js basic concepts.
In this lab, we will implement different functions, interact with CSV file, fetch data from a server and analyse the given file.

### Structure

The lab is divided into two parts: Front and Back.

Back contain the server and the data file to fetch and analyse.
Front contain the exercises to implement and the tests run with mocha.

```bash
./
├── Back
│   ├── Data
│   │   └── data.csv # File to fetch and analyse
│   ├── package-lock.json
│   ├── package.json
│   └── serveur.js # Server
├── Front
│   ├── package-lock.json
│   ├── package.json
│   ├── src # Exercice folder
│   │   ├── exo1.js
│   │   ├── exo2.js
│   │   ├── exo3.js
│   │   └── exo4-exo5.js
│   └── tests-mocha # Test folder
│       ├── exo1.spec.js
│       ├── exo2.spec.js
│       ├── exo3.spec.js
│       └── exo4-exo5.spec.js
├── LICENSE
├── README.md
└── TP1.pdf

```

### Exercise 1 - Implement sum(...terms)

To execute files, go to folder `Front` and run the following commands:
- For Execution: `node src/exo1.js`
- For Test run: `npx mocha tests-mocha/exo1.spec.js`

Test run is already provided.

The objective of this exercise is to implement a function that takes an array of numbers and return the sum of all elements.
The code is completed with a check for the length of the array. If the array is empty, the function raise an error.
Sum is added in a for loop. If the element is not a number, the function raise an error.

**<ins>Demo:</ins>**
```js
// For demonstration purpose, we add try catch block to handle intended errors
try {console.log(sumV1())} catch (e) {console.log(e.message)}
try {console.log(sumV1(1))} catch (e) {console.log(e.message)}
try {console.log(sumV1(1, 2, 3))} catch (e) {console.log(e.message)}
try {console.log(sumV1('Bonjour', 2, 3))} catch (e) {console.log(e.message)}
```
**<ins>Result of execution:</ins>**
```markdown
At least one number is expected
1
6
All parameters must be numbers
```

### Exercise 2 - Implement filter(array, predicate)

To execute files, go to folder `Front` and run the following commands:
- For Execution: `node src/exo2.js`
- For Test run: `npx mocha tests-mocha/exo2.spec.js`

Test run is already provided.

The objective of this exercise is to implement a function that takes an array, and a predicate function,  and return a new array with all elements that satisfy the predicate function.

**<ins>Demo:</ins>**
```js
const array = [1, 2, 3, 4, 5]
const filteredArray = filter(array, item => item > 2)
console.log(filteredArray)
```
**<ins>Result of execution:</ins>**
```markdown
[ 3, 4, 5 ]
```

### Exercise 3 - Implement map(array, transform)

To execute files, go to folder `Front` and run the following commands:
- For Execution: `node src/exo3.js`
- For Test run: `npx mocha tests-mocha/exo3.spec.js`

Test run is **not provided**. The test run is located in the file `Front/tests-mocha/exo3.spec.js`. It follows the example on the subject file (Result of tests run at the end of the file).

The objective of this exercise is to implement a function that takes an array and return a new array with all elements transformed by the transform function.

**<ins>Demo:</ins>**
```js
const array = [1, 2, 3, 4, 5];
const doubled = map(array, item => item * 2);
console.log(doubled);
```

**<ins>Result of execution:</ins>**
```markdown
[ 2, 4, 6, 8, 10 ]
```

### Exercise 4/5 - Basic CSV parsing into literal objects, Computes stats about contributions

To execute files, go to folder `Front` and run the following commands:
- For Execution: `node src/exo4-exo5.js`
- For Test run: `npx mocha tests-mocha/exo4-exo5.spec.js`

Test run is **not provided**. The test run is located in the file `Front/tests-mocha/exo4-exo5.spec.js`. It follows the example on the subject file (Result of tests run at the end of the file).

The objective of this exercise is to implement a function that takes a CSV file and analyse it trough multiple functions.

#### Exercise 4 - Basic CSV parsing into literal objects

This question treat about fetching the data from the CSV file and parse it into an array of objects.
To pass the test run for this exercise, the function `pullAndParseCsv` must be implemented instead of `processData`. The function return a promise that resolve the CSV data.

**<ins>Demo:</ins>**
```js
pullAndAnalyzeCsv().then(console.log).catch(console.error);
```

**<ins>Result of execution:</ins>**
```js
{
    totalContributors: 3977,
    projectCount: 3977,
    mostActiveContributor: 'jim',
    averageLength: 14.148101584108625,
    firstProjectName: [
        'abdera',     'abdera',     'abdera',     'abdera',     'abdera',
        'abdera',     'abdera',     'abdera',     'abdera',     'abdera',
        'abdera',     'abdera',     'abdera',     'abdera',     'abdera',
        'abdera',     'abdera',     'abdera',     'abdera',     'abdera',
        'abdera',     'abdera',     'abdera',     'abdera',     'abdera',
        'abdera',     'abdera',     'abdera',     'abdera',     'abdera',
        'abdera',     'abdera',     'abdera',     'abdera',     'abdera',
        'abdera',     'abdera',     'abdera',     'abdera',     'abdera',
        'abdera',     'abdera',     'abdera-pmc', 'abdera-pmc', 'abdera-pmc',
        'abdera-pmc', 'abdera-pmc', 'abdera-pmc', 'abdera-pmc', 'abdera-pmc',
        'abdera-pmc', 'abdera-pmc', 'abdera-pmc', 'abdera-pmc', 'abdera-pmc',
        'abdera-pmc', 'abdera-pmc', 'abdera-pmc', 'abdera-pmc', 'abdera-pmc',
        'abdera-pmc', 'abdera-pmc', 'abdera-pmc', 'abdera-pmc', 'abdera-pmc',
        'abdera-pmc', 'accumulo',   'accumulo',   'accumulo',   'accumulo',
        'accumulo',   'accumulo',   'accumulo',   'accumulo',   'accumulo',
        'accumulo',   'accumulo',   'accumulo',   'accumulo',   'accumulo',
        'accumulo',   'accumulo',   'accumulo',   'accumulo',   'accumulo',
        'accumulo',   'accumulo',   'accumulo',   'accumulo',   'accumulo',
        'accumulo',   'accumulo',   'accumulo',   'accumulo',   'accumulo',
        'accumulo',   'accumulo',   'accumulo',   'accumulo',   'accumulo',
        ... 40473 more items
    ]
}
```

The feteched data is passed to the function `parseCsvFunctional` that return an array of objects.

**<ins>Demo:</ins>**
```js
const contributions = parseCsvFunctional(csvText);
console.log(contributions);
```

**<ins>Result of execution:</ins>**
```js
[
  {
    username: 'aadamchik',
    website: null,
    realName: 'Andrus Adamchik',
    projectName: 'apsite'
  },
  {
    username: 'aadamchik',
    website: null,
    realName: 'Andrus Adamchik',
    projectName: 'cayenne'
  },
    [...]
]
```

#### Exercise 5.1 - The first project's name in ascending alphabetic order.

This question treat about fetching the first project's name in ascending alphabetic order. It must treat case-insensitive manner and handle diacritics.

**<ins>Demo:</ins>**
```js
const firstProjectName = getFirstProjectName(contributions);
console.log(firstProjectName);
```

**<ins>Result of execution:</ins>**
```js
abdera
```

#### Exercise 5.2 - The number of unique contributors.

This question is about getting the number of unique contributors.

**<ins>Demo:</ins>**
```js
const uniqueContributors = unique(contributions, contribution => contribution.username);
const totalContributors = uniqueContributors.length;
console.log(totalContributors);
```

**<ins>Result of execution:</ins>**
```js
3977
```

#### Exercise 5.3 - The average length of contributors' real name.

This question is about getting the average length of contributors' name. We're working on unique names.
Here, we will use the uniqueContributors array from the previous question.

**<ins>Demo:</ins>**
```js
const averageLength = averageLengthContributorName(uniqueContributors);
console.log(averageLength);
```

**<ins>Result of execution:</ins>**
```js
14.148101584108625
```

#### Exercise 5.4 - The most active contributor.

This question is about getting the most active contributor.
First we will group contribution by username, sorting by contribution count and return the first element.
We will use the function fetchTop10 (will be used in the next question) to get the first element.

**<ins>Demo:</ins>**
```js
const contributorProjectsCount = groupBy(contributions, contribution => contribution.username);
const sortedContributorProjectsByCount = sortBy(Object.entries(contributorProjectsCount), a => a[1], 'desc');
const mostActiveContributor = fetchTop10(sortedContributorProjectsByCount)[0];
```

**<ins>Result of execution:</ins>**
```js
'jim'
```

#### Exercise 5.5 - The 10 most active contributors.

This question is about getting the 10 most active contributors.
We will use the function fetchTop10 to get the first 10 elements.

**<ins>Demo:</ins>**
```js
console.log(fetchTop10(sortedContributionProjectsByCount));
```

**<ins>Result of execution:</ins>**
```js
[
    [ 'jim', 185 ],
    [ 'jukka', 156 ],
    [ 'bdelacretaz', 141 ],
    [ 'mattmann', 134 ],
    [ 'gnodet', 124 ],
    [ 'olamy', 118 ],
    [ 'simonetripodi', 116 ],
    [ 'djencks', 113 ],
    [ 'bimargulies', 110 ],
    [ 'rubys', 110 ]
]
```

### Appendix - Execution of the tests

To execute the tests, go to the folder `Front/tests-mocha` and run the following commands:
- For all exercises: `npx mocha *.spec.js`

![](https://raw.githubusercontent.com/LucasKoc/TP1-ST2AWD/refs/heads/main/Ressources/Screenshot%202024-10-03%20at%2019.57.11.png)

