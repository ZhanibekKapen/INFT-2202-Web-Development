// Task 1: Use JavaSCript to put a red border around our paragraph

// Select the <p> element and store it inside a variable 
// console.dir(document);
const paragraphElement = document.querySelector("p");

// console.log(paragraphElement);
// Execute a method to modify that <p> element and change its border to red 
paragraphElement.style.border = "2px solid red";