const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count)); // Adds new rows to the beginning of the array.
  } else {
    rows.push(padRow(i, count)); // Adds new rows to the end of the array.
  }
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

let result = "";

// This loop iterates through the rows array and assigns each value to a row variable.
for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

/**
 * JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, along with HTML and CSS. All modern browsers support JavaScript.
 * In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Pyramid Generator. You'll learn how to work with arrays, strings, functions, loops, if/else statements, and more.
 * Assigning a value to a variable at the moment of its declaration is known as initialization.
 * JavaScript has seven primitive data types, with String being one of them. In JavaScript, a string represents a sequence of characters and can be enclosed in either single (') or double (") quotes.
 * Note that strings are immutable, which means once they are created, they cannot be changed.
 * The console allows you to print and view JavaScript output. You can send information to the console using console.log().
 * When variable names are more than one word, there are specific naming conventions for how you capitalize the words. In JavaScript, the convention to use is camel case. Camel case means that the first word in the name is entirely lowercase, but the following words are all title-cased.
 * When you declare a variable without initializing it, it is considered uninitialized. Currently, your secondCharacter variable is uninitialized.
 * The default value of an uninitialized variable is undefined. This is a special data type that represents a value that does not have a definition yet.You can still assign a value to an uninitialized variable.
 * With the number data type, you can perform mathematical operations, like addition. You can also perform subtraction (-), multiplication (*), and division (/).
 * In programming, you will often need to work with lots of data. There are many data structures that can help you organize and manage your data. One of the most basic data structures is an array.
 * An array is a non-primitive data type that can hold a series of values. Non-primitive data types differ from primitive data types in that they can hold more complex data. Primitive data types like strings and numbers can only hold one value at a time. Arrays are denoted using square brackets ([]).
 * When an array holds values, or elements, those values are separated by commas.Also note that the order of values in an array is important.
 * You can access the values inside an array using the index of the value. An index is a number representing the position of the value in the array, starting from 0 for the first value.
 * You can access the value using bracket notation, such as array[0].
 * Arrays are special in that they are considered mutable. This means you can change the value at an index directly.
 * array.length returns the number of elements in the array. By subtracting 1, you get the index of the last element in the array.
 * A method in JavaScript is a function that's associated with certain values or objects. An example you've already encountered is the .log() method, which is part of the console object.
 * Arrays have their own methods, and the first you will explore is the .push() method. This allows you to "push" a value to the end of an array.
 * Another method essential for this project is the .pop() method. It removes the last element from an array and returns that element.
 * When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.
 * .push() returns the new length of the array, after adding the value you give it. While the .pop() returns the removed value.
 * The let keyword allows a variable to be reassigned. This means you could change character later to be a completely different value.
 * For this project, you will not want to change these variable values. So instead, you should use const to declare them. const variables are special.
 * First, a const variable cannot be reassigned like a let variable. As it would throw an error. A const variable cannot be uninitialized.
 * When you have to perform a task repeatedly until a condition is met, you will use a loop. There are many ways to write a loop.
 * You are going to start with a basic for loop.
 * for (iterator; condition; iteration) {
 * logic;
 * }
 * The iterator is a variable you can declare specifically in your for loop to control how the loop iterates or goes through your logic.
 * It is a common convention to use i as your iterator variable in a loop. A for loop allows you to declare this in the parentheses (). for (let index = 100; "second"; "third") {}
 * The condition of a for loop tells the loop how many times it should iterate. When the condition becomes false, the loop will stop.
 * Your iteration statement will tell your loop what to do with the iterator after each run.
 * To manipulate the result string, you will use a different type of loop. Specifically, a for...of loop, which iterates over each item in an iterable object and temporarily assigns it to a variable.
 * The syntax for a for...of loop looks like:
 * for (const value of iterable) {}
 * note that you can use const because the variable only exists for a single iteration not during the entire loop.
 * the .repeat() method available to strings. This method accepts a number as an argument, specifying the number of times to repeat the target string.
 * A function is a block of code that can be reused throughout your application.
 * It has the following syntax: function name (parameter) {}
 * The function keyword tells JavaScript that the name variable is going to be a function. parameter is a variable that represents a value that is passed into the function when it is used. A function may have as many, or as few, parameters as you'd like. Like a for loop, the space between the curly braces is the function body.
 * In order to use a function, you need to call it. A function call tells your application to run the code from the function wherever you choose to call it. The syntax for a function call is the function name followed by parentheses.
 * All functions in JavaScript return a value, meaning they provide the defined result of calling them for you to use elsewhere.
 * By default, functions return undefined as their value. In order to return something else, you need to use the return keyword.
 * When you have a value that is explicitly written in your code, like the "Hello!" string in your function, it is considered to be hard-coded. Hard-coding a value inside a function may not make it as reusable as you'd like.
 * Instead you can define parameters for the function. Parameters are special variables that are given a value when you call the function, and can be used in your function to dynamically change the result of the function's code. To add a parameter to your function, you need to add a variable name inside the parentheses.
 * A function does not have to return a hard-coded value. It can return the value stored in a variable. Parameters are special variables for a function, so they can also be returned. parameters need to be given a value when you call the function.
 * When you pass a value to a function call, that value is referred to as an argument.
 * Variables in JavaScript are available in a specific scope. In other words, where a variable is declared determines where in your code it can be used.
 * The first scope is the global scope. Variables that are declared outside of any "block" like a function or for loop are in the global scope.
 * When a variable is in the global scope, a function can access it in its definition.
 * Variables can also be declared inside a function. These variables are considered to be in the local scope, or block scope. A variable declared inside a function can only be used inside that function. If you try to access it outside of the function, you will either get undefined or an error.
 * An important thing to know about the return keyword is that it does not just define a value to be returned from your function, it also stops the execution of your function code. This means that any code after a return statement will not run.
 * Returning a value from a function brings that value into the scope where the function was called.
 * You can pass full expressions as an argument. The function will receive the result of evaluating that expression.
 * An if statement allows you to run a block of code only when a condition is met.
 * A truthy value is a value that is considered true when evaluated as a boolean. Most of the values you encounter in JavaScript will be truthy.
 * A falsy value is the opposite - a value considered false when evaluated as a boolean. JavaScript has a defined list of falsy values. Some of them include false, 0, "", null, undefined, and NaN.
 * A while loop will run over and over again until the condition specified is no longer true.
 * Right now, if you change continueLoop to true, your while loop will run forever. This is called an infinite loop, and you should be careful to avoid these. An infinite loop can lock up your system, requiring a full restart to escape.
 * To avoid this, start by using the increment operator to increase the value of the done variable inside your loop.
 * The equality operator == is used to check if two values are equal. To compare two values, you'd use a statement like value == 8.
 * The equality operator can lead to some strange behavior in JavaScript. For example, "0" == 0 is true, even though one is a string and one is a number.
 * The strict equality operator === is used to check if two values are equal and share the same type. As a general rule, this is the equality operator you should always use. With the strict equality operator, "0" === 0 becomes false, because while they might have the same value of zero, they are not of the same type.
 * The strict inequality operator !== allows you to check if two values are not equal, or do not have the same type. The syntax is similar to the equality operator: value !== 4.
 * The .unshift() method of an array allows you to add a value to the beginning of the array, unlike .push() which adds the value at the end of the array.
 * Arrays also have a .shift() method. This will remove the first element of the array, unlike .pop() which removes the last element.
 */
