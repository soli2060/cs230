// hello.js

// Initialize a global variable
var clickCount = 0;

// Create a function named hello
function hello() {
  // Increment the clickCount variable
  clickCount = clickCount + 1;

  // Display a popup alert with the updated click count
  alert("You clicked the button " + clickCount + " times");
}
