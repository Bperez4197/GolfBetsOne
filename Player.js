export default class Player {
  constructor(
    playerName,
    playerHeading,
    playerScore,
    strokeBtn,
    holeBtn,
    isHoled
  ) {
    this.playerName = playerName;
    this.playerHeading = playerHeading;
    this.playerScore = playerScore;
    this.strokeBtn = strokeBtn;
    this.holeBtn = holeBtn;
    this.isHoled = isHoled;
  }

  addStroke() {
    this.playerScore.textContent = Number(this.playerScore.textContent) + 1;
  }

  show() {
    this.playerHeading.classList.remove("hidden");
  }
}
