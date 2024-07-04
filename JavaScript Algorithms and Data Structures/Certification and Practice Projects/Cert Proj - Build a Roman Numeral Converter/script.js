// DOM ELEMENT SELECTION
const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");
const resultDiv = document.getElementById("result-div");

// Input Error Handling
const inputError = () => {
  // if input is empty
  if (number.value === "") {
    resultDiv.classList.remove("hidden");
    output.innerText = "Please enter a valid number";
  } else if (number.value < 0) {
    resultDiv.classList.remove("hidden");
    output.innerText = "Please enter a number greater than or equal to 1";
  }
};

// Implementation of convertButton functionality
convertBtn.addEventListener("click", inputError);

// Implementatiion of functionality to check user input value with the enter key.
number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    inputError();
  }
});
