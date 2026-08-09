//* Asynchronous Javascript with Event Loop
/** 
 * * What is asynchronous javascript ?  
 * Before the understanding, asynchronous first we can understand synchronous programming 
 * * Synchronous programming 
 *  In synchronous programming, language execute our code line by line in sequential manner 
 * * example of synchronous programming    
 */
console.log("Starting of Code"); 

for(let idx = 0; idx <= 10; idx++) {
    console.log(idx); 
}

console.log("Ending of Code");  

/** 
 * ? Output: 
 *  "Starting of Code" 
 *  1 
 *  2
 *  3
 *  4
 *  5
 *  6
 *  7 
 *  8 
 *  9 
 * 10 
 * "Ending of Code" 
 */

/** 
 * * Asynchronous Programming 
 * -  Every programming language have the feature or ability to delay some operation by it's own or with the help of external methods provided by runtime environment  which in programming world is know as `Asynchronous programming`.
 * 
 * - Javascript inbuilt don't have that feature but it achieve through Javascript Runtime Environment.     
 * - That's javascript feature make program to delay their operations so it achieve both synchronously and asynchronously.  
 * 
 * We need asynchronous operation for   
 *    - Network call over the internet 
 *    - Writing/Reading files from the system disk 
 *    - timer function for timing related task.  
 *    - user-input are also take trick sometime to handle
 * 
 * * Javascript runtime environment have timers method like setInterval and setTimeout method.  
 */ 

function sayHello() {
    console.log("Hello to Everyone"); 
} 

sayHello(); 
console.log("This is synchronous function calling")

// setTimeout function which delays the operation according to time provided in seconds
setTimeout(()  => {
 sayHello();  
 console.log("After the 5 seconds"); 
}, 5000)

setTimeout(() => {
    sayHello(); 
    console.log("After the 3 seconds"); 
}, 3000) 

// setInterval function 
// When we have to perform function at certain interval 

function operate() {
    console.log("Perform operation"); 
}

const intervalId = setInterval(operate, 6000); 

setTimeout(() => {
    // clear interval helps to clear the interval of our setInterval function
    clearInterval(intervalId);
    console.log("Interval function stopped"); 
    // After 18 sec interval stop 
}, 18000)

/** 
 * ! We understand the Javascript don't have the ability to perform asynchronous task so it achieve by the Javascript Runtime environment. 
 * Inside this Javascript runtime environment all the code is manage   
 */ 

//! Let's understand event loop in readme file 









