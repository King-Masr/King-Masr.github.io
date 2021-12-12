let database = {
  count: 0,
  firstPlayer: { name: "", score: 0 },
  secondPlayer: { name: "", score: 0 },
  thirdPlayer: { name: "", score: 0 },
  players: {
    0: {
      score: 50
    }
  },
};
let firstPlayer = document.getElementById("theFirst");
let secondPlayer = document.getElementById("theSecond");
let thirdPlayer = document.getElementById("theThird");
window.onload = function () {
  firstPlayer.textContent += database.firstPlayer.name;
  secondPlayer.textContent += database.secondPlayer.name;
  thirdPlayer.textContent += database.thirdPlayer.name;
};
function check() {
  for (let i = 0; i < database.players.length; i++) {
    if (database.players[i].score > database.firstPlayer.score) {
      database.firstPlayer.name = database.players[i].name;
      database.firstPlayer.score = database.players[i].score;
      Winner(database.players[i]);
      continue;
    }
    if (database.players[i].score > database.secondPlayer.score) {
      database.secondPlayer.name = database.players[i].name;
      database.secondPlayer.score = database.players[i].score;
      Winner(database.players[i]);
      continue;
    }
    if (database.players[i].score > database.thirdPlayer.score) {
      database.thirdPlayer.name = database.players[i].name;
      database.thirdPlayer.score = database.players[i].score;
      Winner(database.players[i]);
      continue;
    }
  }
}
function Winner(player = {}) {
  
}
let 