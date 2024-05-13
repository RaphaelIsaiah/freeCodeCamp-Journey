// HTML/DOM Element selection
// I am using the conditional statement here to wrap the entire code so that it does not throw the error "ReferenceError: document is not defined" when trying to run the code here in the console instead of a browser console.
if (typeof document !== "undefined") {
  const numberInput = document.getElementById("number-input");
  const convertBtn = document.getElementById("convert-btn");
  const result = document.getElementById("result");

  // Functionality to handle the conversion from decimal to binary.
  const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
      return String(input);
    } else {
      return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
  };

  // Initialization of Functionality to check user input value.
  const checkUserInput = () => {
    // If statement to check if userinput is valid and not empty, or is not a number.
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
      alert("Please provide a decimal number");
      return;
    }

    result.textContent = decimalToBinary(parseInt(numberInput.value));
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
}
