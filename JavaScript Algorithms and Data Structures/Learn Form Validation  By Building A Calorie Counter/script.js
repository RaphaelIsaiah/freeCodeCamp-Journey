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
 * Pass the string input[type="text"] to the querySelectorAll() method.
 * This will return a NodeList of all the text inputs in the form. You can then access the length property of the NodeList to get the number of entries.
 *
 * Just as in the RPG project where the button's behaviour was set by editing its onclick property, you can also edit an element's behaviour by adding an event listener.
 * The following example uses the addEventListener method to add a click event to a button. When the button is clicked, the printName function is called.
 * <button class="btn">Print name</button>
 * const button = document.querySelector('.btn');
 * function printName() {
 * console.log("Jessica");
 * }
 * button.addEventListener('click', printName);
 * The addEventListener method takes two arguments. The first is the event to listen to. (Ex. 'click') The second is the callback function, or the function that runs when the event is triggered.
 *
 * Try adding a couple of entries to the Breakfast category, and you may notice some bugs! The first thing we need to fix is the entry counts – the first entry should have a count of 1, not 0.
 * This bug occurs because you are querying for input[type="text"] elements before adding the new entry to the page. To fix this, update your entryNumber variable to be the value of the length of the query plus 1. Add this on your declaration line, not in your template strings.
 * Your other bug occurs if you add a Breakfast entry, fill it in, then add a second Breakfast entry. You'll see that the values you added disappeared.
 * This is because you are updating innerHTML directly, which does not preserve your input content. Change your innerHTML assignment to use the insertAdjacentHTML() method of targetInputContainer instead.
 * The insertAdjacentHtml method takes two arguments. The first argument is a string that specifies the position of the inserted element. The second argument is a string containing the HTML to be inserted.
 * For the first argument, pass the string "beforeend" to insert the new element as the last child of targetInputContainer. For the second argument, pass your HTMLString variable.
 *
 * The list parameter is going to be the result of a query selector, which will return a NodeList. A NodeList is a list of elements like an array. It contains the elements that match the query selector. You will need to loop through these elements in the list.
 * In previous steps, you learned how to loop through an array using a for loop. You can also use a for...of loop to loop through an array and a NodeList.
 * A for...of loop is used to iterate over elements in an iterable object like an array. The variable declared in the loop represents the current element being iterated over.
 * for (const element of elementArray) {
 * console.log(element);
 * }
 * The NodeList values you will pass to list will consist of input elements. So you will want to look at the value attribute of each element. Assign item.value to a const variable called currVal.
 * You will need to clean the user's input here using the input cleaner function written earlier. So update currVal to be the result of calling cleanInputString with item.value
 * You also need to confirm the input is valid. Declare an invalidInputMatch variable, and assign it the result of calling your isInvalidInput function with currVal as the argument.
 * Remember that your isInvalidInput function returns String.match, which is an array of matches or null if no matches are found.
 * In JavaScript, values can either be truthy or falsy. A value is truthy if it evaluates to true when converted to a Boolean. A value is falsy if it evaluates to false when converted to a Boolean. null is an example of a falsy value.
 * You need to check if invalidInputMatch is truthy – you can do this by passing the variable directly to your if condition (without a comparison operator). Here's an example of checking the truthiness of helloWorld.
 * if (helloWorld){}
 *
 * Browsers have a built in alert() function, which you can use to display a pop-up message to the user. The message to display is passed as the argument to the alert() function.
 * In programming, null is meant to represent the absence of a value. In this case, if the user enters an invalid input, you want to alert them and then return null to indicate that the function has failed.
 * Remember that return ends the execution of a function.
 * After your if block, you need to handle the logic for when the input is valid. Because your if statement returns a value, you do not need an else statement.
 * Use the addition assignment operator to add currVal to your calories total. You'll need to use the Number constructor to convert currVal to a number.
 * The Number constructor is a function that converts a value to a number. If the value cannot be converted, it returns NaN which stands for "Not a Number".
 * Here is an example:
 * Number("10"); // returns the number 10
 * Number(abc); // returns NaN
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
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  // Building a dynamic HTML string to add to the webpage...
  const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input
    type="text"
    id="${entryDropdown.value}-${entryNumber}-name"
    placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`"Invalid Input: "${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}

addEntryButton.addEventListener("click", addEntry);
