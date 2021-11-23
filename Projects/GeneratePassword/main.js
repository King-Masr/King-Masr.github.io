/* 
[1] Set Characters To Create The Serial
[2] Set Serial Characters Count
[3] Create Empty Variable To Store The Serial
[4] Create Random Number + Access Sequence
[5] Store The Random Element In The Empty Variable
[6] Loop x Count
[7] Change Serial Element Content With The Serial Variable
*/
window.onload = function () {
  CountID("C15");
};
let Count = 0;
let BTNA;
function DelCount(...myArray) {
  for (let i = 0; i < myArray.length; i++) {
    let BTN = document.getElementById(myArray[i]);
    BTN.style.border = "0px solid black";
    BTN.style.backgroundColor = "#fff";
  }
}
function CountID(ID) {
  let BTN = document.getElementById(ID);
  if (BTNA == ID) {
    BTN.style.border = "0px solid black";
    BTN.style.backgroundColor = "#fff";
    BTNA = null;
    Count = 0;
  } else {
    if (ID === "C8") {
      Count = 8;
      DelCount("C10", "C12", "C15");
    }
    if (ID === "C10") {
      Count = 10;
      DelCount("C8", "C12", "C15");
    }
    if (ID === "C12") {
      Count = 12;
      DelCount("C8", "C10", "C15");
    }
    if (ID === "C15") {
      Count = 15;
      DelCount("C8", "C10", "C12");
    }
    BTN.style.border = "3px solid black";
    BTN.style.backgroundColor = "white";
    BTNA = ID;
  }
}
function GeneratePass(Query) {
  let SerialElement = document.querySelector(".Serial");
  let Characters = "";
  let characters = "";
  if (Count === 0) {
    SerialElement.innerHTML = "Choose Number First";
    return false;
  }
  if (Query === "Aa1@") {
    Characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`~!@#$%^&*()_+-=/<>|[],.:0123456789";
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (Query === "A1@") {
    Characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()_+-=/<>|[],.:0123456789";
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (Query === "1") {
    Characters = "0123456789";
  }
  let Serial = Characters[Math.floor(Math.random() * characters.length)];
  for (let i = 2; i <= Count; i++) {
    Serial += Characters[Math.floor(Math.random() * Characters.length)];
    if (i === Count) {
      SerialElement.innerHTML = Serial;
    }
  }
  return Serial;
}
