/**
 * Here, we are imports those exports statement with the help of Modules and Common JS Imports
 */

//? Modules Imports

// default export statement importing
// import divideTwoNumber from "./program.js";

// name imports
// import { addTwoNumbers, diffTwoNumber, multiplyTwoNumber } from "./program.js";

// const divideResult = divideTwoNumber(6, 3);
// console.log(divideResult); // Output: 2

// const sumResult = addTwoNumbers(5, 10);
// console.log(sumResult); // Output: 15

// const diffResult = diffTwoNumber(25, 20);
// console.log(diffResult); // Output: 5

// const multiplyResult = multiplyTwoNumber(5, 5);
// console.log(multiplyResult); // Output: 25

//? Common JS Imports 

// To imports common js we need `require` keyword to import
const mathsOperation = require('./program.js'); 

mathsOperation.greetToEveryone(); 
mathsOperation.powerOfNumber(2, 4); 