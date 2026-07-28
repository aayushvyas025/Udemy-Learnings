//* Conditionals
//? What are conditional statements ?
// - conditional statements are used to create our program more controllabel
// - With conditionals statements we can create our program more logical hold
// - With help of conditional statements we can add conditional check on it.
// - After conditional checks we have multiple routes what logic we have to execute in our program or we can add multiple checks to

//? Let's understand conditional statement with challenges
//* 1st. Check if the number is greater or not.

// let's two variable will be
// let numberOne = 25; // 25
// let numberTwo = 30; // 30

// For conditional statement logic we are using if-else statement

/* 
* if statement 
 - if statement is used for conditionals  statements   
 - if-statement have the conditional check if the condition becomes true than we can enter in the if-block otherwise can't. 
? Syntax of if-statement 
if(<if-condition>) {
   when the if-conditional becomes true than we can enter if-block otherwise can't 
 }  
*/

// case one
// const numOneIsSmallerThanNumTwo = numberOne < numberTwo;
// if (numOneIsSmallerThanNumTwo) {
//   console.log(`${numberOne} is smaller than ${numberTwo}`);
// }
// here condition becomes true and enter inside the if-statement.

// case two
// const numOneIsGreaterThanNumTwo = numberOne > numberTwo;
// if (numOneIsGreaterThanNumTwo) {
//   console.log(`${numberOne} is greater than ${numberTwo}`);
// }
// here condition becomes false and can't enter inside the if-statement.

/*
//* if-else statement  
 we are using if-else statement, for conditional statements  
if(<conditional-statement>)  {
    when if-statement condition becomes true than we can enter this block.
} else {
  - when if-condition are not true than enter in this else block  
  - else block is secondary  
}   
*/
/*
if (numberOne > numberTwo) {
  console.log(`${numberOne} is greater than ${numberTwo}`);
} else {
  console.log(`${numberTwo} is greater than ${numberOne}`);
}
*/

//* 2nd. Checking if a string is equal to another string
// let strOne = "something";
// let strTwo = "something";

// strTwo = "random stuff";
/*
if (strOne === strTwo) {
  console.log(`strings are equal to each other`);
} else {
  console.log(`strings are not equal to each other`);
}
*/

//* 3rd. Check if the variable is number or not.
let variable = 25;
variable = '25';
variable = true;
if (typeof variable === "number") {
  console.log(`Given variable contains number`);
} else {
  console.log(`Given variable does not contain number`);
}

//* 4th. Checking if the boolean value is true or false 

let isLogin = true;  
isLogin = false; 

if(isLogin) {
    console.log('User is logged in');
}else {
    console.log('User is not logged in')
}  

//* 5th. Checking if an array is empty or not. 
let myArr = []; 

// To check if the array is empty or not we need to check length of an array. 
//? For that we need to use array's .length property 
if(myArr.length === 0) {
    console.log(`array is empty`);
}else {
    console.log(`array is not empty`);
}

