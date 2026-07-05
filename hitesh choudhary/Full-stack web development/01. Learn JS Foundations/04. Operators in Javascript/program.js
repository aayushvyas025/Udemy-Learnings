//* Operators in Javascript 
// --> Programming languages provide operators to perform operations for manipulating the data.  
// --> In programming we have different type of operators to perform different operations 

//? 1st. Arithmetic Operators 
// Arithmetic operators are used to perform basic mathematical operation between two or more operands  

//* What is operators and operands ? 
// Operators are those which we applied on two or more our values example 2 + 3 = 5 so here + 'addition' operator. 
// Operands are our values or data or variable on which we our operator is applied example 2 + 3  here 2 and 3 are operands. 

// Types of Arithmetic Operators 
/*
let valueOne = 15; 
let valueTwo = 20; 
*/  

//* Addition arithmetic operator 
/*  
const addition = valueOne + valueTwo; 
console.log(addition); //? Output: 35 
*/ 

//* Subtraction arithmetic operator 
/* 
let subtraction = valueOne - valueTwo; 
console.log(subtraction); //? Output : -5 
subtraction = valueTwo - valueOne; 
console.log(subtraction);  //? Output : 5  
*/ 

//* Multiplication arithmetic operator 
/*
const multiplyResult = valueOne * valueTwo;  //? For multiplication asterisk symbol is used in programming 
console.log(multiplyResult); //? Output: 300 
*/

//* Division arithmetic operator 
/*
const divisionResult = valueOne / valueTwo;   
console.log(divisionResult); //? Output: 0.75  
*/ 

//* Modulus arithmetic operator 
// Modulus operator is also used for division only but instead of quotient it give output as remainder. 
// For modulus we used percentage symbol  '%' 
/*
const remainder = valueTwo % valueOne; 
console.log(remainder); //? Output: 5  
*/

//* Exponential Operator 
// Exponential operator is used to find power of any numbers  for example if we want to find 2 the power 2 which is 2 * 2 = 4  
// For exponential we used double asterisk symbols '**' 
/*
const expoOfTwo = valueOne ** 2;  //? Here behind the scene 15 * 15 = 225  
console.log(expoOfTwo);  //? Output : 225 
*/

//? 2nd. Unary Operator 
// Unary operators are used to perform operations with single operand only. 

// Types of unary operator  

//* 1st. Assignment Operator 
// Assignment operator in programming is very essential to assign the value to our variables or another identifier in javascript 
// For assignment operator we used equal symbol '=' symbol   
// Example of assignment operator 
// let myValue = 25;  //? Here we are using assignment operator to '=' assign the value. 
// console.log(myValue);  //? Output: 25 

//* 2nd. Increment or Decrement Operators  
// - This increment and decrement operators are mainly used to increment or decrement value by 1. 

//* Increment Operator  
// We used increment operator to increase value by 1 of our operand 
// ++ 'Double Plus' symbol is used to show increment operator 
//* Increment and Decrement operator of two types 
// 1st. prefix increment operator 
//  In postfix increment operator we first increase the value by 1 than evaluate  
// Example of postfix  :- 
// ++myValue; 
// console.log(myValue); //? Output: 26 

// 2nd. postfix increment operator 
// In prefix we first evaluate the previous value than add by 1 
// Example of prefix: 
// console.log(myValue++);  //? Output: 26 
// Now our value is updated by 1 
// console.log(myValue); //? Output: 27   

//* Decrement operator 
// We use decrement operator is used to decrease value by 1 of our operand 
// For decrement operator we used -- 'double minus' symbol

// 1st. prefix decrement operator 
// In postfix decrement operator first we update our value than evaluate  
/*
--myValue;  
console.log(myValue); 
*/

// 2nd. postfix decrement operator 
// In decrement operator we first evaluate previous value than update by 1  
/*
console.log(myValue--); //? Output: 26   
console.log(myValue); //? Output: 25 
*/ 

//* 3rd. Arithmetic Unary operator 
// We can perform the arithmetic unary operation also with single operands 
//* Unary addition operator
// myValue += 3; 
// console.log(myValue);  // Output: 28 
//* Unary subtraction operator 
// myValue -=2; 
// console.log(myValue); // Output: 26 
//* Unary multiplication operator 
// myValue *=4; 
// console.log(myValue); // Output: 104 
//* Unary division operator 
// myValue /=2; 
// console.log(myValue); // Output: 52  
//* Unary exponential operator 
// myValue **=2; 
// console.log(myValue); // Output: 2704
//* Unary modulus operator 
// myValue %=2; 
// console.log(myValue); // Output: 0

//? 3rd. Comparison Operator 
// We used comparison operator to compare between two or more operands. 
// Comparison Operator always return the boolean value true or false 

// Types of Comparison Operator 
let valueOne = 25; 
let valueTwo = 50; 
let valueThree = 50; 
//* Greater than comparison operator 
//  Greater than operator ">" operator is used to find which operand is greater among two or more operands. 
let greaterThanResult = valueOne > valueTwo; 
console.log(greaterThanResult) // Output: false 

greaterThanResult = valueTwo > valueOne; 
console.log(greaterThanResult); // Output: true  
 
greaterThanResult = valueTwo > valueThree; 
console.log(greaterThanResult) // Output: false  

//* Greater than equal too comparison operator 
// Greater than equal too ">=" operator also checks the greater than between two or more operands but here it checks another case which is equal too. 
// If Both operands are similar than it returns true boolean value 

// case 1 
let greaterThanEqualResult = valueOne >= valueTwo; 
console.log(greaterThanEqualResult); // Output: false 

// case 2  
greaterThanEqualResult = valueTwo >= valueOne; 
console.log(greaterThanEqualResult); // Output: true  

// case 3 - if both operands 
greaterThanEqualResult = valueTwo >= valueThree; 
console.log(greaterThanEqualResult); // Output: true  

//* Smaller than comparison operator 
// Smaller than "<" operator is used to check smaller operand among two or more than two. 

let smallerThanResult = valueOne < valueTwo; 
console.log(smallerThanResult);  // Output: true 

smallerThanResult = valueTwo < valueOne; 
console.log(smallerThanResult) // Output: false 

//* Smaller than equal too comparison operator 
// Similar like greater than equal too this smaller than equal too "<=" operator is used to check smaller than and equal too between operands 

// case one 
let smallerThanEqualResult = valueOne <= valueTwo; 
console.log(smallerThanEqualResult); // Output: true 

// case two 
smallerThanEqualResult = valueTwo <= valueOne; 
console.log(smallerThanEqualResult); // Output: false  

// case three 
smallerThanEqualResult = valueTwo <= valueThree; 
console.log(smallerThanEqualResult); // Output: true  

//? typeof operator 
// typeof operator is in-build method to find the type of data or value , variables 
// example of  typeof operator 
const str = 'Aayush'; 
console.log(typeof valueOne); // Output: Number 
console.log(typeof valueTwo); // Output: Number 
console.log(typeof str); // Output: String 

//* Equality comparison operator 
// This 