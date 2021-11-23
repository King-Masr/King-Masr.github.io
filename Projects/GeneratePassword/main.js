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
  CountID("C12");
};
let Count = 0;
let BTNA;
function DelCount(ID) {
  let Btns = ["C8", "C10", "C12", "C15", "C20"];
  for (let i = 0; i < Btns.length; i++) {
    if (Btns[i] == ID) {
      continue;
    }
    let BTN = document.getElementById(Btns[i]);
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
    BTNA = ID;
    DelCount(ID);
    if (ID.length === 2) {
      Count = ID[1];
    } else {
      Count = `${ID[1]}${ID[2]}`;
    }
    BTN.style.border = "3px solid black";
    BTN.style.backgroundColor = "white";
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
  let Serial = characters[Math.floor(Math.random() * characters.length)];
  for (let i = 0; i < Count; i++) {
    if (i == Count - 3) {
      SerialElement.innerHTML = Serial;
      break;
    }
    Serial += Characters[Math.floor(Math.random() * Characters.length)];
  }
}
