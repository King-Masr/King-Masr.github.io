let database = {
  topPlayers: {
    firstPlayer: "Aly Ahmed Aly",
    secondPlayer: "Reham lol",
    thhirdPlayer: "Ahmed samy",
  }
};
let firstPlayer = document.getElementById("theFirst");
let secondPlayer = document.getElementById("theSecond");
let thhirdPlayer = document.getElementById("theThird");
window.onload = function () {
  firstPlayer.textContent += database.topPlayers.firstPlayer;
  secondPlayer.textContent += database.topPlayers.secondPlayer;
  thhirdPlayer.textContent += database.topPlayers.thhirdPlayer;
};
