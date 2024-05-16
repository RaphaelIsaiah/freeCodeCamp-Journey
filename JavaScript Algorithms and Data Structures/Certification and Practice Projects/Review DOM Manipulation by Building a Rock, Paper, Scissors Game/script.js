// This function generates a random choice for the computer.
const getRandomComputerResult = () => {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
};
console.log(getRandomComputerResult()); //Testing the function.
