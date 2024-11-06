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

const updateScore = (selectedValue, achieved) => {
  // Convert value to a number and then add it to the current score.
  score += parseInt(selectedValue);

  // Update the total score on the page.
  totalScoreElement.textContent = score;

  // Add a new li element to the score history ul element
  scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};

const getHighestDuplicates = (arr) => {
  const counts = {};

  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  const highestCount = Math.max(...Object.values(counts));
  const sumOfAllDice = arr.reduce((a, b) => a + b, 0);

  if (highestCount >= 4) {
    updateRadioOption(1, sumOfAllDice);
  } else if (highestCount >= 3) {
    updateRadioOption(0, sumOfAllDice);
  }

  updateRadioOption(5, 0);
};

const resetRadioOptions = () => {
  scoreInputs.forEach((input) => {
    input.disabled = true;
    input.checked = false;
  });

  scoreSpans.forEach((span) => {
    span.textContent = "";
  });
};

rollDiceBtn.addEventListener("click", () => {
  if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;
    resetRadioOptions();
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

keepScoreBtn.addEventListener("click", () => {
  // Find the checked radio option
  const userSelectedOption = document.querySelector(
    'input[name="score-options"]:checked'
  );
  if (userSelectedOption) {
    // Capture the value and id attributes
    const value = userSelectedOption.value;
    const id = userSelectedOption.id;
    // Call functions to update score and reset radio options
    updateScore(value, id);
    resetRadioOptions();
  } else {
    alert("Please select an option.");
  }
});
