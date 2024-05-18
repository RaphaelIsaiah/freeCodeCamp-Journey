In this mini project, you will review conditionals, functions, getElementById, and more. This project will give you an opportunity to solve small problems and get a better understanding of the basics.

Notice that the game is designed using a mobile first design.

script.js:
The first step is to build out the function that will generate a random choice for the computer.
The getRandomComputerResult function will be used to get the computer's choice. Inside that function, you should see an options array with "Rock", "Paper", and "Scissors".

Your task is to complete the getRandomComputerResult function so that it returns a random option from the options array.

JavaScript arrays are zero-indexed, so the valid indices for a 3-element array are 0, 1, and 2.
This expression [Math.floor(Math.random() * 3) + 1], will generate a random number between 1 and 3 (inclusive). Which will result in an out-of-bounds index.
The expression [Math.floor(Math.random() * 3)] will correctly select a random element from the options array.

In the game, there will be multiple rounds. The first to reach three points wins the game.
In this step, you will focus on determining if the player has won the round.
Complete the hasPlayerWonTheRound function. This function has two parameters: player and computer. The function should return true if the player has won the round, and false if the player has lost or tied the round.
Here are the criteria for the player to win a round:
If the player chooses "Rock" and the computer chooses "Scissors"
If the player chooses "Scissors" and the computer chooses "Paper"
If the player chooses "Paper" and the computer chooses "Rock"

We define an object called winningConditions that maps each player choice to the choice it beats.
The function checks if the computer’s choice (computer) matches the choice that the player beats (winningConditions[player]).
If they match, the player wins the round, and the function returns true. Otherwise, it returns false.

Now it is time to get the results of the round. Complete the getRoundResults function.
If the player wins the round, update the playerScore by 1 and return the message "Player wins! [player's choice] beats [computer's choice]".
If the computer and player choose the same option, return the message "It's a tie! Both chose [player's choice]".
If the computer wins the round, update the computerScore by 1 and return the message "Computer wins! [computer's choice] beats [player's choice]".
[computer's choice] should be replaced with computerResult while [player's choice] should be replaced with the userOption.

Now it is time to update the scores and the round results message.