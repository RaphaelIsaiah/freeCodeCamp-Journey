# FCC AUTHOR'S PAGE

## One common aspect of web development is learning how to fetch data from an external API, then work with asynchronous JavaScript.

## This freeCodeCamp authors page project shows how to use the fetch method, then dynamically update the DOM to display the fetched data.

## This project will also teach how to paginate your data so you can load results in batches.

### Notes

- In this project we want data about the authors on freeCodeCamp News. If you want data from an online source, you need use an API (Application Programming Interface). An API lets people from outside of an organization retrieve its internal data.
  There is a method called fetch that allows code to receive data from an API by sending a GET request.
  Here is how you can make a GET request with the fetch() method:
  ```
  fetch("url-goes-here")
  ```
- The fetch() method returns a Promise, which is a placeholder object that will either be fulfilled if your request is successful, or rejected if your request is unsuccessful.
  If the Promise is fulfilled, it resolves to a Response object, and you can use the .then() method to access the Response.
  Here's how you can chain .then() to the fetch() method:
  ```
  fetch("sample-url-goes-here")
  .then((res) => res)
  ```
- The data you get from a GET request is not usable at first. To make the data usable, you can use the .json() method on the Response object to parse it into JSON. If you expand the Prototype of the Response object in the browser console, you will see the .json() method there. Remove console.log(res) and implicitly return res.json() instead.
- In order to start working with the data, you will need to use another .then() method. Chain another .then() to the existing .then() method. This time, pass in data as the parameter for the callback function. For the callback, use a curly brace because you will have more than one expression. Within your callback function, log data to the console to see what it looks like.
- The .catch() method is another asynchronous JavaScript method you can use to handle errors. This is useful in case the Promise gets rejected. Chain .catch() to the last .then(). Pass in a callback function with err as the parameter. Inside the callback, use console.error() to log possible errors to the console with the text There was an error: ${err}

**Note**: Now you can terminate your code with a semicolon. You couldn't do that in the previous steps because you'll signal to JavaScript to stop parsing your code, which will affect the fetch() syntax.

- Now that you have the data you want, you can use it to populate the UI. But the fetched data contains an array of 26 authors, and if you add them all to the page at the same time, it could lead to poor performance.
  Instead, you should add 8 authors at a time, and have a button to add 8 more until there's no more data to display.

- **Bug Fix** _Broken image links_
  Added a referrer policy
  The no-referrer policy ensured that the server didn't block the requests due to missing or mismatched referrer headers.
  ```
  <meta name="referrer" content="no-referrer">
  ```
