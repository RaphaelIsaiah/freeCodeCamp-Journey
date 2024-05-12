const a = () => {
  return "freeCodeCamp " + b();
};

const b = () => {
  return "is " + c();
};

const c = () => {
  return "awesome!";
};

console.log(a());

// HTML/DOM Element selection
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// Functionality to handle the conversion from decimal to binary.
const decimalToBinary = (input) => {
  let binary = "";

  if (input === 0) {
    binary = "0";
  }

  while (input > 0) {
    binary = (input % 2) + binary; // This will build the binary string from right to left.
    input = Math.floor(input / 2);
  }

  result.innerText = binary;
};

// Initialization of Functionality to check user input value.
const checkUserInput = () => {
  // If statement to check if userinput is valid and not empty, or is not a number.
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = ""; // Clears the number input after conversion
};

// Implementation of functionality to check user input value.
convertBtn.addEventListener("click", checkUserInput);

// Implementatiion of functionality to check user input value with the enter key.
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
