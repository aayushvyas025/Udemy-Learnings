//? Typecasting in Javascript
// When we convert one data type into another type is called typecasting

//* In programming typecasting was performed in two ways

//* 1st. implicitly  type conversion  'Type Coercion'
// - implicitly type conversion, in which  data convert implicitly by own from one type to another.

//? example String conversion
// - For string, we are using + operator
console.log("1" + 1, typeof ("1" + 1)); // Output: 11 , string
console.log(1 + "1" + 2, typeof (1 + "1" + 2)); // Output: 112 , string
console.log(1 + "2" + "a", typeof (1 + "2" + "a")); // Output: 12a , string
console.log("Aayush" + " Vyas"); // Output: Aayush Vyas

//? example Number conversion
// - For number, we are using also + operator and - operator
// - For number conversion we have to use this two operator just before the our data

//* + operator
console.log(+"123", typeof +"123"); // Output: 123, number
// special case of boolean value
console.log(+true); // Output: 1 internally true value consider as 1 in computers
console.log(+false); // Output: 0 internally false value consider as 0
console.log(+false + 1); // Output: 1
console.log(+true + 1); // Output: 2

// special case of null value
console.log(+null); // Output: 0 , internally null is also 0 because any empty value it's numeric conversion is 0 in programming

//* - operator
console.log(-"23"); // Output: -23

//! Special case when we convert non-numeric value to numeric value
//* Case with non-numeric value
console.log(+"aayush"); // Output: NaN 'Not a Number'
// - When we convert non-numeric type into number type than it returns NaN which means Not a Number
// - In this number type conversion that non-numeric value is not successfully convert into number.

// Find out the typeof non-numeric value number conversion
console.log(typeof +"aayush"); // Output: number, NaN value also have number type only.

//* case with undefined type
console.log(+undefined); // Output

//! Never use implicit type conversion, it's have some weird behavior so, not good practice

//* 2nd. explicitly type conversion 'Type conversion'
// - explicitly type conversion, in which we use explicit methods to convert one type to another.

//? example:
//* String method 
console.log(String(12547), typeof String(12547)); // Output: 12547, string 
// using String() method 
//* Number method 
console.log(Number(false), typeof Number(false)); // Output: 0 , number 
//? NaN case 
console.log(Number(undefined)); // Output: NaN 

//! Explicit type conversion are more preferable because conversion control are of developers hand 