// HTML DOM ELEMENT SELECTION
const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.getElementsByClassName("rules-container")[0];

let isModalShowing = false;
let diceValuesArr = [];
let score = 0;
let round = 1;
let rolls = 0;

const rollDice = () => {
  diceValuesArr = [];

  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  }
  console.log(diceValuesArr);

  // Update the .die elements with the corresponding values
  listOfAllDice.forEach((die, index) => {
    die.textContent = diceValuesArr[index];
  });
};

const updateStats = () => {
  rollsElement.textContent = rolls;
  roundElement.textContent = round;
};

const updateRadioOption = (index, score) => {
  // Enable the input at the given index
  scoreInputs[index].disabled = false;
  scoreInputs[index].value = score;

  // Display the score in the corresponding span element
  scoreSpans[index].textContent = `, score = ${score}`;
};

const getHighestDuplicates = (diceValues) => {
  // Count duplicates
  const counts = {};
  diceValues.forEach((value) => {
    counts[value] = (counts[value] || 0) + 1;
  });

  // Calculate total score, sum of all dice values
  const totalScore = diceValues.reduce((sum, value) => sum + value, 0);

  // Check for Four of a kind
  for (const value in counts) {
    if (counts[value] >= 4) {
      updateRadioOption(1, totalScore);
      break;
    }
  }

  // Check for three of a kind
  for (const value in counts) {
    if (counts[value] >= 3) {
      updateRadioOption(0, totalScore);
    }
  }

  // Update the final option with a score of 0
  updateRadioOption(5, 0);
};

rollDiceBtn.addEventListener("click", () => {
  if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;
    rollDice();
    updateStats();
    getHighestDuplicates(diceValuesArr);
  }
});

rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;

  if (isModalShowing) {
    rulesBtn.textContent = "Hide rules";
    rulesContainer.style.display = "block";
  } else {
    rulesBtn.textContent = "Show rules";
    rulesContainer.style.display = "none";
  }
});
