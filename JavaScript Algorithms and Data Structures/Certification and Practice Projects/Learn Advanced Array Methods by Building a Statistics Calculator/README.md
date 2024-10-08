# Description

- As you expand your JavaScript skills, you'll want to get comfortable with array manipulation methods, such as map(), reduce(), and filter().
- In this statistics calculator project, you'll gain experience with handling user input, DOM manipulation, and method chaining. You'll get practice by performing statistical calculations like mean, median, mode, variance, and standard deviation.

# Notes

- The .split() method takes a string and splits it into an array of strings. You can pass it a string of characters or a RegEx to use as a separator. For example, string.split(",") would split the string at each comma and return an array of strings.
- Recall that .map() creates a new array instead of mutating the original array.
- The .filter() method will allow you to filter elements out of an array, creating a new array in the process.
- Array methods can often be chained together to perform multiple operations at once. As an example:
- Example Code: array.map().filter();
- The .map() method is called on the array, and then the .filter() method is called on the result of the .map() method. This is called method chaining.
- The mean is the average value of all numbers in a list. The first step in calculating the mean is to take the sum of all numbers in the list. Arrays have another method, called .reduce(), which is perfect for this situation. The .reduce() method takes an array and applies a callback function to condense the array into a single value.
- Like the other methods, .reduce() takes a callback. This callback, however, takes at least two parameters. The first is the accumulator, and the second is the current element in the array. The return value for the callback becomes the value of the accumulator on the next iteration.
- Example Code: array.reduce((acc, el) => {});
- The .reduce() method takes a second argument that is used as the initial value of the accumulator. Without a second argument, the .reduce() method uses the first element of the array as the accumulator, which can lead to unexpected results.
- To be safe, it's best to set an initial value. Here is an example of setting the initial value to an empty string:
- Example Code: array.reduce((acc, el) => acc + el.toLowerCase(), "");
- The first step in calculating the median is to ensure the list of numbers is sorted from least to greatest. Once again, there is an array method ideal for this – the .sort() method.
- By default, the .sort() method converts the elements of an array into strings, then sorts them alphabetically. This works well for strings, but not so well for numbers. For example, 10 comes before 2 when sorted as strings, but 2 comes before 10 when sorted as numbers.
- To fix this, you can pass in a callback function to the .sort() method. This function takes two arguments, which represent the two elements being compared. The function should return a value less than 0 if the first element should come before the second element, a value greater than 0 if the first element should come after the second element, and 0 if the two elements should remain in their current positions.
- To sort your numbers from smallest to largest, pass a callback function that takes parameters a and b, and returns the result of subtracting b from a.
- To check if a number is even or odd, you can use the modulus operator %. The modulus operator returns the remainder of the division of two numbers.
- Here is an example checking if an array length is even or odd:
  // check if array length is even
  arr.length % 2 === 0;
  // check if array length is odd
  arr.length % 2 === 1;
- If the remainder is 0, the number is even. If the remainder is 1, the number is odd.
- Here is how to find the middle number of an array with an odd number of elements:
- Example Code:
  arr[Math.floor(arr.length / 2)];
- Here is a longer example finding the middle number of an array with 5 elements:
- Example Code:
  const numbers = [1, 2, 3, 4, 5];
  const middleNumber = numbers[Math.floor(numbers.length / 2)];
  console.log(middleNumber); // 3
- The reason why you use Math.floor is because the result of dividing an odd number by 2 will be a decimal. Math.floor will round down to the nearest whole number.
- To find the median of an even list of numbers, you need to find the two middle numbers and calculate the mean of those numbers.
- Here is how to find the two middle numbers of an even list of items:
- Example Code:
  // first middle number
  arr[arr.length / 2];
  // second middle number
  arr[(arr.length / 2) - 1];
- To find the median, you can use the getMean function which adds the middle numbers and divides the sum by 2.
- Example Code:
  const numbers = [1, 2, 3, 4];
  const firstMiddleNumber = numbers[numbers.length / 2];
  const secondMiddleNumber = numbers[(numbers.length / 2) - 1];
  // result is 2.5
  getMean([firstMiddleNumber, secondMiddleNumber]);
- To calculate the occurence use the following approach:
- Example code:
  const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
  const counts = {};
  numbersArr.forEach((el) => {
  if (counts[el]) {
  counts[el] += 1;
  } else {
  counts[el] = 1;
  }
  });
- Check if the current number is already in the counts object. If it is, increment it by 1. If it is not, set it to 1.
- Resulting object. The keys are the numbers from the array and the values are the number of times each number appears in the list:
- Example code:
  { 1: 3, 2: 3, 3: 3, 4: 3, 5: 2 }
- There are a few edge cases to account for when calculating the mode of a dataset. First, if every value appears the same number of times, there is no mode.
- To calculate this, you will use a Set. A Set is a data structure that only allows unique values. If you pass an array into the Set constructor, it will remove any duplicate values.
- If multiple numbers in a series occur at the same highest frequency, they are all considered the mode. Otherwise, the mode is the number that occurs most often, that single number is the mode.
- You can handle both of these cases at once with the .filter() method. Start by declaring a mode variable and assigning it the value of Object.keys(counts).
- Range is the difference between the largest and smallest numbers in the list.
- You previously learned about the global Math object. Math has a .min() method to get the smallest number from a series of numbers, and the .max() method to get the largest number. Here's an example that gets the smallest number from an array:
  const numbersArr = [2, 3, 1];
  console.log(Math.min(...numbersArr));
  // Expected output: 1
- The variance of a series represents how much the data deviates from the mean, and can be used to determine how spread out the data are.
- Standard deviation is the square root of the variance.
- To calculate a root exponent, such as x−−√n
  , you can use an inverted exponent x1/n
  . JavaScript has a built-in Math.pow() function that can be used to calculate exponents.
- Here is the basic syntax for the Math.pow() function:
  Math.pow(base, exponent);
- Here is an example of how to calculate the square root of 4:
  const base = 4;
  const exponent = 0.5;
  // returns 2
  Math.pow(base, exponent);
- The Math object has a .sqrt() method specifically for finding the square root of a number.
- There is one last thing to fix. The .sort() method mutates the array it's called on. It is generally bad practice to mutate a function parameter, which array is.
- To fix this, add an empty .slice() call before your .sort() method. The empty .slice() call will make a shallow copy of the array, which you are free to mutate.
- The .sort() method mutates the original array - in other words, it modifies the order of the elements directly. This is generally considered bad practice, as it can result in unexpected side effects. Instead, you should use the .toSorted() method, which creates a new array. Change your .sort() call to .toSorted(). Do not modify the callback function.