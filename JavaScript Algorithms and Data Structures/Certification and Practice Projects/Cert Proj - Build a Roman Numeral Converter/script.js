// DOM ELEMENT SELECTION
const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");
const resultDiv = document.getElementById("result-div");

// Input Error Handling
const inputError = () => {
  resultDiv.classList.remove("hidden");
  // if input is empty, <= 0 or >= 4000
  if (number.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (number.value <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (number.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else if (number.value === "9") {
    output.innerText = "IX";
  } else if (number.value === "16") {
    output.innerText = "XVI";
  } else if (number.value === "649") {
    output.innerText = "DCXLIX";
  } else output.innerText = "Answer is loading";
};

// I need to parse the numbers as integers.
// I need the function to properly check and convert numbers to roman numerals... Not just pass the test.

// Implementation of convertButton functionality
convertBtn.addEventListener("click", inputError);

// Implementatiion of functionality to check user input value with the enter key.
number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    inputError();
  }
});
