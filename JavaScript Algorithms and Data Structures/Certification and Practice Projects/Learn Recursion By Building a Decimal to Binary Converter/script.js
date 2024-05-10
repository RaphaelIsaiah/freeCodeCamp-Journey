// HTML/DOM Element selection
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// Initialization of Functionality to check user input value.
const checkUserInput = () => {
    // If statement to check if userinput is valid and not empty.
  if (numberInput.value === "") {
  }
  console.log(numberInput.value);
};

// Implementation of functionality to check user input value.
convertBtn.addEventListener("click", checkUserInput);

// Implementatiion of functionality to check user input value with the enter key.
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
