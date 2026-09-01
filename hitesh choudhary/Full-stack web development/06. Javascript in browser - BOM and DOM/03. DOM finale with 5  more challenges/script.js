//* DOM Finale with 5 more challenges

/**
 * First Challenge: Event Handling in the DOM
 */
//* This .addEventListener method helps to listen events on DOM element
const clickMeBtn = document.getElementById("clickMeButton");

//* Here we add `click` event listener
clickMeBtn.addEventListener("click", function () {
  alert("Hello to Everyone!!!");
});

//* Here we add `mouseover` event listener
// clickMeBtn.addEventListener("mouseover", function(){
//     alert("Mouse over the btn");
// });

//* Here we add `mousedown` event listener
// clickMeBtn.addEventListener("mousedown", function(){
//     alert("Mouse down the btn")
// } )

/**
 * Second Challenge: Event delegation
 */

/**
 * const teaList = document.getElementById("teaList");
 * teaList.addEventListener("mouseover", function(event){
 * console.log(event.target && event.target.matches('.teaItem'));
 *  Event listener has event object.
 *  alert("You selected: " + event.target.textContent);
 * })
 */

/**
 * Third Challenge: Form Handling
 *
 */

const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const feedback = document.getElementById("feedbackInput").value;
  const feedbackDisplay = document.getElementById("feedbackDisplay");
  feedbackDisplay.textContent = `feedback: ${feedback} `;
});

/**
 * Fourth Challenge: DOM Content Loaded
 */

//* We can add 'DOMContentLoaded' event listener will add directly to the document to verify if the DOM elements are loaded in the script or not.

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

/**
 * Fifth Challenge: Manipulate the CSS Classes
 */

const toggleHighlight = document.getElementById("toggleHighlight");
let toggleHighlightBtn = true;

toggleHighlight.addEventListener("click", function () {
  //* First Logic Approach
  // if (toggleHighlightBtn) {
  //   console.log(
  //     "toggle highlight button add toggleHighlight",
  //     toggleHighlightBtn,
  //   );
  //   descriptionText.classList.add("highlight");
  // } else {
  //   console.log(
  //     "toggle highlight button add toggleHighlight",
  //     toggleHighlightBtn,
  //   );
  //   descriptionText.classList.remove("highlight");
  // }
  // toggleHighlightBtn = !toggleHighlightBtn;
  //* Second Logic Approach
  const descriptionText = document.getElementById("descriptionText");
  descriptionText.classList.toggle("highlight");
});

const headingTwoElements = document.getElementsByTagName("h2");
/**
 * * When we are using getElementsByTagName() than we get HTMLCollection which is array type data
 * When we get array type data, we can loop over it.
 */

// for(let idx =0; idx < headingTwoElements.length; idx++) {
//     headingTwoElements[idx].style.backgroundColor = 'red'; 
// }

console.log(headingTwoElements);
