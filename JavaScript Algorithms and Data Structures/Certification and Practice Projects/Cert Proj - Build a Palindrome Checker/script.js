const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const userInput = document.getElementById("text-input");


// Initialization of palindrome check functionality
const palindromeCheck = (input) => {
  const initialInput = input; // Store for later output

  if (input === "") {
    alert("Please input a value");
    return; // for empty entries...
  }

  
};

// Implementation of Palindrome Check functionality.
checkButton.addEventListener("click", () => {
  palindromeCheck(userInput.value);
  userInput.value = "";
});
