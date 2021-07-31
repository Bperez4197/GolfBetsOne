import Player from "./Player.js";

var player1 = new Player(
  "Player 1",
  document.querySelector("#playerOne"),
  document.querySelector("#playerOneScore"),
  document.querySelector("#player1Stroke"),
  document.querySelector("#player1Holed"),
  false
);

var player2 = new Player(
  "Player 2",
  document.querySelector("#playerTwo"),
  document.querySelector("#playerTwoScore"),
  document.querySelector("#player2Stroke"),
  document.querySelector("#player2Holed"),
  false
);

var player3 = new Player(
  "Player 3",
  document.querySelector("#playerThree"),
  document.querySelector("#playerThreeScore"),
  document.querySelector("#player3Stroke"),
  document.querySelector("#player3Holed"),
  false
);

var player4 = new Player(
  "Player 4",
  document.querySelector("#playerFour"),
  document.querySelector("#playerFourScore"),
  document.querySelector("#player4Stroke"),
  document.querySelector("#player4Holed"),
  false
);

var playersArray = [];
var lowestScore;

var errorMsg = document.querySelector(".errorMsg");
var startButton = document.querySelector("#numOfPlayersBtn");
var victoryMsg = document.querySelector("#victoryMessage");
var allHoles = 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function displayBoard() {
  var number = Number(document.querySelector("#numberOfPlayers").value);
  if (number < 2 || number > 4) {
    errorMsg.classList.remove("hidden");
    for (let player of playerArray) {
      if (player.playerHeading.classList.contains("hidden"));
      player.playerHeading.classList.add("hidden");
    }
  } else if (number == 2) {
    errorMsg.classList.add("hidden");
    playersArray.push(player1);
    playersArray.push(player2);
    showAll();
  } else if (number == 3) {
    errorMsg.classList.add("hidden");
    playersArray.push(player1);
    playersArray.push(player2);
    playersArray.push(player3);
    showAll();
  } else {
    errorMsg.classList.add("hidden");
    playersArray.push(player1);
    playersArray.push(player2);
    playersArray.push(player3);
    playersArray.push(player4);
    showAll();
  }
}

function player1Stroke() {
  player1.addStroke();
}
function player2Stroke() {
  player2.addStroke();
}
function player3Stroke() {
  player3.addStroke();
}
function player4Stroke() {
  player4.addStroke();
}
function player1Holed() {
  player1.addStroke();
  allHoles++;
  lowestScore = playersArray[0];
  setLowest();
  gameOver();
}
function player2Holed() {
  player2.addStroke();
  allHoles++;
  setLowest();
  gameOver();
}
function player3Holed() {
  player3.addStroke();
  allHoles++;
  setLowest();
  gameOver();
}
function player4Holed() {
  player4.addStroke();
  allHoles++;
  setLowest();
  gameOver();
}

function setLowest() {
  lowestScore = playersArray[0];
  for (let player of playersArray) {
    if (
      Number(player.playerScore.textContent) <
      Number(lowestScore.playerScore.textContent)
    ) {
      lowestScore = player;
    }
  }
}

function showAll() {
  for (let i = 0; i < playersArray.length; i++) {
    playersArray[i].show();
  }
}

function gameOver() {
  if (allHoles > 0 && allHoles === playersArray.length) {
    victoryMsg.textContent = `${lowestScore.playerName} is victorious!`;
    victoryMsg.classList.remove("hidden");
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
startButton.addEventListener("click", displayBoard);
player1.strokeBtn.addEventListener("click", player1Stroke);
player2.strokeBtn.addEventListener("click", player2Stroke);
player3.strokeBtn.addEventListener("click", player3Stroke);
player4.strokeBtn.addEventListener("click", player4Stroke);
player1.holeBtn.addEventListener("click", player1Holed);
player2.holeBtn.addEventListener("click", player2Holed);
player3.holeBtn.addEventListener("click", player3Holed);
player4.holeBtn.addEventListener("click", player4Holed);
