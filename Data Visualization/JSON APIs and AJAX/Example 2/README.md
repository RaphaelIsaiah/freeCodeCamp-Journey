# Headings

## Get Geolocation Data to Find A User's GPS Coordinates

- Another cool thing you can do is access your user's current location. Every browser has a built in navigator that can give you this information. The navigator will get the user's current longitude and latitude.
- You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct. By selecting allow, you will see the text on the output phone change to your latitude and longitude. Here's code that does this:

  ```javascript
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      document.getElementById("data").innerHTML =
        "latitude: " +
        position.coords.latitude +
        "<br>longitude: " +
        position.coords.longitude;
    });
  }
  ```

- First, it checks if the navigator.geolocation object exists. If it does, the getCurrentPosition method on that object is called, which initiates an asynchronous request for the user's position. If the request is successful, the callback function in the method runs. This function accesses the position object's values for latitude and longitude using dot notation and updates the HTML

## Post Data with the JavaScript XMLHttpRequest Method

- In the previous examples, you received data from an external resource. You can also send data to an external resource, as long as that resource supports AJAX requests and you know the URL.

- JavaScript's `XMLHttpRequest` method is also used to post data to a server. Here's an example:

  ```javascript
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
      const serverResponse = JSON.parse(xhr.response);
      document.getElementsByClassName("message")[0].textContent =
        serverResponse.userName + serverResponse.suffix;
    }
  };
  const body = JSON.stringify({ userName: userName, suffix: " loves cats!" });
  xhr.send(body);
  ```

- You've seen several of these methods before. Here the `open` method initializes the request as a `POST` to the given URL of the external resource, and passes `true` as the third parameter - indicating to perform the operation asynchronously.
- The `setRequestHeader` method sets the value of an HTTP request header, which contains information about the sender and the request. It must be called after the `open` method, but before the `send` method. The two parameters are the name of the header and the value to set as the body of that header.
- Next, the `onreadystatechange` event listener handles a change in the state of the request. A `readyState` of `4` means the operation is complete, and a `status` of `201` means it was a successful request. Therefore, the document's HTML can be updated.
- Finally, the `send` method sends the request with the `body` value. The `body` consists of a `userName` and a `suffix` key.
