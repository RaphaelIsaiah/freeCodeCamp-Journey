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
      let json = JSON.parse(req.responseText);
      let html = "";
      json = json.filter(function (val) {
        return val.id !== 1;
      });
      json.forEach(function (val) {
        html += "<div class = 'cat'>";

        html +=
          "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";

        html += "</div>";
      });
      document.getElementsByClassName("message")[0].innerHTML = html;
    };
  };
});
