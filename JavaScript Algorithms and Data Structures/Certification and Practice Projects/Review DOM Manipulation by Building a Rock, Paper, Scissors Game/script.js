// This function generates a random choice for the computer.
const getRandomComputerResult = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
  // This is a neater way to write the code... multiplying Math.random() by the length of the options array, so even if the length of the array increases the code still runs correctly... and then assigning that to the variable randomIndex.
};



// Functionality to determine if the player has won the round.
// const hasPlayerWonTheRound = (player, computer) => {
//   if (
//     (player === "Rock" && computer === "Scissors") ||
//     (player === "Scissors" && computer === "Paper") ||
//     (player === "Paper" && computer === "Rock")
//   ) {
//     return "true";
//   } else {
//     return "false";
//   }
// };

// Refactored functionality to determine if the player has won the round.
// const hasPlayerWonTheRound = (player, computer) => {
//   const winningConditions = {
//     Rock: "Scissors",
//     Paper: "Rock",
//     Scissors: "Paper",
//   };
//   return computer === winningConditions[player];
// };

// Refactored functionality to determine if the player has won the round.
const hasPlayerWonTheRound = (player, computer) => {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
};

//Testing the functions.
console.log(getRandomComputerResult());
console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));
