// DOM ELEMENT SELECTION
const sortButton = document.getElementById("sort");

// ---- Project Logic ----

// Functionality for sorting the inputs
const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value)); // Changes the value strings to numbers

  const sortedValues = bubbleSort(inputValues);

  updateUI(sortedValues); // Updates the output section of the UI

  //   console.log(inputValues); // confirms the datatype of the input values.
};

// UI update functionality.
const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

// ----- Sorting Algorithms -----

// Bubble Sort Sorting Algorithm
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      //   console.log(array, array[j], array[j + 1]); // Shows the steps the algorithm takes to sort the numbers.

      if (array[j] > array[j + 1]) {
        // Swap elements... This bubbles the larger element towards the end of the array.
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array; // Returns the sorted array.
};

// Event Listeners
sortButton.addEventListener("click", sortInputArray);
