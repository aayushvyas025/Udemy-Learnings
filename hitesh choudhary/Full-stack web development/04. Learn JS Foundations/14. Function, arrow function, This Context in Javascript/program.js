//* Function, arrow function, `this` keyword  Context in Javascript

//? Introduction to Functions
//  - Functions are reusable block of code which execute specific task with abstraction.
//  - Function follows the DRY 'Don't Repeat Yourself' Principal.

//* Syntax of Function
// - Mainly functions have two main components

// 1st  function Declaration
// function declaration is the main component where we declare our function body and
// function logic should be executed inside the body

/**
 * * we declare the function with the help of `function` keyword  and we denote function with parentheses `()`
 * function <function-name>()   {
 * * This is function scope where we write the function logic that will execute
 * * This whole curly braces {} is also called function body
 *  return
 * ! function are returning something also according to their logic but default undefined
 * }
 */

// 2nd function Calling
// - When our function declare, they don't execute and run by it's own instead it's control by developers
// - when we have to execute the function we used function calling.

//? syntax of function calling
/**
 * <function-name>()
 *
 */

//* Example of function
// function greetingToEveryone() {
//     console.log(`Hello, How are you ?`);
// }

// greetingToEveryone();

//! Javascript have types of functions which we understand and implementation with challenges

/**
 * Challenge First: Write a function named `makeTea` that takes one parameter `typeOfTea`, and returns a string like "Making a green tea" when called with "green tea".  Store the result in a variable named `teaOrder`.
 */

function makeTea(typeOfTea) {
  return `Making a ${typeOfTea}`;
  //! After the return statement no logic code will be executed and function execution terminated and comes out of the function scope.
}

const teaOrder = makeTea("Green tea");
console.log(teaOrder); // Making a Masala chai
/**
 ** In this console.log() log is also function which is internal feature of javascript.
 */

/**
 * ? Understanding the function logic
 * ! Here in this function, we are using parameter and argument
 * * What are parameters ?
 * - Parameters are the variables which are used as placeholder for the value which we are passing at the time of calling function
 * - Parameters are local to function scope only, available and exist upto to function scope only.
 * * What are arguments ?
 * - Arguments are the actual value which we passed in the function parentheses at the the time of function calling.
 * ? Syntax of function with parameter and argument
 *  function <function-name>(arguments) {
 *   Function body
 * }
 *
 * <function-name>(arguments)
 * * We can pass multiple parameters and arguments to the function
 */

/**
 * Challenge Second:  Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function name `confirmOrder` that returns a message like `Order confirm for chai`.
 * Call `confirmOrder` from within `orderTea` and result the tea.
 */

function orderTea(teaType) {
  //* confirmOrder function
  function confirmOrder() {
    return `Order confirm for ${teaType}`;
    // This teaType variable also accessible inside the function inside function also.
  }
  return confirmOrder();
  //? If we don't return this confirmOrder function it returns default undefined
  /**
   * * Here two learning points
   * - We are calling function inside the function which is called Nesting of function
   * - Function returns the function
   */
}
const result = orderTea(`Normal tea`);
console.log(result);

/**
 * Challenge Three: Write an arrow function named `calculateTotal` that take two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
 * Store the result in a variable named `totalCost`.
 */

/**
 * ! Arrow function
 * - Arrow function is syntactic sugar of our function.
 * - Here we have to write the lesser code instead of traditional function
 * - We use arrow to create function "=>" so, that's why it called fat arrow function.
 * - arrow function is introduced in ES06 Version
 * - To declare arrow function we have to stored in a variable
 *
 * ? Syntax of arrow function
 * () =>  {
 ** Body of arrow function
 * }
 */

// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// };

//? We can write more shorter way
const calculateTotal = (price, quantity) => price * quantity;
//* When our code logic is one liner than we don't need to use parentheses '{}' and  also return statement instead our function implicit return
const totalCost = calculateTotal(1700, 15);
console.log(totalCost); // Output: 25500

//! `this`  keyword context
// In javascript, this keyword will give the information of context means where the code belongs to or execution context.

//* Example of this
console.log(this); // Output: {} an empty object
/**
 *  In a Node.js mainly worked on  CommonJS module,
 * `this` at the top level refers to `module.exports`.
 * Since `module.exports` is initially an empty object,
 * the output is {}.
 */

//? This keyword behave differently with different javascript runtime environment
// - Nodejs it give Nodejs Global object
// - In browser, it's point to the window object.

//? Let's see example of `this` keyword
//* `function` keyword function
function testFunc() {
  console.log(this);
}

testFunc();
/**
 ** Output: `this` keyword inside the textFunc() it returns the Nodejs Global Object.
 * <ref *1> Object [global] {
 * global: [Circular *1],
 * clearImmediate: [Function: clearImmediate],
 * setImmediate: [Function: setImmediate] {
 * Symbol(nodejs.util.promisify.custom): [Getter]
 * },
 * clearInterval: [Function: clearInterval],
 * clearTimeout: [Function: clearTimeout],
 * setInterval: [Function: setInterval],
 * setTimeout: [Function: setTimeout] {
 * Symbol(nodejs.util.promisify.custom): [Getter]
 * },
 * queueMicrotask: [Function: queueMicrotask],
 * structuredClone: [Function: structuredClone],
 * atob: [Function: atob],
 * btoa: [Function: btoa],
 * performance: [Getter/Setter],
 * fetch: [Function: fetch],
 * crypto: [Getter],
 * navigator: [Getter]
 * }
 */

//* arrow function
const testArrowFunc = () => {
  console.log(this);
};

testArrowFunc(); // Output: {}  because it's point to Nodejs top-level module.exports
/**
 ** Arrow functions do not have their own `this`.
 ** Instead, they inherit `this` from their surrounding (lexical) scope or parent scope
 ** where they are defined.
 * ? Lexical scope define the variables or methods accessibility is determined entirely by its physical location
 */

//* Example working with `this` keyword with arrow function
function testFuncTwo() {
  const testArrowFuncTwo = () => {
    console.log(this);
  };

  testArrowFuncTwo();
}

testFuncTwo(); //* Output: Nodejs Global Object 

