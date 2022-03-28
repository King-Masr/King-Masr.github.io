// assignment 01
let mySkills = ["html", "css", "javascript", "php", "mysql"];
console.log("First Skill => " + mySkills[0]);
console.log("First Skill => " + mySkills.shift());
console.log("Last Skill => " + mySkills[3]);
console.log("Last Skill => " + mySkills.pop());
if (typeof mySkills == "object") {
  console.log("This Is Array");
}
if (Array.isArray(mySkills) == true) {
  console.log("This Is Array");
}
console.log(["html", "css", "javascript", "php", "mysql"]);
// assignment 02
let myFriends = ["Ahmed", "Sayed", "Ali", "Mahmoud", "Sameh"];
console.log(myFriends.length);
console.log(myFriends);
myFriends.pop();
myFriends.pop();
console.log(myFriends);
// assignment 03
let myCountries = ["Egypt", "Palestine", "Syria", "Iraq", "KSA"];
myCountries[myCountries.length] = "Qatar";
console.log(myCountries);
console.log(myCountries.join(" | "));
// assignment 04
let myWebs = [
  "https://elzero.org/",
  "https://www.google.com/",
  "https://king-masr.github.io/",
  "https://www.gabadaja.ga/",
  "https://www.facebook.com/",
];
console.log(myWebs);
myWebs.push("https://web.whatsapp.com/");
console.log(myWebs);
myWebs.unshift("https://youtube.com/");
console.log(myWebs);
let mySites = myWebs.slice(1, 4);
console.log(mySites.length);
mySites.splice(2, 0,
  "https://translate.google.com/",
  "https://news.google.com/"
  );
console.log(mySites);
// assignment 05
let letters = ["Q", "Z", "C", "A", "P"];
console.log(letters);
letters.sort();
console.log(letters);
letters.reverse();
console.log(letters);
let nums = [4, 8, 0, 5, 9];
let newArray = letters.concat(nums);
console.log(newArray);
newArray.sort();
console.log(newArray);