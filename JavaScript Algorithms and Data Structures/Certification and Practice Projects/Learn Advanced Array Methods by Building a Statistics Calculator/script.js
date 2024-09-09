// getMean Functionality
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;
// .reduce() condenses the array into a single value; in this case sums up the values in the array.

// getMedian Functionality
const getMedian = (array) => {
  const sorted = array.slice().toSorted((a, b) => a - b);
  const median =
    array.length % 2 === 0
      ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
      : sorted[Math.floor(array.length / 2)];
  return median;
};

// getMode Functionality
const getMode = (array) => {
  const counts = {};
  array.forEach((el) => (counts[el] = (counts[el] || 0) + 1));

  if (new Set(Object.values(counts)).size === 1) {
    return null;
  } // checks if every value appears the same no. of times, then there is no mode.

  // Finding the value that occurs with the highest frequency.
  const highest = Object.keys(counts).sort((a, b) => {
    return counts[b] - counts[a];
  })[0];

  // Checks if there are multiple numbers in a series occuring at the same highest frequency
  const mode = Object.keys(counts).filter((el) => {
    return counts[el] === counts[highest];
  });

  // Since mode is an array, we return it as a string seperated with a comma and space
  return mode.join(", ");
};

// getRange Functionality
const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
};

// getVariance Functionality
const getVariance = (array) => {
  const mean = getMean(array);
  const variance =
    array.reduce((acc, el) => {
      const difference = el - mean;
      const squared = difference ** 2;
      return acc + squared;
    }, 0) / array.length;

  return variance;
};

// getStandardDeviation Functionality
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);

  return standardDeviation;
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
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  // Displaying the result on the screen
  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#standardDeviation").textContent = standardDeviation;
};
