// assignment 01
function welcome(name, type = "") {
  if (type == "Male") console.log("Hello Mr " + name);
  else if (type == "Female") console.log("Hello Miss " + name);
  else console.log("Hello " + name);
}
welcome("Osama", "Male");
welcome("Eman", "Female");
welcome("Sameh");
// assignment 02
function calc(num1, num2, type = "add") {
  if (type == "add") console.log(num1 + num2);
  else if (type == "subtract") console.log(num1 - num2);
  else if (type == "multiply") console.log(num1 * num2);
}
calc(20, 30);
calc(20, 30, "add");
calc(20, 30, "subtract");
calc(20, 30, "multiply");
// assignment 03
function getAge(age) {
  if (age > 100 || age < 10) {
    console.log("Age is out of range");
  } else {
    console.log(age * 12 + " Months");
    console.log(age * 48 + " Weeks");
    console.log(age * 360 + " Days");
    console.log(age * 8640 + " Hours");
    console.log(age * 518400 + " Minutes");
    console.log(age * 31104000 + " Seconds");
  }
}
getAge(15);
// assignment 04
function getStatus(...parameters) {
  let name = "";
  let age = 0;
  let type = false;
  let message = "";
  for (let i = 0; i < 3; i++) {
    if (typeof parameters[i] == "string") name = parameters[i];
    else if (typeof parameters[i] == "number") age = parameters[i];
    else if (typeof parameters[i] == "boolean") type = parameters[i];
  }
  if (type == true) message = "You Are Available For Hire";
  else message = "You Are Not Available For Hire";
  console.log(`Hello ${name}, Your Age Is ${age}, ${message}`);
}
getStatus("Osama", 38, true);
getStatus(38, "Osama", true);
getStatus(true, 38, "Osama");
getStatus(false, "Osama", 38);