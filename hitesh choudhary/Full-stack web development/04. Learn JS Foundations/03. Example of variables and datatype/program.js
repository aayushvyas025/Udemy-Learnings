//* Example of Variable and Datatypes

//? 1st. Number Datatype
const myAge = 27;
console.log(myAge);

//? 2nd.String Datatype
 let myName = 'Aayush Vyas';  
 console.log(myName); 

// In javascript we have 3 ways to create strings
//* 1. Single quote
 myName = 'Aayush Vyas'; 
console.log(myName);  

//* 2. Double quote
/**
 * myName = "Aayush";
 * console.log(myName);
 */

//* 3. String template or Template literals
// Here we used the backticks to create string and we also create that dynamic also by adding expression with the help of string interpolation  with the help of dollar symbol '$'
/**
 * myName = `${myName} Vyas`;
 * console.log(myName);
 */

//? 3rd. Boolean Datatype
let isAdult = true;
console.log(isAdult); // Output: true
// isAdult = false;
// console.log(isAdult); // Output: false

//? 4th. Bigint Datatype
let biggerNum = BigInt(11237364647484737278);
console.log(biggerNum);
biggerNum = 8976635355227828n;
console.log(biggerNum);

//? 5th. Undefined Datatype
let offer;
console.log(offer); // Output: undefined

//? 6th.  Null Datatype
let totalProduct = null;
console.log(totalProduct);

//? 7th. Symbol
const employmentStatus = Symbol("employmentStatus");
console.log(employmentStatus);

const userInfo = {
  name: myName,
  age: myAge,
  adult: isAdult,
  employmentStatus: false,
};

console.log(userInfo);