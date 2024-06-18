// Understanding the localStorage method.
// const myTaskArr = [
// { task: "Walk the Dog", date: "22-04-2022" },
// { task: "Read some books", date: "02-11-2023" },
// { task: "Watch football", date: "10-08-2021" },
// ];

// localStorage.setItem("data", JSON.stringify(myTaskArr));

// // localStorage.removeItem("data");
// localStorage.clear();

// const getTaskArr = localStorage.getItem("data");
// console.log(getTaskArr);

// const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
// console.log(getTaskArrObj);

/\*\*

- Local storage is a web browser feature that lets web applications store key-value pairs persistently within a user's browser. This allows web apps to save data during one session, then retrieve it in a later page session.
- In this TODO application, you'll learn how to handle form inputs, manage local storage, perform CRUD (Create, Read, Update, Delete) operations on tasks, implement event listeners, and toggle UI elements.
- LocalStorage is a web storage feature of JavaScript that lets you persist data by storing the data as a key:value pair.
- Create a taskData constant and set it to an empty array. This array will store all the tasks along with their associated data, including title, due date, and description. This storage will enable you to keep track of tasks, display them on the page, and save them to localStorage.
- In earlier projects, you learned how to add and remove classes from an element with el.classList.add() and el.classList.remove(). Another method to use with the classList property is the toggle method. The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.
- element.classList.toggle("class-to-toggle");
- The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.
- dialogElement.showModal();
- The HTML dialog element has a close() method that can be used to close a modal dialog box on a web page.
- dialogElement.close();
- The preventDefault() method to stop the browser from refreshing the page after submitting the form.
- The findIndex() array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing function. If no such element is found, the method returns -1. Here is an example:
- const numbers = [3, 1, 5, 6];
- const firstNumLargerThanThree = numbers.findIndex((num) => num > 3);
- console.log(firstNumLargerThanThree); // prints index 2
- Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
- console.log(Date.now()); // 1628586800000
- Now that you have obtained the values from the input fields and generated an id, you want to add them to your taskData array to keep track of each task. However, you should only do this if the task is new. If the task already exists, you will set it up for editing. This is why you have the dataArrIndex variable, which provides the index of each task.
- unshift() is an array method that is used to add one or more elements to the beginning of an array.
- const arr = [1, 2, 3];
- arr.unshift(0);
- // [0, 1, 2, 3]
- console.log(arr);
- To allow for task management we include a delete and an edit button for each task.
- Instead of clearing the input fields one by one, it's a good practice to create a function that handles clearing those fields. You can then call this function whenever you need to clear the input fields again.
- You can enhance code readability and maintainability by refactoring the submit event listener into two separate functions. The first function can be used to add the input values to taskData, while the second function can be responsible for adding the tasks to the DOM.
- There's a problem. If you add a task, and then add another, the previous task gets duplicated. This means you need to clear out the existing contents of tasksContainer before adding a new task.
- this is a keyword that refers to the current context. In this case, this points to the element that triggers the event – the buttons.
- splice() is an array method that modifies arrays by removing, replacing, or adding elements at a specified index, while also returning the removed elements. It can take up to three arguments: the first one is the mandatory index at which to start, the second is the number of items to remove, and the third is an optional replacement element. Here's an example:
- const fruits = ["mango", "date", "cherry", "banana", "apple"];
- // Remove date and cherry from the array starting at index 1
- const removedFruits = fruits.splice(1, 2);
- console.log(fruits); // [ 'mango', 'banana', 'apple' ]
- console.log(removedFruits); // [ 'date', 'cherry' ]
- localStorage offers methods for saving, retrieving, and deleting items. The items you save can be of any JavaScript data type.
- For instance, the setItem() method is used to save an item, and the getItem() method retrieves the item. To delete a specific item, you can utilize the removeItem() method, or if you want to delete all items in the storage, you can use clear().
- Here's how you can save an item:
- localStorage.setItem("key", value); // value could be string, number, or any other data type
- If you check the Application tab of your browser console, you'll notice a series of [object Object]. This is because everything you save in localStorage needs to be in string format.
- To resolve the issue, wrap the data you're saving in the JSON.stringify() method. Then, check local storage again to observe the results.
- Now that you have the myTaskArr array saved in localStorage correctly, you can retrieve it with getItem() by specifying the key you used to save the item.
- The item you retrieve is a string, as you saved it with JSON.stringify(). To view it in its original form before saving, you need to use JSON.parse().
- Use getItem() to retrieve the myTaskArr array again. This time, wrap it inside JSON.parse(), assign it to the variable getTaskArrObj and log the getTaskArrObj to the console.
- Check the console to see the difference between getTaskArr and getTaskObj.
- You can use localStorage.removeItem() to remove a specific item and localStorage.clear() to clear all items in the local storage. Remove the data item from local storage and open the console to observe the result. You should see null.
- Using localStorage.clear() won't just delete a single item from local storage but will remove all items. Remove localStorage.removeItem() and use localStorage.clear() instead. You don't need to pass in anything. You should also see null in the console.
- Now you should save the task items to local storage when the user adds, updates, or removes a task.
- You also want a deleted task to be removed from local storage. For this, you don't need the removeItem() or clear() methods. Since you already use splice() to remove the deleted task from taskData, all you need to do now is save taskData to local storage again.
- If you add, update, or remove a task, it should reflect in the UI. However, that's not happening now because you have yet to retrieve the tasks. To do this, you need to modify your initial taskData to be an empty array.
- Set taskData to the retrieval of data from local storage or an empty array. Make sure you parse the data coming with JSON.parse() because you saved it as a string.
- You've retrieved the task item(s) now, but they still don't reflect in the UI when the page loads. However, they appear when you add a new task.
- You can check if there's a task inside taskData using the length of the array. Because 0 is a falsy value all you need for the condition is the array length.
- Check if there's a task inside taskData, then call the updateTaskContainer() inside the if statement block.
  \*/