//* Operators in Javascript 
// --> Programming languages provide operators to perform operations for manipulating the data.  
// --> In programming we have different type of operators to perform different operations 

//? Arithmetic Operators 
// Arithmetic operators are used to perform basic mathematical operation between two or more operands  

//* What is operators and operands ? 
// Operators are those which we applied on two or more our values example 2 + 3 = 5 so here + 'addition' operator. 
// Operands are our values or data or variable on which we our operator is applied example 2 + 3  here 2 and 3 are operands. 

// Types of Arithmetic Operators 
let valueOne = 15; 
let valueTwo = 20; 

//* Addition arithmetic operator 
const addition = valueOne + valueTwo; 
console.log(addition); // Output: 35 

//* Subtraction arithmetic operator 
let subtraction = valueOne - valueTwo; 
console.log(subtraction); // Output : -5 

subtraction = valueTwo - valueOne; 
console.log(subtraction);  // Output : 5  

//* Multiplication arithmetic operator 
const multiplyResult = valueOne * valueTwo;  // For multiplication asterisk symbol is used in programming 
console.log(multiplyResult); // Output: 300 

//* Division arithmetic operator 
const divisionResult = valueOne / valueTwo;   
console.log(divisionResult); // Output: 0.75  

//* Modulus arithmetic operator 
// Modulus operator is also used for division only but instead of quotient it give output as remainder. 
// For modulus we used percentage symbol  '%' 
const remainder = valueTwo % valueOne; 
console.log(remainder); // Output: 5  

//* Exponential Operator 
// Exponential operator is used to find power of any numbers  for example if we want to find 2 the power 2 which is 2 * 2 = 4  
// For exponential we used double asterisk symbols '**' 

const expoOfTwo = valueOne ** 2;  // Here behind the scene 15 * 15 = 225  
console.log(expoOfTwo);  // Output : 225 

