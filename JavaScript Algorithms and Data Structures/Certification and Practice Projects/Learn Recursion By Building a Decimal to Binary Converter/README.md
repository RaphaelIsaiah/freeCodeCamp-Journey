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

Binary numbers are a base-2 number system. Unlike the base-10 or decimal number system we use every day that uses 10 digits (0-9) to form numbers, the binary number system only has two digits, 0 and 1. In computer science, these binary digits are called bits, and are the smallest unit of data computers can process. For computers, 0 represents false or "off", and 1 represents true or "on".
In your decimalToBinary function, use the return keyword to return a string of the binary number representation of true.
Note: Binary numbers can be long sequences that start with 0, so they are often represented as strings.
In the base-2 number system, the rightmost digit represents the ones place, the next digit to the left represents the twos place, then the fours place, then the eights place, and so on. In this system, each digit's place value is two times greater than the digit to its right.
Here are numbers zero to nine in the base-10 and base-2 number systems:
| Base-10 | Base-2 |
| ------- | ------ |
| 0 | 0 |
| 1 | 1 |
| 2 | 10 |
| 3 | 11 |
| 4 | 100 |
| 5 | 101 |
| 6 | 110 |
| 7 | 111 |
| 8 | 1000 |
| 9 | 1001 |
Notice that binary numbers are formed from left to right, from the digit with the greatest place value on the left, to the least significant on the right. For example, the number 3 in binary is 11, or 1 in the twos place and 1 in the ones place. Then for the number 4, a digit to represent the fours place is included on the left and set to 1, the twos place is 0, and the ones place is 0.

Bits are often grouped into an octet, which is an 8-bit set known as a byte. A byte can represent any number between 0 and 255. Here are the placement values for each bit in a byte:
128 | 64 | 32 | 16 | 8 | 4 | 2 | 1
Because bits are often grouped into bytes, it's common to see binary numbers represented in groups of eight, sometimes with leading zeros. For example, the number 52 can be represented as 110100, or 00110100 with leading zeros. Here's how that breaks down with the placement values:
128 | 64 | 32 | 16 | 8 | 4 | 2 | 1
0 | 0 | 1 | 1 | 0 | 1 | 0 | 0

For the decimal to binary conversion, you need to divide input by 2 until the quotient, or the result of dividing two numbers, is 0. But since you don't know how many times you need to divide input by 2, you can use a while loop to run a block of code as long as input is greater than 0 and can be divided.

As a reminder, a while loop is used to run a block of code as long as the condition evaluates to true, and the condition is checked before the code block is executed. For example:
let i = 0;
while (i < 5) {
console.log(i);
i++;
}
The tricky part about while loops is that, if you're not careful, they can run forever. This is called an infinite loop, and can cause your browser to crash.
To avoid infinite loops, you need to make sure that the condition for the while loop eventually becomes false. In this case, you want to make sure that the input variable eventually becomes 0.
Move the input = 0 statement into the body of the while loop. This will make it so that the loop will only run up to one time.

To divide numbers in JavaScript, use the division operator (/). For example:
const quotient = 5 / 2; // 2.5
In the example above, 5 is the dividend, or the number to be divided, and 2 is the divisor, or the number to divide by. The result, 2.5, is called the quotient.

Next, you need to calculate the remainder of input divided by 2. You can do this by using the remainder operator (%), which returns the remainder of the division of two numbers. For example:
const remainder = 5 % 2; // 1
In other words, the dividend, 5, can be divided by the divisor, 2, multiple times. Then you're left with a remainder of 1.

Now if you enter in the number 6 and click the Convert button, you'll see the following output:
Inputs: [ 6, 3, 1 ]
Quotients: [ 3, 1, 0 ]
Remainders: [ 0, 1, 1 ]
Notice that the remainders array is the binary representation of the number 6, but in reverse order.
Use the .reverse() method to reverse the order of the remainders array, and .join() with an empty string as a separator to join the elements into a binary number string. Then, set result.innerText equal to the binary number string.

Now your decimalToBinary function is complete. Feel free to play around with it. But there are some ways to improve it. For example, it's not necessary to keep track of the inputs and quotients. We can clean things up so the function is more efficient.

In the previous version of this function, you pushed the remainder of input divided by 2 to binaryArray. Then later you reversed and joined the entries into a binary number string.
But it would be easier to use string concatenation within the loop to build the binary string from right to left, so you won't need to reverse it later.
First, use the remainder operator (%) to set binary equal to the remainder of input divided by 2.
Then, use the addition operator to add the current value of binary to the end of the equation input % 2. This is what will build the binary string from right to left.

Now you have a more efficient way to convert decimal numbers into binary. After learning a bit about the call stack and recursion, you'll refactor the decimalToBinary function to use recursion instead of a while loop.

In computer science, a stack is a data structure where items are stored in a LIFO (last-in-first-out) manner. If you imagine a stack of books, the last book you add to the stack is the first book you can take off the stack. Or an array where you can only .push() and .pop() elements.
The call stack is a collection of function calls stored in a stack structure. When you call a function, it is added to the top of the stack, and when it returns, it is removed from the top / end of the stack.
You'll see this in action by creating mock call stack.
Initialize a variable named callStack and assign it an empty array.
When your code runs, the a() function is added to the call stack first.
Then, since a() calls b(), the function b() is added to the call stack.
And since b() calls c(), the function c() is added to the call stack.

