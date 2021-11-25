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
  let SerialBtn = document.getElementById("#S");
  SerialBtn.onselect = function () {
    document.getElementById("A").spellcheck.valueOf(false)
    document.getElementById("a").spellcheck.valueOf(false)
    document.getElementById("N").spellcheck.valueOf(false)
    document.getElementById("C").spellcheck.valueOf(false)
  };
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
    if (ID.length == 2) {
      Count = ID[1];
    } else {
      Count = `${ID[1]}${ID[2]}`;
    }
    BTN.style.border = "3px solid black";
    BTN.style.backgroundColor = "white";
  }
}
function GeneratePass() {
  let serialElement = document.querySelector(".Serial");
  let checkBoxCapital = document.querySelector("#A");
  let checkBoxSmall = document.querySelector("#a");
  let checkBoxNumber = document.querySelector("#N");
  let checkBoxCode = document.querySelector("#C");
  let Characters = "";
  if (Count === 0) {
    serialElement.innerHTML = "Choose Number First";
    return false;
  }
  if (
    checkBoxCapital.checked === false &&
    checkBoxSmall.checked === false &&
    checkBoxNumber.checked === false &&
    checkBoxCode.checked === false
  ) {
    serialElement.innerHTML = "Choose Kind Of Characters First";
    return false;
  }
  if (checkBoxCapital.checked === true) {
    Characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (checkBoxSmall.checked === true) {
    Characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (checkBoxNumber.checked === true) {
    Characters += "0123456789";
  }
  if (checkBoxCode.checked === true) {
    Characters += "`~!@#$%^&*()_+-=/<>|[],.:";
  }
  let Serial = "";
  for (let i = 2; i < Count; i++) {
    Serial += Characters[Math.floor(Math.random() * Characters.length)];
    if (i === Count) {
      serialElement.innerHTML = Serial;
      break;
    }
  }
}
