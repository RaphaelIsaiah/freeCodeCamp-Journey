// DOM ELEMENT SELECTION
const sortButton = document.getElementById("sort");

// ---- Project Logic ----

// Functionality for sorting the inputs
const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value)); // Changes the value strings to numbers

  const sortedValues = insertionSort(inputValues);

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
  // The for loop enables the function to iterate through the array.
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

// Selection Sort Sorting Algorithm
const selectionSort = (array) => {
  // The for loop enables the function to iterate through the array.
  for (let i = 0; i < array.length; i++) {
    let minIndex = i; // Ensures that if the current value is the smallest it will be swapped with itself and will not be moved.

    for (let j = i + 1; j < array.length; j++) {
      // console.log(array, array[j], array[minIndex]); // shows the different values at each iteration
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // Swaps elements
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array; // Returns the sorted array.
};

// Insertion Sort Sorting Algorithm
const insertionSort = (array) => {
  // Since the first element of the insertion sort algorithm is already sorted, the for loop starts at the second element in the array.
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j]; // after finding an element larger than the current value it moves the larger value to the right to make room for the current value

      j--; // prevents an infinite loop by decreasing j after each loop
    }

    array[j + 1] = currValue; // inserts the currValue into the correct index.
  }

  return array;
};

// Event Listeners
sortButton.addEventListener("click", sortInputArray);
