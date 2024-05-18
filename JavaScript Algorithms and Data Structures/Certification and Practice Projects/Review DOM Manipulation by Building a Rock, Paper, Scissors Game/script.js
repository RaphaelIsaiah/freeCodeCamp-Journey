// This function generates a random choice for the computer.
const getRandomComputerResult = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
  // This is a neater way to write the code... multiplying Math.random() by the length of the options array, so even if the length of the array increases the code still runs correctly... and then assigning that to the variable randomIndex.
};

// Refactored functionality to determine if the player has won the round.
const hasPlayerWonTheRound = (player, computer) => {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
};

let playerScore = 0;
let computerScore = 0;

// Functionality to determine the round results.
const getRoundResults = (userOption) => {
  const computerResult = getRandomComputerResult();
  const playerWins = hasPlayerWonTheRound(userOption, computerResult);

  if (playerWins) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
};

// HTML/DOM selection for different elements.
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// Functionality to update the scores and result message.
const showResults = (userOption) => {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  // Refactored conditional to determine winner of the game.
  if (playerScore === 3 || computerScore === 3) {
    // display winner message
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    // show reset button and hide options container.
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
};

// Functionality to reset the game.
const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";
};

// HTML/DOM selection for the option buttons
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// Writing the callback function this way for the option buttons ensures that the function is executed only when the button is clicked.
rockBtn.addEventListener("click", () => {
  showResults("Rock");
});

paperBtn.addEventListener("click", () => {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", () => {
  showResults("Scissors");
});

resetGameBtn.addEventListener("click", resetGame);
