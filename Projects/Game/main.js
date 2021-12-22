let database = {
  count: 0,
  firstPlayer: { name: "mohammed", score: 10 },
  secondPlayer: { name: "hosam", score: 7 },
  thirdPlayer: { name: "body", score: 3 },
  players: {
    0: {
      name: "Aly Ahmed Aly",
      score: 5,
    },
  },
};
let firstPlayer = document.getElementById("theFirst");
let secondPlayer = document.getElementById("theSecond");
let thirdPlayer = document.getElementById("theThird");
window.onload = function () {
  firstPlayer.textContent += database.firstPlayer.name;
  secondPlayer.textContent += database.secondPlayer.name;
  thirdPlayer.textContent += database.thirdPlayer.name;
  check();
};
function check() {
  for (let i = 0; i < database.players.constructor.length; i++) {
    if (database.players[i].score > database.firstPlayer.score) {
      database.firstPlayer.name = database.players[i].name;
      database.firstPlayer.score = database.players[i].score;
      Winner(database.players[i], 1);
      continue;
    }
    if (database.players[i].score > database.secondPlayer.score) {
      database.secondPlayer.name = database.players[i].name;
      database.secondPlayer.score = database.players[i].score;
      Winner(database.players[i], 2);
      continue;
    }
    if (database.players[i].score > database.thirdPlayer.score) {
      database.thirdPlayer.name = database.players[i].name;
      database.thirdPlayer.score = database.players[i].score;
      Winner(database.players[i], 3);
      continue;
    }
  }
}
function Winner(player = {}, order = 0) {
  let alertMessage = document.createElement("section");
  alertMessage.setAttribute("id", "alert");
  let mainTitle = document.createElement("h2");
  mainTitle.textContent = "We have Winner!";
  alertMessage.appendChild(mainTitle);
  let container = document.createElement("main");
  alertMessage.appendChild(container);
  let giftIcon = document.createElement("i");
  giftIcon.className = "fas fa-gift fa-10x";
  container.appendChild(giftIcon);
  let congratulations = document.createElement("p");
  congratulations.textContent =
    "Congratulations " + player.name + " you are number " + order;
  container.appendChild(congratulations);
  // view in console
  console.log(alertMessage);
  // append to body
  document.body.appendChild(alertMessage);
}