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

/* Challenge 6: 
You have an array named 'popularTeas' containing 'green tea',  'oolong tea',  and 'chai'. 
Create the a soft copy of this array named 'softCopyTeas'  
 */

const popularTeas = ['green tea', 'oolong tea', 'chai'];  
const softCopyTeas = popularTeas; 
console.log("popularTeas = ",popularTeas); // Output: ['green tea', 'oolong tea', 'chai'];  
console.log("softCopyTeas = ",softCopyTeas);  // Output: ['green tea', 'oolong tea', 'chai'];

//? soft-copy is that which also change according to original data structure change  
popularTeas.pop(2); 
console.log("popularTeas = ", popularTeas);  // Output: [ 'green tea', 'oolong tea' ] 
console.log("softCopyTeas = ",softCopyTeas); // Output: [ 'green tea', 'oolong tea' ]  

/* Challenge 7: 
You have an array named 'topCities' containing 'Berlin', 'Singapore', and 'New York'. 
Create a hard copy of this array named hardCopyCities  
 */  

const topCities = ['Berlin', 'Singapore', 'New York']; 

const hardCopyTopCities = new Array('Berlin', 'Singapore', 'New York');  
//? We create a separate array with unique original memory space with 'new' keyword. 
console.log("top cities original ", topCities); 
console.log("hard copy top cities ", hardCopyTopCities); 

// pop out one element from original top cities array 
topCities.pop(); 
console.log("top cities original ", topCities); 
console.log("hard copy top cities ", hardCopyTopCities);   

//! Another method is Spread operator  '...' 
//* We have spread operator which spread non-primitive data into another non-primitive  
const hardCopyTopCitiesSecond = [...topCities]; 
console.log(hardCopyTopCitiesSecond); 

// pop out another element from original top cities array 
topCities.pop(); 
console.log("top cities = ", topCities); // Output:  [ 'Berlin' ] 
console.log("hard copy top cities second = ", hardCopyTopCitiesSecond);  //  Output:  [ 'Berlin', 'Singapore' ]  

/* Challenge 8: 
You have an arrays: 'europeanCities' containing 'Paris' and 'Rome' and 'asianCities' containing 'Tokyo' and 'Bangkok'. Merge these two arrays named worldCities  
  */ 

//* europeanCities array 
const europeanCities = ['Paris', 'Rome'];  
//* asianCities array 
const asianCities = ['Tokyo', 'Bangkok'];  

// We have couples of method to merge our array 
//? spread operator '...'  
const worldCities = [...europeanCities, ...asianCities]; 
console.log("worldCities  = ",worldCities);  

//? array's concat method 
// we have .concat method to concat two arrays 
const worldCitiesSecond = europeanCities.concat(asianCities);  
console.log("worldCitiesSecond = ",worldCitiesSecond);  

/* Challenge 9: 
You have an array named 'teaMenu' containing 'masala chai',  'oolong tea',  'green tea', and 'earl grey'. 
Find the length of the array and store it in a variable named 'menuLength'    
 */ 

const teaMenu = ['masala chai', 'oolong tea', 'green tea', 'earl grey']; 
const menuLength = teaMenu.length; 
console.log("teaMenu = ", teaMenu); 
console.log(`menu length is ${menuLength}`) // Output : menu length is 4 

/* Challenge 10: 
You have an array named 'cityBucketList' containing 'Kyoto', 'London', 'Cape town', and 'Vancouver' 
Check if 'London' is in the array and store the result in a variable named 'isLondonInList'    
 */
const cityBucketList = ['Kyoto', 'London', 'Cape Town', 'Vancouver']; 

//? To check if the array have any specific element in it or not for that we have to use .includes method 
let isLondonInList = cityBucketList.includes('London' || 'london');  //* .includes 
console.log(isLondonInList); // Output: true 