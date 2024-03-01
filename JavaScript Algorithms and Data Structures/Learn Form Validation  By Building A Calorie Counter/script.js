/**
 * To access an HTML element with a given id name, you can use the getElementById() method.
 * Here is an example of how to use this method:
 * <h1 id="title">Main title</h1>
 * const mainTitleElement = document.getElementById('title');
 *
 * In programming,it is standard practice to prefix a variable with is or has to indicate that the variable is a boolean.
 * let isRunning = true;
 * let hasCompleted = false;
 *
 * Even though you set an input element to be a number, JavaScript receives a string value. You need to write a function to clean the string value and ensure you have a number.
 *
 * The split() method splits a string into an array of substrings, and returns the new array.
 * You can pass in an optional seperator which tells the method where each split should happen.
 * For example, passing an empty string into the split method will split the string into an array of individual characters.
 * const str = "Hello World";
 * const strArray = str.split("");
 * //["H", "e", "l", "l", "o", "", "W", "o", "r", "l", "d"]
 *
 * You will need to check if the array ["+", "-", " "] does not include the current character. You can use a combination of the includes() method and the ! operator to do this.
 * The .includes() method returns true if the array contains the character, and false if not
 * The logical NOT operator (!) will return the opposite of the value of the .includes() method.
 * Here is an example checking if the current character is not in the vowels array. If it is not, that current character is pushed into the consonantArray:
 * const inputString = "Hello World";
 * const charArray = inputString.split('');
 * const consonantArray = [];
 * for (let i = 0; i < charArray.length; i++) {
 * if (!['a', 'e', 'i', 'o', 'u'].includes
 * (charArray[i])) {
 * consonantArray.push(charArray[i]);
 * }
 * }
 *
 * While looping through the string works, creating a new array is inefficient for memory and runtime performance.
 * Instead, you can use Regular Expressions (referred to as "regex") to match specific characters.
 * Regex in JS is indicates by a patter wrapped in forward slashes - for example:
 * const regex = /hello/;
 */

// Declaration of Variables - use of document object models to access the HTML elements.
const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
  const strArray = str.split("");
  const cleanStrArray = [];
  // this for loop iterates through each character in the strArray array.
  for (let i = 0; i < strArray.length; i++) {
    if (!["+", "-", " "].includes(strArray[i])) {
      cleanStrArray.push(strArray[i]);
    }
  }
}
