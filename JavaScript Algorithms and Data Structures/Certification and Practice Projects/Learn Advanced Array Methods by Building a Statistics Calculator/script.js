// document.addEventListener("DOMContentLoaded"...) Ensures that the code runs when the HTML document is fully parsed and ready for manipulation.
// document.addEventListener("DOMContentLoaded", () => {
// const form = document.getElementById("myForm");

// getMean Functionality
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;
// .reduce() condenses the array into a single value; in this case sums up the values in the array.

// Calculate Functionality
const calculate = (event) => {
  // event.preventDefault(); // Stops the page from refreshing after submission.

  // Get the user's inputted values.
  const value = document.querySelector("#numbers").value;
  // Split the strings stored in the value variable into an array of substrings.
  const array = value.split(/,\s*/g);
  // Chaining the map and filter array methods to the array variable.
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  // --- Mean ---
  const mean = getMean(numbers);

  document.querySelector("#mean").textContent = mean;
};

// Event Listeners
// form.addEventListener("submit", calculate);
// });

// Adding return false; in the HTML file makes all these other commented codes redundant.
