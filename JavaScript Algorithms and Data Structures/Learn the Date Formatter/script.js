/**
 * In this project you will learn about the JS Date object by building a date formatter.
 * In JavaScript, there are many built-in constructors that create objects.
 * A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.
 * For example, you can use the Date() constructor with the new operator to create a new Date object that returns a string with the current date and time:
 * const currentDate = new Date();
 * console.log(currentDate);
 * // Output:
 * // Mon Aug 23 2021 15:31:00 GMT-0400 (Eastern Daylight Time)
 * The Date object has a number of methods that allow you to get the date and time in different formats.
 * One of those is the .getDate() method, which returns a number between 1 and 31 that represents the day of the month for that date. For example:
 * const date = new Date();
 * const dayOfTheMonth = date.getDate();
 * console.log(dayOfTheMonth); // 20
 * The .getMonth() method returns a number between 0 and 11. This represents the month for the date provided, where 0 is January and 11 is December. Because the number this method returns is zero-based, you need to add 1 to it to get the expected month number.
 * The .getFullYear() method returns a number which represents the year for the provided date.
 * The .getHours() method returns a number between 0 and 23. This represents the hour for the provided date, where 0 is midnight and 23 is 11 p.m.
 * The .getMinutes() method returns a number between 0 and 59 which represents the minutes for the provided date.
 * In JavaScript, the change event is used to detect when the value of an HTML element has changed:
 * element.addEventListener("change", () => {});
 * When a user makes a selection from the dropdown menu, the function should get the user's value and display the date in their chosen date format. To do this, you can use the switch statement.
 * A switch statement is used to compare an expression against multiple possible values and execute different code blocks based on the match. It's commonly used for branching logic.
 * For example, here's how to compare the expression dayOfWeek against possible values:
 * switch (dayOfWeek) {
 *   case 1:
 *     console.log("It's Monday!");
 *     break;
 *   case 2:
 *     console.log("It's Tuesday!");
 *     break;
 *   // ...cases for other workdays
 *   default:
 *     console.log("It's the weekend!");
 * Split formattedDate into an array of substrings with the .split() method and use a "-" as the separator.
 * The .reverse() method is used to reverse an array in place. For example:
 * const array = [1, 2, 3, 4, 5];
 * array.reverse();
 * console.log(array); // [5, 4, 3, 2, 1]
 * If your switch statement is going to have multiple cases, it is best practice to include a break statement.
 * The break statement will tell the JavaScript interpreter to stop executing statements. Without adding a break statement at the end of each case block, the program will execute the code for all matching cases:
 * switch (someVariable) {
 *   case 'case123':
 *     // Write your logic here
 *     break; // Terminates the switch statement
 * }
 * In a switch statement, the default case is executed when none of the previous case conditions match the value being evaluated. It serves as a catch-all for any other possible cases. For example:
 * const dayOfWeek = 7;
 *  switch (dayOfWeek) {
 *   case 1:
 *     console.log("It's Monday!");
 *     break;
 *   case 2:
 *     console.log("It's Tuesday!");
 *     break;
 *   // ...cases for other workdays
 *   default:
 *     console.log("It's the weekend!");
}
 */

const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

// Functionality that handles the date changes.
// This functionality is initialized and implemented using the event listener and switch statements.
dateOptionsSelectElement.addEventListener("change", () => {
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;

    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;

    default:
      currentDateParagraph.textContent = formattedDate;
      break;
    //   The default case here takes care of the first date format option dd-mm-yyyy
  }
});
