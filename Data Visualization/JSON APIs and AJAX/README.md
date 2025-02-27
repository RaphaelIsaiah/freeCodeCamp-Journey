# JSON API and AJAX

Similar to how UIs help people use programs, APIs (Application Programming Interfaces) help programs interact with other programs. APIs are tools that computers use to communicate with one another, in part to send and receive data.

Programmers often use AJAX (Asynchronous JavaScript and XML) when working with APIs. AJAX refers to a group of technologies that make asynchronous requests to a server to transfer data, then load any returned data into the page. And the data transferred between the browser and server is often in a format called JSON (JavaScript Object Notation).

This course will teach you the basics about working with APIs and different AJAX technologies in the browser.

## Notes

- You want your code to execute only once your page has finished loading. For that purpose, you can attach a JavaScript event to the document called DOMContentLoaded. Here's the code that does this:

  ```javascript
  document.addEventListener("DOMContentLoaded", function () {});
  ```

- You can implement event handlers that go inside of the DOMContentLoaded function. You can implement an onclick event handler which triggers when the user clicks on the #getMessage element, by adding the following code:

  ```javascript
  document.getElementById("getMessage").onclick = function () {};
  ```

- When the click event happens, you can use JavaScript to update an HTML element.

### Get JSON with the JavaScript XMLHttpRequest Method

- You can also request data from an external source. This is where APIs come into play. Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another. You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.
- Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation. JSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a `{` and a `}`.
- These properties and their values are often referred to as "key-value pairs".
  However, JSON transmitted by APIs are sent as `bytes`, and your application receives it as a `string`. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The `JSON.parse` method parses the string and constructs the JavaScript object described by it.
- You can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:

  ```javascript
  const req = new XMLHttpRequest();
  req.open("GET", "/json/cats.json", true);
  req.send();
  req.onload = function () {
    const json = JSON.parse(req.responseText);
    document.getElementsByClassName("message")[0].innerHTML =
      JSON.stringify(json);
  };
  ```

- Here's a review of what each piece is doing. The JavaScript `XMLHttpRequest` object has a number of properties and methods that are used to transfer data.

  - First, an instance of the `XMLHttpRequest` object is created and saved in the `req` variable.
  - Next, the `open` method initializes a request - this example is requesting data from an API, therefore is a `GET` request. The second argument for `open` is the URL of the API you are requesting data from. The third argument is a Boolean value where `true` makes it an asynchronous request.
  - The `send` method sends the request.
  - Finally, the `onload` event handler parses the returned data and applies the `JSON.stringify` method to convert the JavaScript object into a string. This string is then inserted as the message text.

- Another way to request external data is to use the JavaScript `fetch()` method. It is equivalent to `XMLHttpRequest`, but the syntax is considered easier to understand. Here is the code for making a `GET` request to `/json/cats.json`

  ```javascript
  fetch("/json/cats.json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("message").innerHTML = JSON.stringify(data);
    });
  ```

- Note: The `fetch()` method uses `GET` as the default `HTTP` method. This means you don’t need to specify it explicitly for basic data retrieval.
  - The first line is the one that makes the request. So, `fetch(URL)` makes a `GET` request to the URL specified. The method returns a Promise.
  - After a Promise is returned, if the request was successful, the `then` method is executed, which takes the response and converts it to JSON format.
  - The `then` method also returns a Promise, which is handled by the next `then` method. The argument in the second `then` is the JSON object you are looking for!
  - Now, it selects the element that will receive the data by using `document.getElementById()`. Then it modifies the HTML code of the element by inserting a string created from the JSON object returned from the request.

#### Acess the JSON Data from an API

- Now you'll take a closer look at the returned data to better understand the JSON format. Recall some notation in JavaScript:

  > `[ ]` -> Square brackets represent an array.
  > `{ }` -> Curly brackets represent an object.
  > `" "` -> Double quotes represent a string. They are also used for key names in JSON.

- Understanding the structure of the data that an API returns is important because it influences how you retrieve the values you need.

- The first and last character you see in the JSON data are square brackets `[ ]`. This means that the returned data is an array. The second character in the JSON data is a curly `{` bracket, which starts an object. Looking closely, you can see that there are three separate objects. The JSON data is an array of three objects, where each object contains information about a cat photo.
- You learned earlier that objects contain "key-value pairs" that are separated by commas. In the Cat Photo example, the first object has `"id":0` where `id` is a key and `0` is its corresponding value. Similarly, there are keys for `imageLink`, `altText`, and `codeNames`. Each cat photo object has these same keys, but with different values.
- Another interesting "key-value pair" in the first object is `"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]`. Here `codeNames` is the key and its value is an array of three strings. It's possible to have arrays of objects as well as a key with an array as a value.
- Remember how to access data in arrays and objects. Arrays use bracket notation to access a specific index of an item. Objects use either bracket or dot notation to access the value of a given property. Here's an example that prints the `altText` property of the first cat photo - note that the parsed JSON data in the editor is saved in a variable called `json`:

  ```javascript
  console.log(json[0].altText);
  ```

  The console would display the string `A white cat wearing a green helmet shaped melon on its head.`.
