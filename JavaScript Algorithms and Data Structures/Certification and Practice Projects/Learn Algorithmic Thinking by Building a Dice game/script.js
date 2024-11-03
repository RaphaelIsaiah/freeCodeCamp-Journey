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

const generateRandomNumbers = () => {
  const randomNumbers = [];
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    randomNumbers.push(randomNumber);
  }
  console.log(randomNumbers);
  return randomNumbers;
};

rollDiceBtn.addEventListener("click", () => {
  diceValuesArr = generateRandomNumbers();
  console.log(diceValuesArr);

  // Update the .die elements with the corresponding values
  listOfAllDice.forEach((die, index) => {
    die.textContent = diceValuesArr[index];
  });
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
