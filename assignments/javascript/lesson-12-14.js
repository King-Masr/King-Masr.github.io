// assignment 01
let num = 9;
if (num > 10) {
  console.log(`The Number ${num} Is Larger Than 10`);
} else {
  console.log("0" + num);
}
// assignment 02
num = 9;
if (num > 10 && num < 100) {
  console.log("0" + num);
}
if (num < 10) {
  console.log("00" + num);
}
if (num > 100) {
  console.log(num);
}
// assignment 03
num = 9;
let myStr = "9";
let otherNumber = "20";
if (num == myStr) {
  console.log(`${num} Is The Same Value As ${myStr}`);
}
if (num == myStr && num !== myStr) {
  console.log(`${num} Is The Same Value As ${myStr} But Not The Same Type`);
}
if (num != otherNumber && num !== otherNumber) {
  console.log(`${num} Is Not The Same Value Or The Same Type As ${otherNumber}`);
}
// assignment 04
var num1 = 10;
var num2 = 30;
var num3 = "30";
if (num3 >= num1 && num3 != num2) {
  console.log(`${num3} Is Larger Than ${num1} And Not The Same Type As ${num2}`);
}
if (num3 >= num1 && num3 == num2 && num3 !== num2) {
  console.log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type Is Not The Same As ${num2}`)
}
if (num3 != num1 && num3 !== num1 && num3 !== num2) {
  console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`)
}
// assignment 05
var num1 = 11;
var num2 = 10;
var num3 = 11;
var num4 = 33;

// Condition 1
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4
if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5
if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6
if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}