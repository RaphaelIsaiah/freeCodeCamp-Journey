// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("getMessage").onclick = function () {
//     const req = new XMLHttpRequest();
//     req.open("GET", "/json/cats.json", true);
//     req.send();
//     req.onload = function () {
//       const json = JSON.parse(req.responseText);
//       document.getElementsByClassName("message")[0].innerHTML =
//         JSON.stringify(json);
//     };
//   };
// });

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("getMessage").onclick = function () {
//     fetch("/json/cats.json")
//       .then((response) => response.json())
//       .then((data) => {
//         document.getElementById("message").innerHTML = JSON.stringify(data);
//       });
//   };
// });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getMessage").onclick = function () {
    const req = new XMLHttpRequest();
    req.open("GET", "./json/cats.json", true);
    req.send();
    req.onload = function () {
      const json = JSON.parse(req.responseText);
      let html = "";
      json.forEach(function (val) {
        html += "<div class = 'cat'>";
        // Add your code below this line
        html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
        // Add your code above this line
        html += "</div><br>";
      });
      document.getElementsByClassName("message")[0].innerHTML = html;
    };
  };
});
