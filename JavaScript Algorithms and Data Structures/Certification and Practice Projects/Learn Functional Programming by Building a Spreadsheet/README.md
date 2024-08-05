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
- You need to be able to match cell ranges in a formula. Cell ranges can look like A1:B12 or A3:A25. You can use a regular expression to match these patterns.
- The concept of returning a function within a function is called currying. This approach allows you to create a variable that holds a function to be called later, but with a reference to the parameters of the outer function call.
- For example:
  const innerOne = elemValue(1);
  const final = innerOne("A");
- innerOne would be your inner function, with num set to 1, and final would have the value of the cell with the id of A1. This is possible because functions have access to all variables declared at their creation. This is called closure.
- In your elemValue function, you explicitly declared a function called inner and returned it. However, because you are using arrow syntax, you can implicitly return a function. For example:
  const curry = soup => veggies => {};
- curry is a function which takes a soup parameter and returns a function which takes a veggies parameter.
- You can pass a function reference as a callback parameter. A function reference is a function name without the parentheses. For example:
  const myFunc = (val) => `value: ${val}`;
  const array = [1, 2, 3];
  const newArray = array.map(myFunc);
- The .map() method here will call the myFunc function, passing the same arguments that a .map() callback takes. The first argument is the value of the array at the current iteration, so newArray would be [value: 1, value: 2, value: 3].
- Because elemValue returns a function, your addCharacters function ultimately returns an array of function references. You want the .map() method to run the inner function of your elemValue function, which means you need to call elemValue instead of reference it. Pass num as the argument to your elemValue function.
- The second argument to the .replace() method does not have to be a string. You can instead pass a callback function to run more complex logic on the matched string. The callback function takes a few parameters. The first is the matched string. Pass an empty callback function to your .replace() call, and give it a match parameter.
- The callback function then has a parameter for each capture group in the regular expression. In your case, rangeRegex has four capture groups: the first letter, the first numbers, the second letter, and the second numbers. Give your callback function four more parameters to match those capture groups: char1, num1, char2, and num2. char will be short for character.
- Your addCharacters(char1) is also returning a function, which returns another function. You need to make another function call to access that innermost function reference for the .map() callback. JavaScript allows you to immediately invoke returned functions:
  myFunc(1)("hi");
- Now that your .map() function is receiving the innermost function reference from addCharacters, it will properly iterate over the elements and pass each element as n to that function.
- You'll notice that you are not using your match parameter. In JavaScript, it is common convention to prefix an unused parameter with an underscore \_. You could also leave the parameter empty like so: (, char1) but it is often clearer to name the parameter for future readability.
-
