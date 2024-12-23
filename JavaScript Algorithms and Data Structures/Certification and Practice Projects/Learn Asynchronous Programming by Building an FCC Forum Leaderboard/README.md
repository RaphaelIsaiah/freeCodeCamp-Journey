# Learn Asynchronous Programming by Building an FCC Forum Leaderboard

## JavaScript is an asynchronous programming language. And this project will help you gain proficiency in asynchronous concepts. You'll code your own freeCodeCamp forum leaderboard.

## This project will cover the Fetch API, promises, Async/Await, and the try..catch statement.

### Notes:

- To populate the forum leaderboard with data, you will need to request the data from an API. This is known as asynchronous operation, which means that tasks execute independently of the main program flow.
- You can use use async keyword to create an asynchronous function which returns a promise.
  ```
  const example = async () => {
  console.log("this is an example");
  };
  ```
- In the last project, you used the .catch() method to handle errors. Here you'll use a try...catch statement instead.
  The try block is designed to handle potential errors, and the code inside the catch block will be executed in case an error occurs.
  ```
  try {
  const name = "freeCodeCamp";
  name = "fCC";
  } catch (err) {
    console.log(err); // TypeError: Assignment to constant variable.
  }
  ```
- In the previous project, you used fetch() with the .then() method to perform logic after the promise was resolved. Now you will use the await keyword to handle the asynchronous nature of the fetch() method.
  The await keyword waits for a promise to resolve and returns the result.
  ```
  const example = async () => {
  const data = await fetch("https://example.com/api");
  console.log(data);
  }
  ```
  You want to get the response body as a JSON object. The .json() method of your res variable returns a promise, which means you will need to await it.

