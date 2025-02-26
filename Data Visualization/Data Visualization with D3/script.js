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

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => d * 10 + "px");
