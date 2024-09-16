// These are Pure functions as they always return the same result for the same inputs and have no side effects (infixToFunction and the functions it contains.)
// Function to parse infix expressions
const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

// A Higher Order function.
// Function to evaluate the infix expressions
const infixEval = (str, regex) =>
  // str.replace(regex, (_match, arg1, operator, arg2) =>
  //   infixToFunction[operator](parseFloat(arg1), parseFloat(arg2))
  // );
  // Refactoring the regex to capture possible negative numbers.
  str.replace(regex, (_match, arg1, operator, arg2) => {
    const num1 = parseFloat(arg1);
    const num2 = parseFloat(arg2);
    const round = (num, precision = 10) => {
      return (
        Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)
      );
    };
    return round(infixToFunction[operator](num1, num2));
  });

// Recursion...
// Function that accounts for the order of operations in the mathematical infix expressions
const highPrecedence = (str) => {
  //   const regex = /([\d.]+)([*\/])([\d.]+)/;
  //   const str2 = infixEval(str, regex);
  //   return str2 === str ? str : highPrecedence(str2);
  // this line recursively calls highPrecedence() on str2 if it is not equal to str, to continue evaluating any high predence operations.

  // Refactoring to avoid deep recursion which could affect performance, especially with complex expressions.
  let result = str;
  let regex = /(-?[\d.]+)([*\/])(-?[\d.]+)/; // with the optional "-", the regex will capture both +ve and -ve numbers.
  let evaluated = infixEval(result, regex);

  while (evaluated !== result) {
    result = evaluated;
    evaluated = infixEval(result, regex);
  }

  return result;
  // This version will improve performance by evaluating result until there are no more highPrecedence operators to process.
};

// Checks if the num is even or not.
const isEven = (num) => num % 2 === 0;

// Immutability... sum, average, and median work with immutable data, they do not modify the original array but return new values or arrays.

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
  // return isEven(length)
  //   ? average([sorted[middle], sorted[middle + 1]])
  //   : sorted[Math.ceil(middle)];

  // refactoring... by using Math.floor we can directly access the correct index for odd-length arrays.
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.floor(middle + 1)];
};

// Declarative programming is used here amongst other places to describe what should be done, rather than how to do it.
// Functionality to keep track of all the spreadsheet's functions
const spreadsheetFunctions = {
  "": (arg) => arg,
  sum,
  average,
  median,
  even: (nums) => nums.filter(isEven),
  someeven: (nums) => nums.some(isEven),
  everyeven: (nums) => nums.every(isEven),
  firsttwo: (nums) => nums.slice(0, 2),
  lasttwo: (nums) => nums.slice(-2),
  has2: (nums) => nums.includes(2),
  increment: (nums) => nums.map((num) => num + 1),
  // random: (nums) => {
  //   const [first, second] = nums.slice(0, 2);
  //   const range = second;
  //   return Math.floor(Math.random() * range) + first;
  // },
  // random: ([x, y]) => Math.floor(Math.random() * y + x),
  random: ([x, y]) => Math.floor(Math.random() * (y || x) + (y ? x : 0)), // Handles edge cases where only one argument (x) is provided, making it return a random number between 0 and x.
  range: (nums) => range(...nums),
  nodupes: (nums) => [...new Set(nums).values()],
};

