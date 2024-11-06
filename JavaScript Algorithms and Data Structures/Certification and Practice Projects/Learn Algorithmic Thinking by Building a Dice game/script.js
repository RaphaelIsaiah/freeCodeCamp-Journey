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

  // Update the .die elements with the corresponding values
  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
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

const detectFullHouse = (diceValuesArr) => {
  const counts = {};

  // Count the occurrences of each number
  diceValuesArr.forEach((value) => {
    counts[value] = (counts[value] || 0) + 1;
  });

  let hasThreeOfAKind = false;
  let hasPair = false;

  // Check for three of a kind and a pair
  for (const count of Object.values(counts)) {
    if (count === 3) {
      hasThreeOfAKind = true;
    } else if (count === 2) {
      hasPair = true;
    }
  }

  // Update the radio buttons based on the result
  if (hasThreeOfAKind && hasPair) {
    updateRadioOption(2, 25);
  } else {
    updateRadioOption(5, 0);
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

const resetGame = () => {
  score = 0;
  rolls = 0;
  round = 1;
  diceValuesArr = [0, 0, 0, 0, 0];

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });
  totalScoreElement.textContent = score;
  scoreHistory.innerHTML = "";

  rollsElement.textContent = rolls;
  roundElement.textContent = round;

  resetRadioOptions();
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
    detectFullHouse(diceValuesArr);
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
  // Find the selected radio button
  let selectedValue;
  let achieved;

  for (const radioButton of scoreInputs) {
    // Capture value and id
    if (radioButton.checked) {
      selectedValue = radioButton.value;
      achieved = radioButton.id;
    }
  }

  // Check if radio button is selected
  if (selectedValue) {
    rolls = 0;
    round++;
    updateStats();
    resetRadioOptions();
    updateScore(selectedValue, achieved);

    if (round > 6) {
      setTimeout(() => {
        alert(`Game over. Your score is ${score}`);
        resetGame();
      }, 500);
    }
  } else {
    alert("Please select an option or roll the dice");
  }
});
