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
 *
 * Note that you need to use the \ to escape the +, because a + has a special meaning in regular expressions.
 * const regex = /\+-/;
 * In regex, shorthand character classes allow you to match specific characters without having to write those characters in your pattern. Shorthand character classes are preceded with a backlash (\). The character class \s will match any whitespace character.
 * /+-\s/ looks for +, -, and a space in order.
 * This would match +- hello but would not match +hello.
 * To tell the pattern to match each of these characters individually, you need to turn them into a character class. This is done by wrapping the characters you want to match in brackets.
 * For example, this pattern will match the characters h,e,l,or o:
 * const regex = /[helo]/;
 * Since you are using a character class, you longer need to escape the + character.
 * Regex can also take specific flags to alter the pattern matching behaviour. Flags are added after the closing /. The g flag, which stands for "global", will tell the pattern to continue looking after it has found a match. Here is an example:
 * const helloRegex = /hello/g;
 *
 * Strings have a .replace() method which allows you to replace characters in the string with another string.
 * .replace takes two arguments. The first is the character sequence to replace -this can either be a string or a regex pattern. The second is the string to replace that sequence with.
 * For e.g, this would replace all instances of l and 1:
 * "hello".replace(/l/g,"1");
 * In HTML, number inputs allow for exponential notation (such as 1e10). You need to filter those out.
 * The e in a number input can also be an uppercase E. Reges has a flag for this however - the i flag, which stands for "insensitive".
 * /Hello/i
 * The above regex would match without case in which it is written being a hindrance.
 * The i flag makes your pattern case-insensitive.
 * Number inputs only allow the e to occur between two digits.
 * To match any number, you can use the character class [0-9]. This will match any digit between 0 and 9.
 * The + modifier in a regex allows you to match a pattern that occurs one or more times.
 * To match your digit pattern one or more times, add a plus after each of the digit character classes.
 * For example [0-9]+
 * There is a shorthand character class to match any digit: \d
 *
 * Strings have a .match() method, which takes a regex argument.
 * .match() will return an array of match results - containing either the first match, or all matches if the global flag is used.
 * const str = 'example string';
 * const regex = /example/;
 * const result = str.match(regex); // Returns ['example']
 *
 * Remember that you queried that dropdown earlier in your JavaScript and assigned it to the entryDropdown button. You can use the value property to get the value of the selected option.
 *
 * Now you need to target the .input-container element within the element that has your targetId. Declare a new targetInputContainer variable, and assign it the value of document.querySelector(). Use concatenation to separate targetId and '.input-container' with a space, and pass that string to querySelector().
 *
 * JavaScript has a feature called template literals, which allow you to interpolate variables directly within a string.
 * Template literals are denoted with backticks ``, as opposed to single or double quotes.
 * Variables can be passed in to a template literal by surrounding the variable with ${} – the value of the variable will be inserted into the string.
 * For example:
 * const name = "Naomi";
 * const templateLiteral = `Hello, my name is ${name}~!`;
 * console.log(templateLiteral);
 * The console will show the string "Hello, my name is Naomi~!"
 *
 * You will want to number the entries a user adds.
 * To get all of the number inputs, you can use the querySelectorAll() method.
 * The querySelectorAll() method returns a NodeList of all the elements that match the selector.
 * A NodeList is an array-like object, so you can access the elements using bracket notation.
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
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const targetId = "#" + entryDropdown.value;
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length;
}
