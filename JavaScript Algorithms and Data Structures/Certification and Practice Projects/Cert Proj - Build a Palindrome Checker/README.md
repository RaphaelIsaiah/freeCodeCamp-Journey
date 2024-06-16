// Implementation of Palindrome Check functionality (check button)
checkButton.addEventListener("click", () => {
  palindromeCheck(userInput.value);
  userInput.value = ""; // resets the userInput.value to an empty string
});

// Implementation of Palindrome Check functionality (enter key)
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    palindromeCheck(userInput.value);
    userInput.value = ""; // resets the userInput.value to an empty string
  }
});

Both /[\W_]/gi and /[^A-Za-z0-9]/gi have similar outcomes in terms of removing non-alphanumeric characters from a string.

/[\W_]/gi Removes non-alphanumeric characters (including spaces, punctuation, and special symbols) as well as underscores.

/[^A-Za-z0-9]/gi removes all non-alphanumeric characters i.e Removes all characters except uppercase letters, lowercase letters, and digits.

/[^\W]/gi keeps underscores. This pattern matches any character that is not a non-word character (i.e., letters, digits, and underscores).
