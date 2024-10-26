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
// Retrieve data from localStorage or initialize an empty array.
const taskData = JSON.parse(localStorage.getItem("data")) || [];
// This variable is used to track the state when editing and discarding tasks.
let currentTask = {};

// Functionality for adding input values to taskData store.
const addOrUpdateTask = () => {
  // Remove whitespaces or empty task title
  if (!titleInput.value.trim()) {
    alert("Please provide a title");
    return;
  }
  // Removes the bug of an incorrect button text after upon addition of a new task after editing.
  addOrUpdateTaskBtn.innerText = "Add Task";
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
    // Adds the taskObj to the taskData array.
    taskData.unshift(taskObj);
  } else {
    // This updates the existing task in taskData array with the new taskObj i.e when an edit occurs.
    taskData[dataArrIndex] = taskObj;
  }

  // Using localStorage to store newly added tasks
  localStorage.setItem("data", JSON.stringify(taskData));
  // Test for the localStorage.
  // const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
  // console.log(getTaskArrObj);

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
  taskData.splice(dataArrIndex, 1);

  // Saves the taskData again after deleting a task, thereby updating the localStorage.
  localStorage.setItem("data", JSON.stringify(taskData));
};

// Initialization of the edit functionality.
const editTask = (buttonEl) => {
  // finds the index of the task to be edited.
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  // Assigning the task to be edited to the currentTask store.
  currentTask = taskData[dataArrIndex];
  // console.log(currentTask); // test to check content of currentTask.

  // Staging the task for editing.
  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = "Update Task";

  taskForm.classList.toggle("hidden");
};

// Function that resets/clears the input fields and the currentTask object.
const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
  addOrUpdateTaskBtn.innerText = "Add Task";
};

// Checks if there is a task inside taskData, if true, it calls the updateTasksContainer to update the UI when the page loads.
// Recall that updateTaskContainer gets values from taskData which updates itself from the localStorage when there were tasks added or is an empty array when no tasks are present.
if (taskData.length) {
  updateTaskContainer();
}

// Task-form Modal Toggle functionality.
openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

// confirmCloseDialog showModal functionality.
closeTaskFormBtn.addEventListener("click", () => {
  // Checks if there is a value in any input fields.
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;
  // Checks if user made any changes while trying to edit a task.
  const formInputValuesUpdated =
    titleInput.value !== currentTask.title ||
    dateInput.value !== currentTask.date ||
    descriptionInput.value !== currentTask.description;

  // Checks if formInputsContainValues and formInputValuesUpdated are true
  // This way the confirmCloseDialog modal won't be displayed to the user if no changes were made to the input fields while attempting to edit a task.
  if (formInputsContainValues && formInputValuesUpdated) {
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
