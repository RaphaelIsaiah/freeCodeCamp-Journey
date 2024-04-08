// HTML (DOM) elements selection
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const userInput = document.getElementById("text-input");
const outputText = document.getElementById("result-text");

// Initialization of palindrome check functionality
const palindromeCheck = (input) => {
  const initialInput = input; // Store for later output

  if (input === "") {
    alert("Please input a value");
    return; // for empty entries...
  }

  //   Cleaning input of all non-alphanumeric characters
  const regex = /[\W_]/gi;
  const lowerCaseString = input.replace(regex, "").toLowerCase();

  //   Using Template literals and conditional ternary operators to construct the result text.
  let resultText = `<strong>${initialInput}</strong> ${
    lowerCaseString === [...lowerCaseString].reverse().join("")
      ? "is"
      : "is not"
  } a palindrome.`;

  // Updating the content of outputText
  outputText.innerHTML = resultText;
  outputText.setAttribute("role", "alert"); // Enhance accessibility

  // Displaying the result
  resultDiv.classList.remove("hidden");
};

// Refactoring to enable DRY code in the implementation of the Palindrome Check functionality.
const handlePalindromeCheck = () => {
  palindromeCheck(userInput.value);
  userInput.value = "";
};

checkButton.addEventListener("click", handlePalindromeCheck);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handlePalindromeCheck();
  }
});

// // Implementation of Palindrome Check functionality (check button)
// checkButton.addEventListener("click", () => {
//   palindromeCheck(userInput.value);
//   userInput.value = ""; // resets the userInput.value to an empty string
// });

// // Implementation of Palindrome Check functionality (enter key)
// userInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     palindromeCheck(userInput.value);
//     userInput.value = ""; // resets the userInput.value to an empty string
//   }
// });

// Both /[\W_]/gi and /[^A-Za-z0-9]/gi have similar outcomes in terms of removing non-alphanumeric characters from a string.

// /[\W_]/gi Removes non-alphanumeric characters (including spaces, punctuation, and special symbols) as well as underscores.

// /[^A-Za-z0-9]/gi removes all non-alphanumeric characters i.e Removes all characters except uppercase letters, lowercase letters, and digits.

// /[^\W]/gi keeps underscores. This pattern matches any character that is not a non-word character (i.e., letters, digits, and underscores).
