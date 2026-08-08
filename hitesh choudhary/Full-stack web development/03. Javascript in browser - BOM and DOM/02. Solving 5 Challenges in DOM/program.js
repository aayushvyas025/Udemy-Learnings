//* Solving 5 Challenges in DOM

//?  Let's learn DOM Manipulation with Challenges
/**
 *  In introduction we understand Javascript Runtime environment, we have some features to access html elements or window objects so to manipulate them.
 *
 * * DOM give access to DOM elements and event listener which associated with DOM elements and those all things are access by javascript.
 */

/**
 * Challenge First: Change the paragraph text when we click on the button.
 *
 */

/**
 ** document object we have the methods we discuss to target and access the DOM elements
 *  - for accessing the elements we have direct getElementByTagName()
 *  - for accessing the elements with id we have .getElementById()
 *  - for accessing the elements with class we have the .getElementByClassName()
 */
const firstChallengePara = document.getElementById("myParagraph");
const buttonFirst = document.getElementById("changeTextButton");
// Here we are using .getElementById(), to target paragraph and button

buttonFirst.addEventListener("click", function () {
  firstChallengePara.textContent = "Paragraph is changed!";
});

/**
 * Challenge Second: Highlight the first city
 */
/**
 * ? Here we used .querySelector() method of document which functionality is same to target DOM elements
 */
const citiesList = document.querySelector("#citiesList");
const highlightButton = document.querySelector("#highlightFirstCity");

highlightButton.addEventListener("click", function () {
  // We have to grab firstChildElement from our list
  const firstCity = citiesList.firstElementChild;
  firstCity.classList.add("highlight");
});

/**
 * Challenge Third: Change the order from latte to Espresso
 */

const coffee = document.getElementById("coffeeOrder").firstElementChild;
const changeOrder = document.getElementById("changeOrder");

changeOrder.addEventListener("click", function () {
  coffee.textContent = "Espresso";
});

/**
 * Challenge Fourth: Creating and Inserting a new Element
 */
const addNewItem = document.getElementById("addNewItem");
const shoppingList = document.getElementById("shoppingList");
//* Here with the help of .createElement() method we create new elements 
const newItem = document.createElement('li'); 
addNewItem.addEventListener("click", function(){
   newItem.textContent = "Eggs"; 
  //* Here we appendChild method to shoppingList
   shoppingList.appendChild(newItem); 
})

/** 
 * Challenge Fifth: Removing DOM Elements
 */

const removeTaskList = document.getElementById('removeTaskList'); 
const taskList = document.getElementById('taskList'); 

removeTaskList.addEventListener('click', function() {
  const lastTask = taskList.lastElementChild;  
  // Here we target lastElementChild property and remove the last-task
  lastTask.remove(); 
}) 

