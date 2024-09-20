// HTML DOM SELECTION
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("results-div");

// Results store
let resultsArray = [];

// Check user input functionality
const checkUserInput = () => {
  const inputValue = userInput.value;
  const validUsRegex = /^(1\s?)?(\(\d{3}\)\s?|\d{3}[\s.-]?)\d{3}[\s.-]?\d{4}$/;

  // Empty entries
  if (inputValue === "") {
    alert("Please provide a phone number");
    return;
  }

  // Validate user input value
  const resultMsg = `${
    validUsRegex.test(inputValue) ? "Valid" : "Invalid"
  } US number: ${inputValue}`;

  // Store the resultMsg in a new object
  const resultObj = {
    id: Date.now(),
    message: resultMsg,
  };

  // Push the new object to the resultsArray store
  resultsArray.push(resultObj);

  // Sort the result objects in the array in descending order
  resultsArray.sort((a, b) => b.id - a.id);

  // Clear previous results
  resultDiv.innerHTML = "";

  // Display the sorted results in the UI
  resultsArray.forEach((result) => {
    const resultElement = document.createElement("p");
    resultElement.appendChild(document.createTextNode(result.message));
    resultDiv.appendChild(resultElement);

    // Style the result text
    if (result.message.includes("Invalid")) {
      resultElement.classList.add("text-danger");
    } else {
      resultElement.classList.add("text-success");
    }
  });

  resultDiv.classList.remove("hidden");
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

userInput.addEventListener("input", (e) => {
  // Removes any non-numeric characters
  userInput.value = userInput.value.replace(/[^0-9\s\-\(\)]/g, "");
});

clearBtn.addEventListener("click", (e) => {
  clearResults();
});
