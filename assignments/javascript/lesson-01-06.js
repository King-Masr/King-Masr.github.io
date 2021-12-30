// assignment 01
/* 
  [1] Select Element By Id
  [2] Change Content By textContent
*/
// assignment 02
let myElement = document.getElementById("content");
myElement.textContent = "Age: 15";
// assignment 03
let myOldElement = document.getElementById("text");
let myNewElement = document.getElementById("new");
myNewElement.textContent = myOldElement.textContent;
myOldElement.textContent = "";
