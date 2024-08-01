# DESCRIPTION

- Functional Programming is a popular approach to software development. In Functional Programming, developers organize code into smaller functions, then combine those functions to build complex programs.
- In this spreadsheet application project, you'll learn about parsing and evaluating mathematical expressions, implementing spreadsheet functions, handling cell references, and creating interactive web interfaces. You'll learn how to dynamically update the page based on user input.
- This project will cover concepts like the map(), find(), and includes() methods and the parseInt() function.

# Notes

- The global window object represents the browser window (or tab). It has an onload property which allows you to define behavior when the window has loaded the entire page, including stylesheets and scripts.
- Functions are ideal for reusable logic. When a function itself needs to reuse logic, you can declare a nested function to handle that logic. Here is an example of a nested function:
  const outer = () => {
  const inner = () => {
  };
  };

- Your array will need to be the size of the range. You can calculate this by finding the difference between end and start, and adding 1 to the result.
- The Array() constructor has a .fill() method which can be used to fill an array with a value. You can use this to fill your array with the start value.
- Your range function expects numbers, but your start and end values will be strings (specifically, they will be single characters such as A). Convert your start and end values in your range() call to numbers by using the .charCodeAt() method on them, passing the number 0 as the argument to that method.
- range() will return an array of numbers, which you need to convert back into characters. Chain the .map() method to your range() call. Pass a callback function that takes code as the parameter and implicitly returns the value of passing code to the String.fromCharCode() method.
- Remember that range() returns an array, so you can chain array methods directly to the function call.
- Object properties consist of key/value pairs. You can use shorthand property names when declaring an object literal. When using the shorthand property name syntax, the name of the variable becomes the property key and its value the property value.
- The following example declares a user object with the properties userId, firstName and loggedIn:
  const userId = 1;
  const firstName = "John";
  const loggedIn = true;
  const user = {
  userId,
  firstName,
  loggedIn,
  };
  console.log(user); // { userId: 1, firstName: 'John', loggedIn: true }
- Since your update event is running as a change event listener, the event parameter will be a change event. The target property of the change event represents the element that changed. Assign the target property to a new variable called element.
- Because the change event is triggering on an input element, the element will have a value property that represents the current value of the input. Assign the value property of element to a new variable called value, and use .replace() to remove all whitespace.
- Spreadsheet software typically uses = at the beginning of a cell to indicate a calculation should be used, and spreadsheet functions should be evaluated.
- In order to run your spreadsheet functions, you need to be able to parse and evaluate the input string. This is a great time to use another function.