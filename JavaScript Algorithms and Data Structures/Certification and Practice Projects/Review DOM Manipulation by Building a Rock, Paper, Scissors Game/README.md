In this mini project, you will review conditionals, functions, getElementById, and more. This project will give you an opportunity to solve small problems and get a better understanding of the basics.

Notice that the game is designed using a mobile first design.

script.js:
The first step is to build out the function that will generate a random choice for the computer.
The getRandomComputerResult function will be used to get the computer's choice. Inside that function, you should see an options array with "Rock", "Paper", and "Scissors".

Your task is to complete the getRandomComputerResult function so that it returns a random option from the options array.

JavaScript arrays are zero-indexed, so the valid indices for a 3-element array are 0, 1, and 2.
This expression [Math.floor(Math.random() * 3) + 1], will generate a random number between 1 and 3 (inclusive). Which will result in an out-of-bounds index.
The expression [Math.floor(Math.random() * 3)] will correctly select a random element from the options array.