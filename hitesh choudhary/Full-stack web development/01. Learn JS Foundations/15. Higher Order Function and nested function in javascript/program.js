//* Higher Order Function and Nested Function in Javascript

//? Nested Functions
// Nested function is interesting concepts in which we implement functions inside functions,

//* Understand Nested function
function exampleOne() {
  console.log("Example One executed");
  function exampleTwo() {
    console.log("Example Two executed");
    function exampleThree() {
      console.log("Example Three executed");
    }
    exampleThree();
  }
  exampleTwo();
}

exampleOne();
/**
 * ? When functions are implemented inside function than they are called Nested functions
 */

//? Higher Order Function
// - In Javascript, Functions are treated First Class function, which have some special features
//* 1st. Functions are treated as variables, we can store function in an variable.
const testFunc = function () {
  console.log("Hello World");
};
//? This above expression called as Function expression when we store function in a variable.

testFunc();

//* 2nd. Function passed as an argument to other function
function testFuncTwo() {
  console.log("testFuncTwo executed");
}

function testFuncThree(fn) {
  fn();
}

testFuncThree(testFuncTwo); // Here we are passing function as argument.

//* 3rd. Function is returning another function
function testFuncFour() {
  console.log(`Executing testFuncFour`);
}

function testFuncFive() {
  return testFuncFour; // Here we are returning function from function.
}

const funcResult = testFuncFive();
funcResult();

//? When above all the features having any function is called Higher Order Function

// Let understand higher order function and nested function in more depth with challenges

/**
 * Challenge Four:
 * Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `earl grey`.
 * Return the result of calling `makeTea`
 */

function processTeaOrder(func) {
  return func("earl grey");
}

function makeTea(teaType) {
  return `Making ${teaType} tea`;
}

const order = processTeaOrder(makeTea);
console.log(order);

/**
 * Understanding of above challenge:
 * * Here processTeaOrder function taking func as an parameter and return with 'earl grey' argument
 * function processTeaOrder(func) {
 *    return func('earl grey')'
 *  }
 ** Here function makeTea taking parameter and return string `Making ${teaType} tea`
 *  function makeTea(teaType) {
 *   return `Making ${teaType} tea`
 *   }
 *
 * * const order = processTeaOrder(makeTea);  This processTeaOrder is Higher Order Function
 * console.log(order)
 */

/**
 * Challenge Five:
 * Write a function named `createTeaMaker` that return another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea".
 * Store the returned function in variable named `teaMaker` and call it with `"green tea"`.
 */

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType} tea`;
  };
}

const teaMaker = createTeaMaker();
const result = teaMaker("green");
console.log(result);

/** 
 ** Understanding of above challenge:  
 * function createTeaMaker() {
 *  return function (teaType) {
 *   return `Making ${teaType} tea`;
 *  };
 * ?  Above function is higher order function because it's returning function from function 
}

 */