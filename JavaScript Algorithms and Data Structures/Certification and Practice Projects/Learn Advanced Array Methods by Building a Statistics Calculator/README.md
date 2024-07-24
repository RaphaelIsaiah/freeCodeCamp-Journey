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
