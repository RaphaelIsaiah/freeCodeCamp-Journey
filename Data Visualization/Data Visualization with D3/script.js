d3.select("body").append("h1").text("Learning D3");
// d3.selectAll("li").text("list item");
// const dataset = ["a", "b", "c"];
// d3.select("ul")
//   .selectAll("li")
//   .data(dataset)
//   .enter()
//   .append("li")
//   .text("New item");

// d3.select("body")
//   .selectAll("h2")
//   .data(dataset)
//   .enter()
//   .append("h2")
//   .text((d) => d + " USD")
//   .style("color", (d) => (d < 20 ? "red" : "green"));

// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
// d3.select("body")
//   .selectAll("div")
//   .data(dataset)
//   .enter()
//   .append("div")
//   .attr("class", "bar")
//   .style("height", (d) => d * 10 + "px");

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", "25")
  .attr("height", (d, i) => d * 3)
  .attr("fill", "navy")
  .attr("class", "bar")
  .append("title")
  .text((d) => d);

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - (d * 3 + 3));
