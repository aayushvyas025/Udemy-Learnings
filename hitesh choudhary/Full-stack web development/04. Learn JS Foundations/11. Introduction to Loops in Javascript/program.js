//? Introduction to Loops in Javascript
// - In programming, Looping is the process where we have to perform same task for certain duration.
// - Loops help to avoid the repetition task, instead programming language handle those looping task.
// - Loops follows the DRY 'Don't Repeat yourself' Principal
// - When we have to print 'Hello world' 5 times we can print, but if we want 1000 times than can't print manually, have to use loops

//* In javascript we have multiple loops to perform looping task.
/*  
1. Write a 'while loop' that calculates the sum of all numbers from 1 to 5 and stores the result in a variable 'sum'    
 */

//* while loop
/* Syntax of while loop  :  
? looping_variable ;  
? while(while-loop condition)  { 
* When loop condition becomes true than we can perform looping task  
* logic of loops 
? looping_variable_updation
} 
 */

// let number = 1;
// let sum = 0;
// while (number <= 5) {
//   sum = sum + number;
//   number++;
// }

// console.log(sum); // Output: 15

/*
? Understanding what's happening behind the scene  
 initializing variables 
 let number = 1;  
 let sum = 0;      
 
? understand the looping mechanism  
* looping 1 
while(1 <= 5)  {
  sum = 1 + 0;  
  1++;        
}  

* looping 2 
while(2 <= 5) { 
sum = 1 + 2;  
 2++  
}

* looping 3 
while( 3 <= 5)  { 
sum = 3 + 3; 
 3++; 
}

* looping 4 
while(4 <= 5)  {
sum = 6 + 4; 
4++; 
} 

* looping 5
while(5<=5) {
sum = 10 + 5; 
5++; 
} 

* loop 6 
while(6 <= 5)  {
}
! Here condition becomes false  and loops terminated and execution comes out of looping !!!  
console.log(sum)   Output: 15  
 */

/*  
2. Write a 'while' loop that counts down from 5 to 1 and stores the number in an array named 'countdown'   
 */

let numberTwo = 5;
const countdown = [];

while (numberTwo >= 1) {
  countdown.push(numberTwo);
  numberTwo--;
}

console.log(countdown);


/* 
? Explanation of Loop   
initializing the variable  
let numberTwo = 5; 
let countdown = [];  

? looping logic  
* looping one 
while(5 <= 1)  { 
 countdown.push(5);    //* [5]  
 5--;
}

* looping two  
while(4 <=1)  { 
countdown.push(4); //* [5, 4] 
4--; 
}

* looping three 
while(3 <= 1)  {
countdown.push(3);   //* [5, 4, 3] 
3--;  
}

* looping four 
while(2 <=1)  {
countdown.push(2);  //* [5, 4, 3, 2]
2--; 
}

* looping five 
while(1<=1)  {
countdown.push(1);  //* [5, 4, 3, 2, 1]
1-- 
}

* looping six 
while(0<=1)  {

} 
! here condition becomes false and loops terminated 
console.log(countdown) [5, 4, 3, 2, 1]
  */