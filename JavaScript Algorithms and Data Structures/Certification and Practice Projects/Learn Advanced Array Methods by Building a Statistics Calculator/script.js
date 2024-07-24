// getMean Functionality
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;
// .reduce() condenses the array into a single value; in this case sums up the values in the array.

// getMedian Functionality
const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  const median =
    array.length % 2 === 0
      ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
      : sorted[Math.floor(array.length / 2)];
  return median;
};

// getMode Functionality
const getMode = (array) => {
  const counts = {};

  array.forEach((el) => {
    if (counts[el]) {
      counts[el] += 1;
    } else {
      counts[el] = 1;
    }
  });

  // Refactored, but same functionality.
  array.forEach((el) => (counts[el] = (counts[el] || 0) + 1));

  return counts;
};

// Calculate Functionality
const calculate = (event) => {
  // Get the user's inputted values.
  const value = document.querySelector("#numbers").value;
  // Split the strings stored in the value variable into an array of substrings.
  const array = value.split(/,\s*/g);
  // Chaining the map and filter array methods to the array variable.
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  // const mode = getMode(numbers);
  console.log(getMode(numbers));

  // Displaying the result on the screen
  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
};
