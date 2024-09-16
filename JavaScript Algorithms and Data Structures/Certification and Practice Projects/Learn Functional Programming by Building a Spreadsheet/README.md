# DESCRIPTION

- Functional Programming is a popular approach to software development. In Functional Programming, developers organize code into smaller functions, then combine those functions to build complex programs.
- In this spreadsheet application project, you'll learn about parsing and evaluating mathematical expressions, implementing spreadsheet functions, handling cell references, and creating interactive web interfaces. You'll learn how to dynamically update the page based on user input.
- This project will cover concepts like the map(), find(), and includes() methods and the parseInt() function.

# Notes

- Functional programming emphasizes writing software using pure functions, avoiding shared state, side effects, and mutable data. Here are some key concepts you might have encountered:

1. **Pure Functions**: Functions that always produce the same output for the same input and have no side effects. For example:
   const add = (a, b) => a + b;

2. **Immutability**: Data should not be changed once created. Instead, new data structures are created. For example:
   const numbers = [1, 2, 3];
   const newNumbers = [...numbers, 4]; // [1, 2, 3, 4]

3. **Higher-Order Functions**: Functions that take other functions as arguments or return them. For example:
   const map = (arr, fn) => arr.map(fn);
   const double = x => x \* 2;
   const doubledNumbers = map([1, 2, 3], double); // [2, 4, 6]

4. **Function Composition**: Combining multiple functions to create a new function. For example:
   const compose = (f, g) => x => f(g(x));
   const add1 = x => x + 1;
   const double = x => x \* 2;
   const add1ThenDouble = compose(double, add1);
   add1ThenDouble(2); // 6

5. **Recursion**: A function calling itself to solve a problem. For example:
   const factorial = n => (n === 0 ? 1 : n \* factorial(n - 1));

6. **Declarative Code**: Writing code that describes what you want to do, rather than how to do it. For example, using array methods like `map`, `filter`, and `reduce`:
   const numbers = [1, 2, 3, 4, 5];
   const evenNumbers = numbers.filter(n => n % 2 === 0); // [2, 4]

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
- the .charCodeAt(0) converts the start and end values in the range() to numbers, as the range function expects numbers and the start and end values are strings. .map((code) => String.fromCharCode(code)) converts the numbers range() returns back to characters.
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
- In mathematics, an infix is a mathematical operator that appears between its two operands. For example, 1 + 2 is an infix expression. To parse these expressions, you will need to map the symbols to relevant functions. Declare an infixToFunction variable, and assign it an empty object.
- Object values do not have to be primitive types, like a string or a number. They can also be functions. Give your infixToFunction object a + property. That property should be a function that takes an x and y parameter and implicitly returns the sum of those two parameters. Because + is not alphanumeric, you'll need to wrap it in quotes for your property.
- const regex = /(\d+(\.\d+)?)\s*([*/])\s*(\d+(\.\d+)?)/;
  (\d+(\.\d+)?):
  \d+: Matches one or more digits.
  (\.\d+)?: Optionally matches a decimal point followed by one or more digits. The ? makes this group optional.
  \s*: Matches zero or more whitespace characters (spaces, tabs, etc.).
  ([*/]):Matches either a _ or / operator. The square brackets [] denote a character class, and the parentheses () capture the matched operator.
  \s_: Again, matches zero or more whitespace characters.
  (\d+(\.\d+)?):
  Same as the first part, matches one or more digits, optionally followed by a decimal point and more digits.
  In summary, this regex matches a pattern where a number (integer or decimal) is followed by a \* or / operator, and then another number. Each number and the operator are captured in separate groups.
- const regex = /([\d.]+)([*\/])([\d.]+)/
  ([\d.]+):
  [ and ]: Denotes a character class.
  \d: Matches any digit (0-9).
  .: Matches a literal dot (decimal point).
  +: Matches one or more of the preceding element (digits or dots).
  (): Captures the matched sequence for later use.
  ([*\/]):
  [ and ]: Denotes a character class.
  \*: Matches a literal asterisk (multiplication operator).
  \/: Matches a literal forward slash (division operator).
  (): Captures the matched operator for later use.
  ([\d.]+):
  This part is identical to the first part, capturing another sequence of digits and dots.
  In summary, this regex matches a sequence of digits and dots, followed by either a multiplication or division operator, and then another sequence of digits and dots. Each part is captured for further processing.
- Your infixEval function will only evaluate the first multiplication or division operation, because regex isn't global. This means you'll want to use a recursive approach to evaluate the entire string. If infixEval does not find any matches, it will return the str value as-is. Using a ternary expression, check if str2 is equal to str. If it is, return str, otherwise return the result of calling highPrecedence() on str2.
- The first argument for your evalFormula call needs to be the contents of the cell (which you stored in value). However, the contents start with an = character to trigger the function, so you need to pass the substring of value starting at index 1.
- Arrays have an .every() method. Like the .some() method, .every() accepts a callback function which should take an element of the array as the argument. The .every() method will return true if the callback function returns true for all elements in the array.
  Here is an example of a .every() method call to check if all elements in the array are uppercase letters.
  Example Code
  const arr = ["A", "b", "C"];
  arr.every(letter => letter === letter.toUpperCase());
  Add an everyeven property to your spreadsheetFunctions - use the .every() method to check whether all array elements
  are even.
