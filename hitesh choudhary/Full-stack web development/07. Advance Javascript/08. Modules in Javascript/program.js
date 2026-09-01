//* Modules in Javascript 
/** 
 * ? Modules in Javascript 
 *  - Modules are introduced in ES6 Ecmascript version, which helps to write javascript code to broken down in multiple files. 
 * - We can create multiple files to do import-export of our js file code 
 */ 

// examples of module  
// Here we use export statement so we can export those functions 
// export function addTwoNumbers(one, two) {
//     return one + two; 
// } 

// export function diffTwoNumber(one, two) {
//     return one - two; 
// } 

// export function multiplyTwoNumber(one, two) {
//     return one * two; 
// } 

// Here we are using default export statement for function divideTwoNumber 
// export default function divideTwoNumber(a, b) {
//     return a/b; 
// } 

/** 
 * ? Common JS  
 * We have also have another method which is older way to import-export the multiple javascript files.
 */

function greetToEveryone() {
    console.log("Hello to Everyone !!!"); 
}

function powerOfNumber(number, power) {
    console.log(number ** power)
} 

// for common js exports we have to use module.exports 
module.exports = {greetToEveryone, powerOfNumber}; 

