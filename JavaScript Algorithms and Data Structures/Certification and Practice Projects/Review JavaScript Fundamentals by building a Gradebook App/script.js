// function getAverage(scores) {
//   let sum = 0; // Initialize the sum of scores

//   for (let i = 0; i < scores.length; i++) {
//     sum += scores[i]; // Add each score to sum
//   }

//   const average = sum / scores.length; // Calculate Average

//   return average; // Return the average score
// }

// A simpler function to get the average using a for of loop.
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

// Function to check the grade of a student's score.
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Function to easily check if a score has a passing grade or not.
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// Function to send message to the student regarding their results.
function studentMsg(totalScores, studentScore) {
  getAverage(totalScores);
  getGrade(studentScore);

  if (getGrade(studentScore) !== "F") {
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(
      studentScore
    )}. You passed the course.
    `;
  } else {
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(
      studentScore
    )}. You failed the course.
    `;
  }
}

// Tests for the different functions.

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 88));

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
