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
      container.appendChild(input);
    });
  });
};
