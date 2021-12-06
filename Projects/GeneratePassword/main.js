/* 
[1] Set Characters To Create The Serial
[2] Set Serial Characters Count
[3] Create Empty Variable To Store The Serial
[4] Create Random Number + Access Sequence
[5] Store The Random Element In The Empty Variable
[6] Loop x Count
[7] Change Serial Element Content With The Serial Variable
*/
let serialElement = document.querySelector(".Serial");
let copyBtn = document.querySelector(".Copy");
let checkBoxCapital = document.querySelector("#A");
let checkBoxSmall = document.querySelector("#a");
let checkBoxNumber = document.querySelector("#N");
let checkBoxCode = document.querySelector("#C");
let checkBoxSerial = document.querySelector("#S");
window.onload = function () {
  document.getElementById("C12").click();
  checkBoxSerial.onclick = function () {
    if (checkBoxCapital.checked === false) {
      if (checkBoxSerial.checked === true) {
        checkBoxCapital.click();
      }
    }
    if (checkBoxCode.checked === true) {
      checkBoxCode.click();
    }
    if (checkBoxSerial.checked === true) {
      document.getElementById("Code").style.opacity = 0;
      document.getElementById("Code").style.visibility = "hidden";
    } else if (checkBoxSerial.checked === false) {
      document.getElementById("Code").style.opacity = 1;
      document.getElementById("Code").style.visibility = "visible";
    }
  };
  copyBtn.onclick = function () {
    copyToClipboard(serialElement.textContent);
  }
};
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  copyBtn.textContent = "Copied!";
  setTimeout(function () {
    copyBtn.textContent = "Click To Copy!";
  }, 1000)
}
let Count = 0;
function CountID(ID) {
  if (ID.length == 2) {
    Count = ID[1];
  } else {
    Count = `${ID[1]}${ID[2]}`;
  }
}
function GeneratePass() {
  if (Count === 0) {
    serialElement.textContent = "Choose Number First";
    return false;
  }
  if (
    checkBoxCapital.checked === false &&
    checkBoxSmall.checked === false &&
    checkBoxNumber.checked === false &&
    checkBoxCode.checked === false
  ) {
    serialElement.textContent = "Choose Kind Of Characters First";
    return false;
  }
  let Characters = "";
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
  if (checkBoxSerial.checked === false) {
    for (let i = 0; i < Count; i++) {
      Serial += Characters[Math.floor(Math.random() * Characters.length)];
      if (i == Count - 1) {
        serialElement.textContent = Serial;
        copyBtn.style.display = "block";
        break;
      }
    }
  } else if (checkBoxSerial.checked === true) {
    for (let i = 0; i < Count; i++) {
      if (i == 3 || i == 6 || i == 9 || i == 12 || i == 15 || i == 18) {
        Serial += "-";
      }
      Serial += Characters[Math.floor(Math.random() * Characters.length)];
      if (i == Count - 1) {
        serialElement.textContent = Serial;
        copyBtn.style.display = "block";
        break;
      }
    }
  }
}