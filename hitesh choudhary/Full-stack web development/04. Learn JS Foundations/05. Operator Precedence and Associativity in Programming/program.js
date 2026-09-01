//* Operator Precedence and Associativity in Programming 
// Like in Mathematics, some operation takes precedence and mainly if we want to solve any equation or expression with BODMAS 
// Similarly in programming some operators takes precedence from other operators and perform operation first from others 

// Let understand Operator Precedence with Example 
// Higher order precedence operators make the other operators operands of it  

//* Here also BODMAS rule applied and operators precedence according to that only   
// -> B = Brackets have Highest precedence order    () 
// -> O/E = Order or Exponential  
// -> D = Division operator 
// -> M = Multiplication operator 
// -> A = Addition operator 
// -> S = Subtraction 
//? Here Division & Multiplication have the same precedence and addition or subtraction also have same. 

let expression = (2*3) + 2 ** 3 / 10 - 4 + 5; 
// Now above expression solve like this 
// First Bracket (2*3) = 6  because of highest precedence 
// Second Exponential  2**3 = 8  
// Third is division  8/10 = 0.8  
// Fourth is Addition and subtraction but here also new concept applied which is associativity 
// So, 6 + 0.8 - 4 + 5 = 7.8
console.log(expression) // Output: 7.8  

//* Associativity in Operators 
// Associativity happens when we use two operators of same precedence level. 
// Associativity take place from left to right  
 // Example of associativity  
 let associativityExample = 2 - 3 + 5 - 6  + 10; 
 // this expression resolve from left to right because of associativity
 //  =>2 - 3 = -1 + 5 = 4 - 6 = - 2 + 10 = 8 
 console.log(associativityExample); // Output 8  

 associativityExample = 2 * 6 / 4 * 10 / 4;  
 // this expression also solve from left to right 
 // => 2 * 6 = 12 / 4 = 3 * 10 = 30 / 4 = 9  
 console.log(associativityExample); // Output: 7.5 