// document.addEventListener("DOMContentLoaded"...) Ensures that the code runs when the HTML document is fully parsed and ready for manipulation.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  // Calculate Functionality
  const calculate = (event) => {
    event.preventDefault(); // Stops the page from refreshing after submission.

    // Get the user's inputted values.
    const value = document.querySelector("#numbers").value;
    // Split the strings stored in the value variable into an array of substrings.
    const array = value.split(/,\s*/g);
    // Chaining the map and filter array methods to the array variable.
    const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

    console.log(numbers);
  };

  // Event Listeners
  form.addEventListener("submit", calculate);
});