// Function Composition... the applyFunction composes multiple functions to evaluate a string containing spreadsheet formulas.
// Application of function parsing logic to strings
const applyFunction = (str) => {
  const noHigh = highPrecedence(str); // Handle * and / first
  const infix = /(-?[\d.]+)([+-])(-?[\d.]+)/; // Updated regex to also handle negative numbers
  const str2 = infixEval(noHigh, infix); // Evaluate + and - operations

  // This expression will look for function calls like sum(1, 4) in the string
  const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i; // Regex for function calls like sum(1, 4)

  // Converts arguments from string to an array of floats
  const toNumberList = (args) => args.split(",").map(parseFloat);

  // Function to apply spreadsheetFunctions
  // const apply = (fn, args) =>
  //   spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));

  // Refactoring the apply function to include catching errors
  const apply = (fn, args) => {
    const lowerCaseFn = fn.toLowerCase(); // Precompute lowerCase version of fn name
    if (!spreadsheetFunctions.hasOwnProperty(lowerCaseFn)) {
      throw new Error(`Unknown function: ${fn}`); // Error handling for unknown fxns
    }
    return spreadsheetFunctions[lowerCaseFn](toNumberList(args)); // Apply the spreadsheetFunctions
  };

  // Replace the function call in the string with the computed value
  return str2.replace(functionCall, (_match, fn, args) => apply(fn, args));
  // return str2.replace(functionCall, (match, fn, args) =>
  //   spreadsheetFunctions.hasOwnProperty(fn.toLowerCase())
  //     ? apply(fn, args)
  //     : match
  // );
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
// the .charCodeAt(0) converts the start and end values in the range() to numbers, as the range function expects numbers and the start and end values are strings. .map((code) => String.fromCharCode(code)) converts the numbers range() returns back to characters.

// Function to parse and evaluate the input string
// Refactoring the evalFormula to include handling errors.
// const evalFormula = (x, cells) => {
//   const idToText = (id) => cells.find((cell) => cell.id === id).value;
//   const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi; // matches cell ranges in a formula.
//   // const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
//   const expandRange = (startChar, startNum, endChar, endNum) => {
//     const rows = range(parseInt(startNum), parseInt(endNum));
//     const columns = charRange(startChar, endChar);
//     return columns.flatMap((char) => rows.map((num) => char + num));
//   };

//   const elemValue = (num) => (character) => idToText(character + num);
//   const addCharacters = (character1) => (character2) => (num) =>
//     charRange(character1, character2).map(elemValue(num));
//   // const rangeExpanded = x.replace(
//   //   rangeRegex,
//   //   (_match, char1, num1, char2, num2) =>
//   //     rangeFromString(num1, num2).map(addCharacters(char1)(char2))
//   // );
//   const rangeExpanded = x.replace(
//     rangeRegex,
//     (_match, char1, num1, char2, num2) =>
//       expandRange(char1, num1, char2, num2).join(",")
//   );
//   const cellRegex = /[A-J][1-9][0-9]?/gi;
//   const cellExpanded = rangeExpanded.replace(cellRegex, (match) =>
//     idToText(match.toUpperCase())
//   );
//   // Applying the function parsing logic to the evalFormula logic
//   const functionExpanded = applyFunction(cellExpanded);

//   return functionExpanded === x
//     ? functionExpanded
//     : evalFormula(functionExpanded, cells);
// };

const evalFormula = (x, cells) => {
  try {
    const idToText = (id) => {
      const cell = cells.find((cell) => cell.id === id);
      if (!cell) throw new Error(`Invalid cell reference: ${id}`);
      return cell.value;
    };

    const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi; // matches cell ranges in a formula.
    // const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
    const expandRange = (startChar, startNum, endChar, endNum) => {
      const rows = range(parseInt(startNum), parseInt(endNum));
      const columns = charRange(startChar, endChar);
      return columns.flatMap((char) => rows.map((num) => char + num));
    };

    const elemValue = (num) => (character) => idToText(character + num);
    const addCharacters = (character1) => (character2) => (num) =>
      charRange(character1, character2).map(elemValue(num));

    const rangeExpanded = x.replace(
      rangeRegex,
      (_match, char1, num1, char2, num2) =>
        expandRange(char1, num1, char2, num2).join(",")
    );
    const cellRegex = /[A-J][1-9][0-9]?/gi;
    const cellExpanded = rangeExpanded.replace(cellRegex, (match) =>
      idToText(match.toUpperCase())
    );
    // Applying the function parsing logic to the evalFormula logic
    const functionExpanded = applyFunction(cellExpanded);

    return functionExpanded === x
      ? functionExpanded
      : evalFormula(functionExpanded, cells);
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

// Initialization... window.onload initializes the spreadsheet by creating labels and input fields
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
      container.appendChild(input); // Appending the input element to the container element as a child immediately brings out the input boxes.
    });
  });
};

// Event handling... update function handles changes to the input fields and updates the values based on the formulas.
// Update Function - To make use of the spreadsheet functions.
const update = (event) => {
  const element = event.target;
  // .replace removes all whitespaces
  const value = element.value.replace(/\s/g, "");
  // Checks if a function is called, and evaluates it.
  // checks if value does not include the element id and if value[0] is === "="
  if (!value.includes(element.id) && value.startsWith("=")) {
    result = evalFormula(
      value.slice(1), // Strip the "=" before evaluation
      Array.from(document.getElementById("container").children)
    );
  }
  if (result.startsWith("Error")) {
    element.classList.add("error");
    element.classList.remove("success");
  } else {
    element.classList.remove("error");
    element.value = result; // Update the input value with the result
    element.classList.add("success");
  }
};
