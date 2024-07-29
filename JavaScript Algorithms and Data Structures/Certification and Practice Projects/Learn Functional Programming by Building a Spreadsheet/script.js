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
