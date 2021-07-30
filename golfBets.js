//VARIABLES////////////////////////////////////////////////////////////////////////////////
var numberOfPlayers = document.querySelector("#numberOfPlayers");
var invalidNumber = document.querySelector(".errorMsg");
var player1Score = document.querySelector("#playerOneScore");
var player1Heading = document.querySelector("#playerOne");
var player2Score = document.querySelector("#playerTwoScore");
var player2Heading = document.querySelector("#playerTwo");
var player3Score = document.querySelector("#playerThreeScore");
var player3Heading = document.querySelector("#playerThree");
var player4Score = document.querySelector("#playerFourScore");
var player4Heading = document.querySelector("#playerFour");
var victoryMsg = document.querySelector("#victoryMessage");
var player1BeenClicked = false;
var player2BeenClicked = false;
var player3BeenClicked = false;
var player4BeenClicked = false;

//BUTTONS///////////////////////////////////////////////////////////////////////////////
var startButton = document.querySelector("#numOfPlayersBtn");
var player1StrokeBtn = document.querySelector("#player1Stroke");
var player1HoledBtn = document.querySelector("#player1Holed");
var player2StrokeBtn = document.querySelector("#player2Stroke");
var player2HoledBtn = document.querySelector("#player2Holed");
var player3StrokeBtn = document.querySelector("#player3Stroke");
var player3HoledBtn = document.querySelector("#player3Holed");
var player4StrokeBtn = document.querySelector("#player4Stroke");
var player4HoledBtn = document.querySelector("#player4Holed");
//console.log(invalidNumber);

//FUNCTION////////////////////////////////////////////////////////////////////////////
function displayBoard() {
  let number = Number(numberOfPlayers.value);
  let errorMessage =
    "Invalid number of players. Please enter between 2-6 players.";
  if (number < 2 || number > 4) {
    invalidNumber.textContent = errorMessage;
    invalidNumber.classList.remove("hidden");
  } else if (number == 2) {
    invalidNumber.classList.add("hidden");
    player1Heading.classList.remove("hidden");
    player1Score.classList.remove("hidden");
    player1StrokeBtn.classList.remove("hidden");
    player1HoledBtn.classList.remove("hidden");
    player2Heading.classList.remove("hidden");
    player2Score.classList.remove("hidden");
    player2StrokeBtn.classList.remove("hidden");
    player2HoledBtn.classList.remove("hidden");
    player3Score.textContent = 105;
    player3BeenClicked = true;
    player4Score.textContent = 100;
    player4BeenClicked = true;
  } else if (number == 3) {
    invalidNumber.classList.add("hidden");
    player1Heading.classList.remove("hidden");
    player1Score.classList.remove("hidden");
    player1StrokeBtn.classList.remove("hidden");
    player1HoledBtn.classList.remove("hidden");
    player2Heading.classList.remove("hidden");
    player2Score.classList.remove("hidden");
    player2StrokeBtn.classList.remove("hidden");
    player2HoledBtn.classList.remove("hidden");
    player3Heading.classList.remove("hidden");
    player3Score.classList.remove("hidden");
    player3StrokeBtn.classList.remove("hidden");
    player3HoledBtn.classList.remove("hidden");
    player4Score.textContent = 100;
    player4BeenClicked = true;
  } else {
    invalidNumber.classList.add("hidden");
    player1Heading.classList.remove("hidden");
    player1Score.classList.remove("hidden");
    player1StrokeBtn.classList.remove("hidden");
    player1HoledBtn.classList.remove("hidden");
    player2Heading.classList.remove("hidden");
    player2Score.classList.remove("hidden");
    player2StrokeBtn.classList.remove("hidden");
    player2HoledBtn.classList.remove("hidden");
    player3Heading.classList.remove("hidden");
    player3Score.classList.remove("hidden");
    player3StrokeBtn.classList.remove("hidden");
    player3HoledBtn.classList.remove("hidden");
    player4Heading.classList.remove("hidden");
    player4Score.classList.remove("hidden");
    player4StrokeBtn.classList.remove("hidden");
    player4HoledBtn.classList.remove("hidden");
  }
}

