// assignment 01
let myNumber = 9;
if (myNumber > 10) {
  console.log(`The Number ${myNumber} Is Larger Than 10`);
} else {
  console.log("0" + myNumber);
}
// assignment 02
myNumber = 9;
if (myNumber > 10 && myNumber < 100) {
  console.log("0" + myNumber);
}
if (myNumber < 10) {
  console.log("00" + myNumber);
}
if (myNumber > 100) {
  console.log(myNumber);
}
// assignment 03
myNumber = 9;
let myStr = "9";
let otherNumber = "20";
if (myNumber == myStr) {
  console.log(`${myNumber} Is The Same Value As ${myStr}`);
}
if (myNumber == myStr && myNumber !== myStr) {
  console.log(`${myNumber} Is The Same Value As ${myStr} But Not The Same Type`);
} else if (myNumber != otherNumber && myNumber !== otherNumber) {
  console.log(`${myNumber} Is Not The Same Value Or The Same Type As ${otherNumber}`);
}