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

/**
 * Local storage is a web browser feature that lets web applications store key-value pairs persistently within a user's browser. This allows web apps to save data during one session, then retrieve it in a later page session.
 * In this TODO application, you'll learn how to handle form inputs, manage local storage, perform CRUD (Create, Read, Update, Delete) operations on tasks, implement event listeners, and toggle UI elements.
 * LocalStorage is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.
 * Create a taskData constant and set it to an empty array. This array will store all the tasks along with their associated data, including title, due date, and description. This storage will enable you to keep track of tasks, display them on the page, and save them to localStorage.
 * In earlier projects, you learned how to add and remove classes from an element with el.classList.add() and el.classList.remove(). Another method to use with the classList property is the toggle method. The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.
 * element.classList.toggle("class-to-toggle");
 * The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.
 * dialogElement.showModal();
 */