//STROKE FUNCTIONS

function addStrokeP1() {
  player1Score.textContent = Number(player1Score.textContent) + 1;
}
function addStrokeP2() {
  player2Score.textContent = Number(player2Score.textContent) + 1;
}
function addStrokeP3() {
  player3Score.textContent = Number(player3Score.textContent) + 1;
}
function addStrokeP4() {
  player4Score.textContent = Number(player4Score.textContent) + 1;
}

//HOLED FUNCTIONS
function HoledP1() {
  player1BeenClicked = true;
  addStrokeP1();
  allClicked();
  determineWinner();
}
function HoledP2() {
  player2BeenClicked = true;
  addStrokeP2();
  allClicked();
  determineWinner();
}
function HoledP3() {
  player3BeenClicked = true;
  addStrokeP3();
  allClicked();
  determineWinner();
}
function HoledP4() {
  player4BeenClicked = true;
  addStrokeP4();
  allClicked();
  determineWinner();
}

function allClicked() {
  if (
    player1BeenClicked &&
    player2BeenClicked &&
    player3BeenClicked &&
    player4BeenClicked
  ) {
    return true;
  } else {
    return false;
  }
}

function determineWinner() {
  if (allClicked()) {
    if (
      Number(player1Score.textContent) < Number(player2Score.textContent) &&
      Number(player1Score.textContent) < Number(player3Score.textContent) &&
      Number(player1Score.textContent) < Number(player4Score.textContent)
    ) {
      victoryMsg.textContent = "Player One is Victorious!";
    } else if (
      Number(player2Score.textContent) < Number(player1Score.textContent) &&
      Number(player2Score.textContent) < Number(player3Score.textContent) &&
      Number(player2Score.textContent) < Number(player4Score.textContent)
    ) {
      victoryMsg.textContent = "Player Two is Victorious!";
    } else if (
      Number(player3Score.textContent) < Number(player1Score.textContent) &&
      Number(player3Score.textContent) < Number(player2Score.textContent) &&
      Number(player3Score.textContent) < Number(player4Score.textContent)
    ) {
      victoryMsg.textContent = "Player Three is Victorious!";
    } else if (
      Number(player4Score.textContent) < Number(player1Score.textContent) &&
      Number(player4Score.textContent) < Number(player2Score.textContent) &&
      Number(player4Score.textContent) < Number(player3Score.textContent)
    ) {
      victoryMsg.textContent = "Player Four is Victorious!";
    }
  }
}

// if (
//   player1BeenClicked &&
//   player2BeenClicked &&
//   player3BeenClicked &&
//   player4BeenClicked
// ) {
//   let scoreArray = [
//     player1Score.textContent,
//     player2Score.textContent,
//     player3Score.textContent,
//     player4Score.textContent,
//   ];

//   let winningScore = scoreArray[0];

//   for (let score of scoreArray) {
//     score < winningScore
//       ? (winningScore = score)
//       : (winningScore = winningScore);
//   }

//   console.log(winningScore);
// }

//EVENT LISTENERS///////////////////////////////////////////////////////////////////////////////////
//STROKES//////////////////////////////////////
startButton.addEventListener("click", displayBoard);
player1StrokeBtn.addEventListener("click", addStrokeP1);
player2StrokeBtn.addEventListener("click", addStrokeP2);
player3StrokeBtn.addEventListener("click", addStrokeP3);
player4StrokeBtn.addEventListener("click", addStrokeP4);
/////////////////HOLED////////////////////////
player1HoledBtn.addEventListener("click", HoledP1);
player2HoledBtn.addEventListener("click", HoledP2);
player3HoledBtn.addEventListener("click", HoledP3);
player4HoledBtn.addEventListener("click", HoledP4);
