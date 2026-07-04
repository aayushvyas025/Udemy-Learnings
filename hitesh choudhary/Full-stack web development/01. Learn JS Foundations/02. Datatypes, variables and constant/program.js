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

//* Variables
// Variables are basic storage units in programming which used to stored our data
// Variables are empty container to stores data in program memory block and assign the address to it which we access with specific name or identifier to use for updating it. 
