// Pure functions for infix expressions
const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

// Higer-order function to evaluate infix expressions
const infixEval = (str, regex) => {
  const round = (num, precision = 10) =>
    Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);

  return str.replace(regex, (_match, arg1, operator, arg2) => {
    const num1 = parseFloat(arg1);
    const num2 = parseFloat(arg2);
    return round(infixToFunction[operator](num1, num2));
  });
};

// Recursively handles high precedence operators (* and /)
const highPrecedence = (str) => {
  let result = str;
  let regex = /(-?[\d.]+)([*\/])(-?[\d.]+)/;
  let evaluated = infixEval(result, regex);

  while (evaluated !== result) {
    result = evaluated;
    evaluated = infixEval(result, regex);
  }
  return result;
};

// Mathematical helper functions
const isEven = (num) => num % 2 === 0;

const sum = (nums) => nums.reduce((acc, el) => acc + el, 0);

const average = (nums) => sum(nums) / nums.length;

const median = (nums) => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;

  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.floor(middle + 1)];
};

// Spreadsheet functions
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
  random: ([x, y]) => Math.floor(Math.random() * (y || x) + (y ? x : 0)),
  range: (nums) => range(...nums),
  nodupes: (nums) => [...new Set(nums).values()],
};

// Composes and applies functions for spreadsheet evaluation
const applyFunction = (str) => {
  const noHigh = highPrecedence(str);
  const infix = /(-?[\d.]+)([+-])(-?[\d.]+)/;
  const str2 = infixEval(noHigh, infix);
  const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;

  // Converts arguments from string to an array of floats
  const toNumberList = (args) => args.split(",").map(parseFloat);

  const apply = (fn, args) => {
    const lowerCaseFn = fn.toLowerCase();
    if (!spreadsheetFunctions.hasOwnProperty(lowerCaseFn)) {
      throw new Error(`Unknown function: ${fn}`);
    }
    return spreadsheetFunctions[lowerCaseFn](toNumberList(args));
  };

  return str2.replace(functionCall, (_match, fn, args) => apply(fn, args));
};

// Generates a range of numbers
const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index);

// Generates a range of letters
const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map((code) =>
    String.fromCharCode(code)
  );

// Evaluates formulas, expanding ranges and cell references
const evalFormula = (x, cells) => {
  try {
    const idToText = (id) => {
      const cell = cells.find((cell) => cell.id === id);
      if (!cell) throw new Error(`Invalid cell reference: ${id}`);
      return cell.value || "";
    };

    const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
    const expandRange = (startChar, startNum, endChar, endNum) => {
      const rows = range(parseInt(startNum), parseInt(endNum));
      const columns = charRange(startChar, endChar);
      return columns.flatMap((char) => rows.map((num) => char + num));
    };

    const rangeExpanded = x.replace(
      rangeRegex,
      (_match, char1, num1, char2, num2) =>
        expandRange(char1, num1, char2, num2).join(",")
    );

    const cellRegex = /[A-J][1-9][0-9]?/gi;
    const cellExpanded = rangeExpanded.replace(cellRegex, (match) =>
      idToText(match.toUpperCase())
    );

    const functionExpanded = applyFunction(cellExpanded);
    return functionExpanded === x
      ? functionExpanded
      : evalFormula(functionExpanded, cells);
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

// UI initialization and update event handling
window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  };

  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  range(1, 99).forEach((number) => {
    createLabel(number);
    letters.forEach((letter) => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      input.onchange = update;
      container.appendChild(input);
    });
  });
};

// Updates the spreadsheet cells based on the formula or value
const update = (event) => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  let result;

  if (!value.includes(element.id) && value.startsWith("=")) {
    result = evalFormula(
      value.slice(1),
      Array.from(document.getElementById("container").children)
    );
  }
  if (result && result.startsWith("Error")) {
    element.classList.add("error");
    element.classList.remove("success");
  } else if (result !== undefined) {
    element.classList.remove("error");
    element.value = result;
    element.classList.add("success");
  }
};
