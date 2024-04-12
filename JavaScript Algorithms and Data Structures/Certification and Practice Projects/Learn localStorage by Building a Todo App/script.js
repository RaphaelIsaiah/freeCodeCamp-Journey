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

// Task-form Modal Toggle functionality.
openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

// Confirm-close-dialog showModal functionality.
closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});

// Close dialog modal functionality.
cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});

// Discard functionality
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});

// Task Form functionality.
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Determining if the task being added exists or not
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);

  // Store that holds newly created tasks.
  const taskObj = {
    // this will give a hyphenated string result
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  // Helps test if the code works properly, in this case if the store (taskObj) is working as intended.
  // console.log(taskObj);
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
 */
