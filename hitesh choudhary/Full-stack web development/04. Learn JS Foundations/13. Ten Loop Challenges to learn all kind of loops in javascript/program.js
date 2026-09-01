//* Ten Loop Challenge to learn all kind of loops in javascript

/**
 * Challenge One: Write a for loop that loops through an array ['green tea', 'black tea', 'chai', 'oolong tea'] and stops the loop when it finds 'chai'  store all the teas before the 'chai' in a new array named 'selected Tea'
 */

const chaiMenu = ["green tea", "black tea", "chai", "oolong tea"];
const selectedTea = [];

for (let idx = 0; idx < chaiMenu.length; idx++) {
  if (chaiMenu[idx] === "chai") {
    break;
    //! when we are using 'break' keyword it means terminate the loop and start execution out-side of the loop scope
  }
  selectedTea.push(chaiMenu[idx]);
}

console.log("selectedTea = ", selectedTea); // selectedTea =  [ 'green tea', 'black tea' ]

/**
 * Challenge Two: Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skip "Paris". Store the other cities in a new array named `visitedCities`.
 */

const cities = ["London", "New York", "Paris", "Berlin"];
const visitedCities = [];
for (let idx = 0; idx < cities.length; idx++) {
  if (cities[idx] === ("Paris" || "paris")) {
    continue;
    //! This continue keyword used to skip the specific iteration in our loop
  }
  visitedCities.push(cities[idx]);
}

console.log("visitedCities = ", visitedCities); // Output: visitedCities =  [ 'London', 'New York', 'Berlin' ]

/**
 * Challenge Three: Use of `for-of` loop to iterate through the array [1, 2, 3, 4,5] and stop when the number '4' is found.
 * Store the numbers before the '4' in an array named 'small number'
 */

const numbers = [1, 2, 3, 4, 5];
const smallNumber = [];

//! Here we are using for-of loop
//* for-of loop
// - This for-of loop is more abstracted and iteration control by javascript only.
// - we don't iterate manually in for-of loop

/** 
 *? Syntax of for-of loop  
* for(let items,index of array){ 
** loop logic 
 }
 */

for (let number of numbers) {
  if (number === 4) {
    break;
  }
  smallNumber.push(number);
}

console.log("Small number = ", smallNumber); // small number = [ 1, 2, 3 ]
//! This for-of loop mainly for array object only.

/**
 * Challenge Four: Use a `for-of` loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea".
 * Store the other teas in an array named `preferredTeas`.
 */

const teaLists = ["chai", "green tea", "herbal tea", "black tea"];
const preferredTeas = [];

for (let tea of teaLists) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}

console.log("preferred teas = ", preferredTeas); // Output : preferred teas =  [ 'chai', 'green tea', 'black tea' ]

/**
 * Challenge Five: Use a `for-in` loop to loop through an object containing city populations
 * Stop the loop when the population of `Berlin` is found and store all previous cities 'populations in a new object named `cityPopulations`
 *
 * const citiesPopulation = {
 *    "London":8900000,
 *    "New York":8400000,
 *    "Paris":2200000,
 *    "Berlin":3500000
 * }
 */

const citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

//! We can't iterate the object directly like arrays and can't looping through arrays because it's can't have indexing so we can do this.....

//? For looping objects javascript have special loop
/**
 ** for in loop
 *  for(let key in object)  {
 **   logic of for-in loop
 * }
 *? This for-in loop help to loop over the keys of an object
 */

const cityPopulations = {};

// for-in loop
for (let city in citiesPopulation) {
  // Berlin check
  if (city === ("Berlin" || "berlin")) {
    continue;
  }
  cityPopulations[city] = citiesPopulation[city];
  //*    key = value  of new object citiesPopulations
}

console.log(cityPopulations); // Output: { London: 8900000, 'New York': 8400000, Paris: 2200000 }

/**
 * Challenge Six: Use a `for-in` loop to loop through the object containing city populations
 * Skip any city with a population below 3 million and store the rest of in a new object `largeCities`
 * let worldCities = {
 * "Sydney":5000000,
 * "Tokyo":"9000000",
 * "Berlin":"3500000",
 *  "Paris":2200000
 * }
 */

const worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

const largeCities = {};

for (let cities in worldCities) {
  //* check of 3 million
  if (worldCities[cities] > 3000000) {
    largeCities[cities] = worldCities[cities];
  }
}

console.log(largeCities); // Output: { Sydney: 5000000, Tokyo: 9000000, Berlin: 3500000 }

/**
 * Challenge Seventh: Write a `forEach` loop that's iterate through the array ['earl grey', 'green tea', 'chai', 'oolong tea'].
 * Stop the loop when 'chai' is found, and store all. previous tea types in an array named `availableTeas`.
 */

//! forEach loop
/**
 * forEach loop:
 *  -> This loop is sugar syntax of for-of loop mainly implement for arrays method
 *  -> This loop will iterate every index by it's own.
 * ? Syntax of an forEach
 * array.forEach((items, index) => {
 **  logic of forEach loop
 * })
 * ! Inside this forEach method we are using function which is reusable block of code to perform specific task.
 */

const teasMenu = ["earl grey", "green tea", "chai", "oolong tea"];
const availableTeas = [];

teasMenu.forEach((tea) => {
  if (tea === "chai") {
    // break; //! we can't put break here , this break statement is meant for loop
    //* instead we have to use return statement
    return;
    //? functions are returning something also default undefined
  }
  availableTeas.push(tea);
});
console.log(availableTeas);
//! This forEach  loop iterate over all the elements of an array

/**
 * Challenge Eight: Write a `forEach` loop that iterates through the array ['Berlin', 'Tokyo', 'Sydney', 'Paris' ] , skip `Sydney` and store the other cities in a new array named `traveledCities`
 */

const citiesBucketList = ["Berlin", "Tokyo", "Sydney", "Paris"];

const traveledCities = [];

citiesBucketList.forEach((city) => {
  if (city === ("Sydney" || "sydney")) {
    // continue //! Here also we can't use the continue statement because continue statement meant for loops only.
    return;
  }
  traveledCities.push(city);
});

console.log(traveledCities); // Output: [ 'Berlin', 'Tokyo', 'Paris' ]

/**
 * Challenge Nine: Write a `for` loop that iterates through the array [2,5,7,9].
 * Skip the value `7` and multiply the rest by 2. Store the results in a new array named doubleNumbers
 */

const numb = [2, 5, 7, 9];
const doubleNumbers = [];

for (let idx = 0; idx < numb.length; idx++) {
  if (numb[idx] === 7) {
    continue;
  }
  doubleNumbers.push(numb[idx] * 2);
}

console.log(doubleNumbers); // Output: [ 4, 10, 18 ]

/**
 * Challenge Tenth: Use of for-of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea","herbal tea"] and stop when the length of the current tea name is greater than 10.
 * Store the teas iterated over an array named `shortTeas` 
 */

const teasMenuList = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbal tea",
];
const shortTeas = [];

for (let tea of teasMenuList) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}

console.log("shortTeas = ", shortTeas);  // Output: shortTeas =  [ 'chai', 'green tea', 'black tea', 'herbal tea' ]