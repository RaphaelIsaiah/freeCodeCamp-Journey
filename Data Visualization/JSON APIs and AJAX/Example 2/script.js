if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    document.getElementById("data").innerHTML =
      "latitude: " +
      position.coords.latitude +
      "<br>longitude: " +
      position.coords.longitude;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sendMessage").onclick = function () {
    const userName = document.getElementById("name").value;
    const url = "https://jsonplaceholder.typicode.com/posts";
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
  };
});
