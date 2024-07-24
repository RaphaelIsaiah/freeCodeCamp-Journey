// getMean Functionality
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;
// .reduce() condenses the array into a single value; in this case sums up the values in the array.

// Test code to show how to get median for odd and even lengths of arrays.
const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];

const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const isOdd = testArr1.length % 2 === 1;
console.log(isOdd);

const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);

const firstMiddleNumber = testArr2[testArr2.length / 2];
const secondMiddleNumber = testArr2[testArr2.length / 2 - 1];
const evenListMedian = getMean([firstMiddleNumber, secondMiddleNumber]);
console.log(evenListMedian);

// getMedian Functionality
const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
};

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
  const median = getMedian(numbers);

  // Displaying the result on the screen
  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
};
