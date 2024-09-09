// Function to parse infix expressions
const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

// Function to evaluate the infix expressions
const infixEval = (str, regex) =>
  str.replace(regex, (_match, arg1, operator, arg2) =>
    infixToFunction[operator](parseFloat(arg1), parseFloat(arg2))
  );

// Function that accounts for the order of operations in the mathematical infix expressions
const highPrecedence = (str) => {
  const regex = /([\d.]+)([*\/])([\d.]+)/;
  const str2 = infixEval(str, regex);
};

// Checks if the num is even or not.
const isEven = (num) => num % 2 === 0;

// Sum Function
// This function takes an array of numbers and returns the sum of all the numbers in the array.
const sum = (nums) => nums.reduce((acc, el) => acc + el, 0);

// Calculates the average
const average = (nums) => sum(nums) / nums.length;

// Calculates median
const median = (nums) => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;

  // checks if length is even, if it is returns the average of the number at the middle index and the number after that, if it odd, it returns the number at the middle index.
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.ceil(middle)];
};

// Functionality to keep track of all the spreadsheet's functions
const spreadsheetFunctions = {
  sum,
  average,
  median,
};

// Helper functions
// Function to generate a range of numbers
const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index);

// Function to generate a range of letters using the range function.
const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map((code) =>
    String.fromCharCode(code)
  );

// Function to parse and evaluate the input string
const evalFormula = (x, cells) => {
  const idToText = (id) => cells.find((cell) => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = (num) => (character) => idToText(character + num);
  const addCharacters = (character1) => (character2) => (num) =>
    charRange(character1, character2).map(elemValue(num));
  const rangeExpanded = x.replace(
    rangeRegex,
    (_match, char1, num1, char2, num2) =>
      rangeFromString(num1, num2).map(addCharacters(char1)(char2))
  );
  const cellRegex = /[A-J][1-9][0-9]?/gi;
  const cellExpanded = rangeExpanded.replace(cellRegex, (match) =>
    idToText(match.toUpperCase())
  );
};

// window.onload event
window.onload = () => {
  const container = document.getElementById("container");
  // function to create a label element and append it to the container
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  };
  // Creates a range of letters from A - J
  const letters = charRange("A", "J");
  // Creates a label element using each letter.
  letters.forEach(createLabel);
  // Creates a range of numbers from 1 - 99, then creates label elements using each number.
  range(1, 99).forEach((number) => {
    createLabel(number);
    letters.forEach((letter) => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      // input element call the update function whenever there is a change
      input.onchange = update;
      container.appendChild(input);
    });
  });
};

// Update Function - To make use of the spreadsheet functions.
const update = (event) => {
  const element = event.target;
  // .replace removes all whitespaces
  const value = element.value.replace(/\s/g, "");
  // checks if value does not include the element id and if value[0] is === "="
  if (!value.includes(element.id) && value.startsWith("=")) {
  }
};
