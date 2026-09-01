//* Datatypes, variables and constant in Javascript

/* 
When we do programming or creating software for that we need to store some different type of data for processing our program or software so every programming language provides some different types of data which we classified into different types which called data types. 
*/

//? Datatypes
// Javascript have mainly 7 types of datatypes
// - string : string are groups of characters
console.log("This is String type");
// - number : js is dynamically typed language so every types of number decimal, integer are comes in broad-type number only.
console.log("This is number type :", 2, 100, 500, -2.5, -200);
// - boolean : boolean types are mainly to store or decision making flags for example true and false
console.log("This is the boolean types", true, "and", false);
// - Bigint : Bigint types is also used to store the numbers only but very big in size compare to number types and we don't perform any type-casting or coercion with other types and operations also perform only with the big-int types.
console.log("This is Bigint type ", BigInt(123457651118861)); // First way
console.log("This is Bigint type ", 12364688276616178949n); // Second way
// - undefined : when we don't assign value to variables or for a particular duration we don't define the datatypes than it called undefined.
console.log("This is undefined type:", undefined);
// - null : null means empty no value
console.log("This is null type:", null);
// - Symbol : symbol is used for uniqueness and immutable for object properties mainly used to create uniqueness and secure object properties
console.log("This is symbol types", Symbol("Status"));

//! This above datatypes are basic types in javascript  are primitive types which are inbuilt and immutable types we can't change the original types. Primitive types are used to store simple type of data

//* Non-primitive types or Derived Datatype
// - This type are derived from the  primitive types so that's why also called derived datatype
// - We used non-primitive types to store complex data types

// Example of non-primitive types
// - Arrays: arrays are used to store more than single data in collection with adjacent manner.

console.log(["Aayush", "Vyas", "Saijal", "Vyas"]);

// - Object : In Javascript every things is object mainly, javascript is also used to store multiple data in keys and pairs manner which called properties of object
console.log({ firstname: "Aayush", lastname: "Vyas", isAdult: true });
/**
 * Above output is look like this
 *  {
 *    'key'  :  'value'
 *   firstname:"Aayush",
 *    'key' : 'value'
 *   lastname: "vyas",
 *   'key' : 'value'
 *   isAdult: true
 *
 * } */

//* Variables
// Variables are basic storage units in programming which used to stored our data
// Variables are empty container to stores data in program memory block and assign the address to it which we access with specific name or identifier to use for updating it.

//* In javascript we have 3 ways to create the Variables

//* 1st. var
// --> Var is the oldest way to create variables in javascript.
var myName = "Aayush Vyas"; // variable of myName

// --> We can access variable also with the identifier
console.log(myName); // Output : Aayush Vyas

// --> Var keyword variables always create the global scope or function scope
{
  //* When we used curly braces than we create block scope
  // when we create the variable with var keyword than we can access the variable in block scope also
  console.log(myName);
}

// --> We can reassign the variable but re-declare also
// Variable can re-assign also
myName = "Kratik Vyas"; // Here we re-assign the variable
console.log(myName);

// var keyword variable is also re-declare also....
var myName = "Aayush";
console.log(myName);

//* 2nd. let
//--> let keyword is also used to create variable and it is newer way which introduce in ES6 version
let name = "Aayush Vyas";
console.log(name);
// --> let keyword variable create block scope variable means variable accessible to that block only

{
  console.log(name); // Output : Aayush Vyas
  //? So javascript works in lexical scope so variables in parent's scope access by the children scope

  let nameTwo = "Rahul Bajaj";
}

// access the nameTwo variable here
// console.log(nameTwo); //! error - nameTwo is not defined

// --> let keyword variable also re-assign the value but not re-declared
name = "Rahul Singh"; //* re-assign the value
console.log(name);

/**
 * ! We can't re-declare the variable so it give error to us !!! 
let name = "Utkarsh Rathore"; 
console.log(name)
*/

//* const keyword
// const keywords mainly used to create constant variable which is introduce in ES6 Version

// Constants have some rules to create otherwise it give error to us.

// 1st. always initialize the constant not just declare it otherwise it give error
const userId = 245789; //* When we assign the value to constant or variables than this called initialization of variable
console.log(userId);
/**
 * const employeeId; //! When we just declare the variable than this called declaration of variable. 
console.log(employeeId)
*/

// 2nd. We can't re-assign the constants it will be remain same as through the program 
/** 
 * ! Re-assignment give error 
 * userId = '_id12334897643082'; 
 * console.log(userId);  
 */

// --> const keywords also create the block scope also 
{
    console.log(userId); 
   const isAdult = true; 
   console.log(isAdult); 
}

// console.log(isAdult); //! We can't access the isAdult constant because not defined in this global scope 

//* let, const are newer way to create variables and constant which nowadays used to create variables  
//* const are also used to create variables only but it have some flaws like redeclaration or function scope 