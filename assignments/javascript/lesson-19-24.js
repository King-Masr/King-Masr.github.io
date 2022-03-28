// assignment 01
let day = document.getElementById("day");
day.onchange = function () {
  switch (
    day.value
      .replace(day.value.charAt(0), day.value.charAt(0).toUpperCase())
      .trim()
  ) {
    case "Friday":
    case "Saturday":
    case "Sunday":
      console.log("No Available Appointments");
      break;
    case "Monday":
    case "Thursday":
      console.log("From 10:00 AM To 5:00 PM");
      break;
    case "Tuesday":
      console.log("From 10:00 AM To 6:00 PM");
      break;
    case "Wednesday":
      console.log("From 10:00 AM To 7:00 PM");
      break;
    default:
      console.log("Its Not A Valid Day");
      break;
  }
};
// assignment 02
let theNumber = 10;
function changeNumber() {
  theNumber = 20;
}
changeNumber();
console.log(theNumber);
// assignment 03
var theName = "Osama";
function changeName() {
  changeNameAgain();
}
function changeNameAgain() {
  theName = "Sayed";
}
changeName();
console.log(theName);
// assignment 04
let clicker = document.getElementById("clicker");
clicker.onclick = function () {
  let myDiv = document.createElement("div");
  myDiv.innerText = "Click Me";
  document.body.appendChild(myDiv);
}
clicker.ondblclick = function () {
  let myDiv = document.createElement("div");
  myDiv.innerText = "You Double Clicked The Mouse";
  document.body.appendChild(myDiv);
}
// assignment 05
let myInput = document.getElementById("my-input");
let myResult = document.getElementById("my-result");
myInput.oninput = function () {
  myResult.innerText = myInput.value;
}
window.onload = function () {
  console.log("Page Is Loaded");
}
// assignment 06
let mySelect = document.getElementById("my-select");
mySelect.onchange = function () {
  if (mySelect.value < 10) {
    console.log("00" + mySelect.value);
  } else if (mySelect.value > 10 && mySelect.value < 100) {
    console.log("0" + mySelect.value);
  } else {
    console.log(mySelect.value);
  }
}