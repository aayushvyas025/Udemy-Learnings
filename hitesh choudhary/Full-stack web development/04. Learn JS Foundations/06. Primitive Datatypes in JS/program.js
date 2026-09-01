//* Primitive Datatypes
//  Primitive Datatypes are those types which are inbuilt and basic fundamental data types in programming world.
//? Types of primitive datatypes
// 1. String
// 2. Boolean
// 3. Undefined
// 4. Number
// 5. Null
// 6. Symbol
// 7. BigInt  'Not much useful'

//* 1.Number Type
// - Number types which helps to store number data in our program
// - All types of numbers {decimal, integer, whole, etc} categorize in broader perspective.
//! -> This primitive types are im-mutable that means we can't change the original value.

// First Approach
let numberOne = 25;
console.log(numberOne); // Output: 25
numberOne = -26;
console.log(numberOne); // Output: -26
numberOne = 25.69;
console.log(numberOne); // Output: 25.69
numberOne = 36;
console.log(numberOne); // Output: 36
console.log(typeof numberOne); // Output: number

//? This first approach is primitive

// Second Example
let newNumber = new Number(12);
//* Here we are using 'new' keyword for creating Number Datatype
console.log(newNumber.valueOf()); // Output: 12
console.log(typeof numberOne); // Output: number
console.log(typeof newNumber); // Output: object

//? Above Second approach is Non-primitive

//* 2. Boolean Type
// - Boolean type are useful to store the boolean flags for conditional purpose in our program
// - Boolean type has only two value true and false

// First Approach
let isAdult = true;
console.log(isAdult); // Output: true
isAdult = false;
console.log(isAdult); // Output: false

// Second Approach
let isCitizen = new Boolean(true);
console.log(isCitizen); // Output: true

//* 3. String Type
// - String type is used to store collection of characters in our program

// First Approach : String Literals
let str = "Aayush Vyas";
console.log(str);

// There are many ways to create strings
// -> Single Quote ' '
str = "Kratik Vyas";
console.log(str);
// -> Double Quote " "
str = "Aayush";
console.log(str);
// -> String literals or String Template
// This string literals give more features like dynamic string data with the help of string interpolation
str = `My name is Aayush and age ${27}`;
console.log(str);

//? Concatenate the Strings
// When we add the two or more strings than it will called concatenate the strings

//* '+' operator to create concatenation of string
let concatenateStr = "A" + "B" + "C";
console.log(concatenateStr); // Output: ABC

//* concat method
let concatenateStrTwo = concatenateStr.concat("D", "E");
console.log(concatenateStrTwo);

// Second Approach: new keyword
let randomStr = new String("John Doe");
console.log(randomStr.valueOf()); 

//? Let's understand the primitive datatypes are immutable  
let numOne = 25;  // variable one 
let numTwo = numOne // variable Two  
// Here we passing the value and reference of numOne  
console.log(numOne); 
console.log(numTwo);    

//* Case One 
// Let add +5 more in numOne 
numTwo +=5; 
console.log(numOne);  // Output = 25   
console.log(numTwo); // Output = 30  
//* So, above  reference  numTwo value is change and numOne value is remain same as 25  

//* Case Two 
// let add +10 more in numTwo 
numOne+=10; 
console.log(numOne);  // Output: 35 
console.log(numTwo); // Output: 30 

//* Here, original numOne variable value is change and numTwo value is remain same as 30     
//? So, when we do this operation and reference both in case original data is not change  

//* 4. Undefined Type 
//  - This type is special use when we don't know which type have to define    
//  - undefined type is mainly used with variables for declaration purpose 

//* Example 
// example 1 
let myVar;  
console.log(myVar); // Output : undefined  
// example 2 
myVar = undefined; // directly also assign the value also 
console.log(myVar); // Output: undefined   

//* 5. Null Type 
// Null type is used to assign empty value in our program and null means also empty 

let myVarOne = null;  // assigning the null value 
console.log(myVarOne);  // Output: null 

//? Interview Question: Difference between undefined and null  
// Both are working same but have some subtle difference 
//* undefined: undefined is used when we don't need value for specific duration   
// Example One: 
let myVarTwo; 
console.log(myVarTwo); // Output: undefined    

// We can define the value later also 
myVarTwo = 255; 
console.log(myVarTwo); // Output: 255 

//* null: null is used when don't want to define any value to variable for our program 
// Example Two: 
 let offer = null;   
console.log(offer)  // Output: null  

//* 6. BigInt Type 
// - BigInt Type is used for bigger numbers type which size are bigger than number. 
// - BigInt is special data type we can perform operation only between them. 

//* Example of BigInt type 
// First Approach  
let numberFirst = 128282773748990n; // add postfix 'n' at last.  
console.log(numberFirst); 

// Second Approach  
numberFirst = BigInt(2477899244789); // Calling the BigInt Function  to create bigint number  
console.log(numberFirst); 

//* Example of operating with bigint   
// let bigIntOperation = numberFirst + 25;  
//! Error: we can't work with  other datatype with BigInt 
let bigIntOperation = 123456689n + BigInt(41587992479);  
console.log(bigIntOperation); // Output: 41711449168n   


//* 7. Symbol 
// - Symbol datatype is used to create uniqueness data value 
// - Symbol is used for uniqueness key-pair value 

const symbolOne = Symbol('Symbol_First'); 
const symbolTwo = Symbol('Symbol_Second'); 

console.log('SymbolOne = ', symbolOne); 
console.log('SymbolTwo = ', symbolTwo);  

//? Let check if the two symbol is equal or not..  
console.log(symbolOne === symbolTwo); // Output: false 


