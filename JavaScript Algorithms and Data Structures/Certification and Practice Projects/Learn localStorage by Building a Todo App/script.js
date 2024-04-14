// HTML/DOM element selection
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// Array Store to store and keep track of user task data
const taskData = [];
// This variable is used to track the state when editing and discarding tasks.
let currentTask = {};

// Functionality for adding input values to taskData store.
const addOrUpdateTask = () => {
  // Determining if the task being added exists or not
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

  // Store that holds newly created tasks (data from the input fields.)
  const taskObj = {
    // This will give a hyphenated string id.
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  // Helps test if the code works properly, in this case if the store (taskObj) is working as intended.
  // console.log(taskObj);
  // console.log(taskData); // Test for the taskData store.

  // The condition here is when findIndex() returns a value of -1 because that element does not exist in the array.
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }
  // Adds/updates tasks to the DOM
  updateTaskContainer();
  // Closes the form modal to view the newly added task.
  reset();
};

// Functionality for adding tasks to the DOM
const updateTaskContainer = () => {
  // Resolves the error of task list duplication upon addition of new tasks.
  tasksContainer.innerHTML = "";
  // Displaying the tasks through loops.
  // Implementation of edit and delete functionalities.
  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `
  <div class="task" id="${id}">
  <p><strong>Title:</strong> ${title}</p>
  <p><strong>Date:</strong> ${date}</p>
  <p><strong>Description:</strong> ${description}</p>
  <button onclick="editTask(this)" type="button" class="btn">Edit</button>
  <button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
  </div>
  `;
  });
};

// Initialization of the delete functionality.
const deleteTask = (buttonEl) => {
  // finds the index of the task to be deleted.
  const dataArrIndex = taskData.findIndex(
    // checks if the id of item equals the id of the parentElement of buttonEl.
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  taskData += taskData.splice(dataArrIndex, 1);
};

// Function that resets/clears the input fields and the currentTask object.
const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
};

// Task-form Modal Toggle functionality.
openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

// confirmCloseDialog showModal functionality.
closeTaskFormBtn.addEventListener("click", () => {
  // Checks if there is a value in any input fields.
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;

  // Checks if formInputsContainValues is true
  if (formInputsContainValues) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

// Close dialog modal functionality.
cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});

// Discard functionality
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

// Task Form functionality.
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addOrUpdateTask();
});

/**
 * Local storage is a web browser feature that lets web applications store key-value pairs persistently within a user's browser. This allows web apps to save data during one session, then retrieve it in a later page session.
 * In this TODO application, you'll learn how to handle form inputs, manage local storage, perform CRUD (Create, Read, Update, Delete) operations on tasks, implement event listeners, and toggle UI elements.
 * LocalStorage is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.
 * Create a taskData constant and set it to an empty array. This array will store all the tasks along with their associated data, including title, due date, and description. This storage will enable you to keep track of tasks, display them on the page, and save them to localStorage.
 * In earlier projects, you learned how to add and remove classes from an element with el.classList.add() and el.classList.remove(). Another method to use with the classList property is the toggle method. The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.
 * element.classList.toggle("class-to-toggle");
 * The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.
 * dialogElement.showModal();
 * The HTML dialog element has a close() method that can be used to close a modal dialog box on a web page.
 * dialogElement.close();
 * The preventDefault() method to stop the browser from refreshing the page after submitting the form.
 * The findIndex() array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing function. If no such element is found, the method returns -1. Here is an example:
 * const numbers = [3, 1, 5, 6];
 * const firstNumLargerThanThree = numbers.findIndex((num) => num > 3);
 * console.log(firstNumLargerThanThree); // prints index 2
 * Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
 * console.log(Date.now()); // 1628586800000
 * Now that you have obtained the values from the input fields and generated an id, you want to add them to your taskData array to keep track of each task. However, you should only do this if the task is new. If the task already exists, you will set it up for editing. This is why you have the dataArrIndex variable, which provides the index of each task.
 * unshift() is an array method that is used to add one or more elements to the beginning of an array.
 * const arr = [1, 2, 3];
 * arr.unshift(0);
 * // [0, 1, 2, 3]
 * console.log(arr);
 * To allow for task management we include a delete and an edit button for each task.
 * Instead of clearing the input fields one by one, it's a good practice to create a function that handles clearing those fields. You can then call this function whenever you need to clear the input fields again.
 * You can enhance code readability and maintainability by refactoring the submit event listener into two separate functions. The first function can be used to add the input values to taskData, while the second function can be responsible for adding the tasks to the DOM.
 * There's a problem. If you add a task, and then add another, the previous task gets duplicated. This means you need to clear out the existing contents of tasksContainer before adding a new task.
 * this is a keyword that refers to the current context. In this case, this points to the element that triggers the event – the buttons.
 * splice() is an array method that modifies arrays by removing, replacing, or adding elements at a specified index, while also returning the removed elements. It can take up to three arguments: the first one is the mandatory index at which to start, the second is the number of items to remove, and the third is an optional replacement element. Here's an example:
 * const fruits = ["mango", "date", "cherry", "banana", "apple"];
 * // Remove date and cherry from the array starting at index 1
 * const removedFruits = fruits.splice(1, 2);
 * console.log(fruits); // [ 'mango', 'banana', 'apple' ]
 * console.log(removedFruits); // [ 'date', 'cherry' ]
 */
