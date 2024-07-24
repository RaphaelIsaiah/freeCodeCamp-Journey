// getMean Functionality
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;
// .reduce() condenses the array into a single value; in this case sums up the values in the array.

// Calculate Functionality
const calculate = (event) => {

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
