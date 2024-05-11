Recursion is a programming concept where a function calls itself. This can reduce a complex problem into simpler sub-problems, until they become straightforward to solve.

In this project, you’ll build a decimal-to-binary converter using JavaScript. You’ll learn the fundamental concepts of recursion, explore the call stack, and build out a visual representation of the recursion process through an animation.

In this project, you'll build a decimal and binary converter and learn about both number systems. You'll also learn about recursion by using it to perform the conversions.

Notice how the project is styled with a mobile first design in the styles.css file.

Reminder, you can access the value attribute of an element by using dot or bracket notation.
Remember that function references are not called with parentheses.
The keydown event fires every time a user presses a key on their keyboard, and is a good way to add more interactivity to input elements.

Whenever an event listener is triggered by an event, an event object is created automatically. You don't always need to use this object, like with your click handler above, but it can be useful to access information about the event that was triggered.
First, pass e as a parameter to your callback function. Remember that e is a common parameter name for the event object. Next, log e to the console in the body your callback function.
If you open your browser's console and type in the number input, you'll see event objects logged to the browser. And if you take a closer look at one of those event objects, you'll see helpful properties like type and target.
Since you want to perform an action when the Enter key is pressed, the most helpful property is key, which tells you the string value of the key that was pressed.
Note: Since the Enter and Return keys have similar functions, they both have the same string value of Enter.

While the input type="number" element makes validation easier by only allowing numbers and some special characters, remember that all values you get from HTML elements are actually strings. Also, if the number input is empty, the value property will be an empty string.

In an earlier project you learned about truthy and falsy values, which are values that evaluate to true or false. In JavaScript, some common falsy values you'll see are null, undefined, the number 0, and empty strings.
Rather than check if a value is equal to a falsy value, you can use the logical NOT operator (!) to check if the value itself is falsy. For example:
const num = 0;
console.log(num === 0); // true
console.log(!num); // true

Because the input type="number" element allows special characters like ., +, and e, users can input floats like 2.2, equations like 2e+3, or even just e, which you don't want to allow.

A good way to check and normalize numbers in JavaScript is to use the built-in parseInt() function, which converts a string into an integer or whole number. parseInt() takes at least one argument, a string to be converted into an integer, and returns either an integer or NaN which stands for Not a Number. For example:

parseInt(2.2); // 2
parseInt("2e+3"); // 2
parseInt("e") // NaN

the isNaN() function. This function takes in a string or number as an argument, and returns true if it evaluates to NaN. For example:
isNaN("test"); // true
isNaN(2); // false
isNaN("3.5"); // false

Now you can alert the user if they don't enter a number, or the number is invalid before you attempt to convert it into binary.
In the body of the if statement, use the alert() method to display the text Please provide a decimal number.
Note that alert() is a method on the window object in the browser, so you can use either window.alert() or alert().
