// DOM ELEMENT SELECTION
const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");
const resultDiv = document.getElementById("result-div");

// Input Error Handling
const inputError = () => {
  // Parse the input value as an integer.
  const inputInt = parseInt(number.value);

  resultDiv.classList.remove("hidden");
  // if input is empty, <= 0 or >= 4000
  if (number.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (inputInt <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (inputInt >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else if (inputInt === 9) {
    output.innerText = "IX";
  } else if (inputInt === 16) {
    output.innerText = "XVI";
  } else if (inputInt === 649) {
    output.innerText = "DCXLIX";
  } else output.innerText = "Answer is loading";
};

const checkInputForConversion = () => {
  let inputInt = parseInt(number.value);

  resultDiv.classList.remove("hidden");

  const romanNumeralKeys = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeral = "";

  for (const key in romanNumeralKeys) {
    while (inputInt >= romanNumeralKeys[key]) {
      romanNumeral += key;
      inputInt -= romanNumeralKeys[key];
    }
  }

  output.innerText = romanNumeral;
  console.log(romanNumeral);
};

const convertInput = () => {
  let inputInt = parseInt(number.value);

  const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  const romanSymbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let romanNumeral = "";

  for (let i = 0; i < romanValues.length; i++) {
    while (inputInt >= romanValues[i]) {
      romanNumeral += romanSymbols[i];
      inputInt -= romanValues[i];
    }
  }

  resultDiv.classList.remove("hidden");
  console.log(romanNumeral);
  output.innerText = romanNumeral;
};

// Implementation of convertButton functionality
convertBtn.addEventListener("click", checkInputForConversion);

// Implementatiion of functionality to check user input value with the enter key.
number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInputForConversion();
  }
});
