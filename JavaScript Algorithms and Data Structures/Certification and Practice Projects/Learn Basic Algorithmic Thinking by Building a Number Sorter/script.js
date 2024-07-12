// DOM ELEMENT SELECTION
const sortButton = document.getElementById("sort");

// ---- Project Logic ----
// Sorting inputs functionality
const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value)); // Change the value strings to numbers

  updateUI(inputValues); // Updates the output part of the UI

  //   console.log(inputValues); // confirms the datatype of the input values.
};

// UI update functionality.
const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

// Event Listeners
sortButton.addEventListener("click", sortInputArray);
