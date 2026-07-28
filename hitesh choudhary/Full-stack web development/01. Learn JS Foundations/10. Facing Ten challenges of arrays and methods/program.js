//* Facing Ten challenges of arrays and methods 

/* 
Challenge - 1:  
Declare an array named "teaFlavours" that contains the string "green tea", "black tea", and "oolong tea". 
Access the first element of the array and store it in a variable named 'firstTea'  
 */ 

//? First way 
const teaFlavours = ["green tea", "black tea", "oolong tea"];  

// let access the first element :  
const firstTea = teaFlavours[0];  
console.log(firstTea); // Output: green tea 

//? Second way  
// create array with new keyword 
const teaFl = new Array("green tea", "black tea", "oolong tea"); 
// console.log(teaFl);     
const firstTeaFl = teaFl[0]; 
console.log(firstTeaFl);  

/* 
Challenge - 2:   
Declare an array named 'cities' containing  "London", "Tokyo", "Paris", and "New York". Access the third element in the array and store it in a variable name 'favoriteCity' 
 */  

const cities = ["London", "Tokyo", "Paris", "New York"];  

let favoriteCity = cities[2];  // access the 2 element from the index  because indexing starting from 0 
console.log(favoriteCity); 

/* 
Challenge - 3: 
You have an array named 'teaTypes' containing "herbal tea", "white tea", and "masala chai", change the second element of the array to the 'jasmine tea'  
 */ 

const teaTypes = ['herbal tea', 'white tea', 'masala chai'];  
teaTypes[2] = 'Jasmine tea'; 
console.log(teaTypes);  

/* Challenge - 4:    
 Declare an array named 'citiesVisited' containing  "Mumbai", "Sydney".   
 Add "berlin", to the array using the 'push' method 
 */  

const citiesVisited = ["Mumbai", "Sydney"];  
// above we created citiesVisited array   
//? With the help og push method we can add element from the last of an array 
citiesVisited.push("Berlin"); 
console.log(citiesVisited);   

//? another method 
//  we have another method with the help of index we can create the array elements 
/*  
citiesVisited[2] = "Berlin"; 
console.log(citiesVisited);  
*/ 

/* Challenge 5:    
You have an array named 'teaOrders' with 'chai', 'iced-tea', 'matcha' and 'earl grey'. 
Remove the last element of the array using 'pop' method and store it in a variable named 'lastOrder' 
*/ 

let teaOrders = ['chai', 'iced-tea', 'matcha', 'earl-grey'];  

//? With the help of pop method we can remove the last element  of an array.  
const lastOrder = teaOrders.pop(3);
console.log(lastOrder); 