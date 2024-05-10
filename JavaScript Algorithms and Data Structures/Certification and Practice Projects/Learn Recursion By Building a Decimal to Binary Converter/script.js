// HTML/DOM Element selection
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// Initialization of Functionality to check user input value.
const checkUserInput = () => {
  console.log(numberInput.value);
};

// Implementation of functionality to check user input value.
convertBtn.addEventListener("click", checkUserInput);

// Implementatiion of functionality to check user input value.
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
