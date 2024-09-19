// HTML DOM SELECTION
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("results-div");

// Check user input functionality
const checkUserInput = () => {
  const inputValue = userInput.value;

  if (inputValue === "") {
    // Empty entries
    alert("Please provide a phone number");
    return;
  } else if (!isNaN(inputValue)) {
    resultDiv.classList.remove("hidden");

    const pTag = document.createElement("p");
    pTag.appendChild(document.createTextNode(`${inputValue} is a number`));

    resultDiv.appendChild(pTag);
  }
};

// Clear results functionality
const clearResults = () => {
  resultDiv.innerHTML = "";
  resultDiv.classList.add("hidden");
};

// EVENTS
checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkUserInput();
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkUserInput();
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", (e) => {
  clearResults();
});
