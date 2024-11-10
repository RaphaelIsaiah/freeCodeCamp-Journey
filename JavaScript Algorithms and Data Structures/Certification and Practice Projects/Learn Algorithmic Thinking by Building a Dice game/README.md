**Algorithmic thinking involves the ability to break down complex problems into a sequence of well-defined, step-by-step instructions.**

**In this Dice game project, you’ll learn how to manage game state, implement game logic for rolling dice, keeping score, and applying rules for various combinations.**

**This project covers concepts such as event handling, array manipulation, conditional logic, and updating the user interface dynamically based on game state.**

## Notes

- If the number already exists in counts, it increments its count by 1. If it doesn't exist, it sets its count to 1.
  for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

- Next, the function checks if there is a number that appears three times (hasThreeOfAKind) and another number that appears two times (hasPair). It does this by using Object.values(counts) to get an array of the counts and then checking if this array includes 3 and 2.
  const hasThreeOfAKind = Object.values(counts).includes(3);
  const hasPair = Object.values(counts).includes(2);
