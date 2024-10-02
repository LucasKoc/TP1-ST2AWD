# TP1-ST2AWD

TP1 -  ST2AWD - Interface Development and Design (I2 - 2425S7)

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

### Exercise 1

To execute files, go to folder `Front` and run the following commands:
- For Execution: `node src/exo1.js`
- For Test run: `npx mocha tests-mocha/exo1.spec.js`

Test run is already provided.

The code is completed with a check for the length of the array. If the array is empty, the function raise an error.
Sum is added in a for loop. If the element is not a number, the function raise an error.

```js
// For demonstration purpose, we add try catch block to handle intended errors
try {console.log(sumV1())} catch (e) {console.log(e.message)}
try {console.log(sumV1(1))} catch (e) {console.log(e.message)}
try {console.log(sumV1(1, 2, 3))} catch (e) {console.log(e.message)}
try {console.log(sumV1('Bonjour', 2, 3))} catch (e) {console.log(e.message)}

```
Result of execution:
```markdown
At least one number is expected
1
6
All parameters must be numbers
```