Your call stack is complete. As you can see, a() is at the bottom or beginning of the stack, which calls b() in the middle, which calls c() at the top or end. Once they're all in place, they begin to execute from top to bottom.
c() executes, returns the string "awesome!", and is popped off or removed from the top of the stack.
Then the function b() executes and evaluates to "is " + "awesome!".
Update your mock call to b() so it looks like this: b(): returns "is " + "awesome!".
Now that b() has executed, pop it off the call stack. Then, update your mock call to a() to the following: a(): returns "freeCodeCamp " + "is awesome!"
Finally, a() returns the concatenated string "freeCodeCamp is awesome!".
Pop a() off the top of the call stack.

While that's a simple example, it demonstrates how the call stack steps through your code and calls multiple functions.
Now it's time to jump into recursion, and see how the call stack fits into the picture.
Now you'll create a function that will count down from a given number to zero using recursion.
The first thing you need to do is log the current value of number to the console to act as the countdown.

A recursive function is a function that calls itself over and over. But you have to be careful because you can easily create an infinite loop. That's where the base case comes in. The base case is when the function stops calling itself, and it is a good idea to write it first.

Since your countdown() function will count down from a given number to zero, the base case is when the number parameter is equal to 0. Then it should return to break out of its recursive loop.
Use an if statement to check if number is equal to 0. If it is, use the return keyword to break out of the function.
Recursive functions also have a recursive case, which is where the function calls itself.
First, convert your if statement into an if...else statement.

When writing the recursive case, you need to remember two things:
-What is the base case?
-What is the least amount of work you need to do to get closer to the base case?
Since the base case is when number is equal to 0, you need to call countdown() again while also lowering the value of number by 1. Inside the else block, call countdown() and pass it number - 1 as an argument.
Now you should see a countdown from 3 to 0, followed by Reached base case, and a count from 1 to 3. This is because, after the recursive loop is finished, the function will continue to execute the code after the recursive call. This is why you see Reached base case before the count from 1 to 3.

As a reminder, it's often best to start with the base case when writing a recursive function so you know what you're working towards, and to prevent an infinite loop.
However, remember that the binary number string is built by calculating the remainder of input divided by 2 and concatenating that to the end.

Now everything should work as expected. And since you know that input will either be the numbers 0 or 1 at this point, you can combine your two base cases and just return input as a string.

For a reliable way to convert a value into a string, even falsy values like null and undefined, you can use the String() function. For example:
const num = 5;
console.log(String(num)); // "5"
console.log(String(null)); // "null"

If you're still confused about how it works under the hood, don't worry. Next, you'll create a simple animation to help you understand what's happening each step of the way.
Create a new function called showAnimation. Leave the body of the function empty for now.

You'll show the animation when users try to convert the decimal number 5 to binary, so you'll need to add a check for that within your checkUserInput() function.

Now your showAnimation() function is set up. But if you look closely at your checkUserInput() function, you'll notice that it's not very DRY – you're calling parseInt() to convert numberInput.value into a number several times.
A simple way to fix this is to create a new variable to store the converted number. Then you only have to convert the number once and can use it throughout the function.
Create a new variable called inputInt and assign it the number converted from numberInput.value. Replace all instances of parseInt(numberInput.value) with inputInt.

Before you start writing code for the animation, let's take a look at the function you'll use to add and remove elements from the DOM: setTimeout.
The setTimeout function takes two arguments: a callback function and a number representing the time in milliseconds to wait before executing the callback function.
For example, if you wanted to log Hello, world! to the console after 3 seconds, you would write:
setTimeout(() => {
  console.log("Hello, world!");
}, 3000);

If you test your code, you'll notice that your console logs are not in the expected order. Instead of logging free, pausing for a second before logging Code, and finally logging Camp, you'll see this:
free
Camp
Code
This is because the setTimeout() function is asynchronous, meaning that it doesn't stop the execution of the rest of your code. All the code in the showAnimation() function runs line by line, but because setTimeout() is asynchronous, free and Camp are logged to the console immediately, and then Code is logged to the console after a one second delay.
One way to fix this is to use multiple setTimeout() functions. Use setTimeout() to log free to the console after half a second, or 500 milliseconds.

While asynchronous, or async, code can be difficult to understand at first, it has many advantages. One of the most important is that it allows you to write non-blocking code.
For example, imagine you're baking a cake, and you put the cake in the oven and set a timer. You don't have to sit in front of the oven waiting the entire time – you can wash dishes, read a book, or do anything else while you wait for the timer to go off.
Async code works in a similar way. You can start an async operation and other parts of your code will still work while that operation is running.
You'll learn more about async code in future projects, but the setTimeout() function is a good introduction.
Add a 1500 millisecond delay before the text Camp is logged to the console.

Now you're ready to start on the animation itself. You'll use an array of objects to store data for each frame of the animation.
Next, you'll create an object to represent the first frame of your animation. Your object should have three properties or keys: inputVal, marginTop, and addElDelay.
inputVal will represent the value of the input each time your recursive function runs. marginTop will be the top margin for DOM elements you'll add to the page. And addElDelay will be the delay between adding DOM elements to the page.

Recall that the call stack is a LIFO (last in, first out) data structure. This means that, as functions are called, they are added to the top or end of the stack, and as functions return, they are removed from the top of the stack.
Treat your animationData array as a stack and add a new object to it. Your new object should have the properties inputVal, marginTop, and addElDelay set to 2, -200, and 1500, respectively. Remember to add this object to the top of the stack, or in other words, to the end of the animationData array.