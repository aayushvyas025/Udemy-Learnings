//* Defeat 4 Challenges of Loops in Javascript

/**
 * Challenge One : Write a `do while` loop that prompts a user to enter the favorite tea type until they enter the "stop".
 * Store each tea  type in an array named 'teaCollection'
 */

//* do while loop
/*  Specialty of do-while loop runs when also when condition becomes false and iterate single time default because of exit point condition

? Syntax of do-while loop  
 looping-variable  
? Syntax of do-while loop  
do {
* logic of do-while loop 
* updation of looping variable 
}while(while-loop condition)

*/
// const teaCollection = [];
// let tea;

// do {
//   tea = prompt(`Enter your favourite tea (type stop for finish)`);
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

// console.log(teaCollection); 

/**
 * Challenge Two:  Write a 'do while' loop that adds number from 1 to 3 and stores the result in a variable named 'total'  
 */

let number = 1; 
let total = 0; 
do {
total = total + number;    
number++; 
} while (number <= 3);  

console.log(total); 

/* 
? Understand the execution of loop  
* Initialize variables  
let number = 1; 
let total = 0;  

? understand the while loop  execution 
* looping one 
do{ 
  total = 0 + 1; 
  1++; 
}while(1 <= 3)

* looping two 
do {   
 total = 1 + 2;  
 2++; 
}while(2 <= 3)  

* looping three 
do { 
 total = 3 + 3; 
 3++ 
}while(3 <= 3)  

* looping four 
do { 
  total = 4 + 6 
  4++
}while(4 <= 4)  
? condition becomes false
! loops terminated after condition false  
console.log(total) //* Output: 6   
 */ 

//! do-while loop execute one time default if the condition becomes false 
do {
    console.log("Hello World")
}while(4 <= 3);  
//* Condition is false but  loop runs single time becomes of exit control point. 


/**  
 * Challenge Three: Write a `for` loop that multiples each element in the array `[2,4,6]` by 2 and stores the results in a new array named `multipliedNumbers` 
 */

//* for loop  
/*  For loop mainly used when we know the iteration how much loop should be iterate. 
? Syntax of for-loop  
 for(looping_variable; looping_condition, looping_variable_updation) {
* looping_logic  
 }
 */  

 const numberArray = [2, 4, 6]; 
 const multipliedNumbers = [];  

for(let idx = 0;  idx< numberArray.length; idx++ ) {
  let multipliedNumber = numberArray[idx] * 2; 
  multipliedNumbers.push(multipliedNumber);   
}


console.log("multiplied number = ", multipliedNumbers);   

/**  
 *? Understand the loop code 
 ** looping first 
 * for(idx = 0, 0 < 3; 0++)  {
 *    multipliedNumber = numberArray[0] * 2  //* 2 x 2 = 4 
 *    multipliedNumbers.push(4)  
 * }
 ** looping second
 * for(idx = 1, 1 < 3; 1++)  {
 *    multipliedNumber = numberArray[1] * 2  //* 4 x 2 = 8
 *    multipliedNumbers.push(8)  
 * } 
 * * looping third
 * for(idx = 2, 2 < 3; 2++)  {
 *    multipliedNumber = numberArray[2] * 2  //* 6 x 2 = 12
 *    multipliedNumbers.push(12)  
 * } 
 ** looping fourth 
 * for(idx = 3, 3 <3; 3++) {
 *   
 * } 
 * ! condition becomes false, loop terminated  
 * console.log("multiplied number = ", multipliedNumbers);   //* [4,8,12]
 */

/** 
 * Challenge Four: Write a `for loop` that lists all the cities in the array ['Paris', 'New York', 'Tokyo', 'London']  and stores each cities in new array named cityList 
 */ 

const cities = ['Paris', 'New York', 'Tokyo', 'London']; 
const cityList = []; 

for(let idx = 0; idx < cities.length; idx++) {
  cityList.push(cities[idx]); 
}

console.log("cityList = ", cityList); 

//! for-loop, while loop is entry controlled and 

