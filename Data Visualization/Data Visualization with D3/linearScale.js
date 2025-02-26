// Linear Scale with D3

// const scale = d3.scaleLinear();
// scale.domain([250, 500]);
// scale.range([10, 150]);

// const output = scale(50);

// d3.select("body").append("h2").text(output);

// Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset

// const positionData = [
//   [1, 7, -4],
//   [6, 3, 8],
//   [2, 9, 3],
// ];

// const output = d3.max(positionData, (d) => d[2]);

// d3.select("body").append("h2").text(output);

// const dataset = [
//   [34, 78],
//   [109, 280],
//   [310, 120],
//   [79, 411],
//   [420, 220],
//   [233, 145],
//   [333, 96],
//   [222, 333],
//   [78, 320],
//   [21, 123],
// ];

// const w = 500;
// const h = 500;

// // Padding between the SVG boundary and the plot
// const padding = 30;

// // Create an x and y scale

// const xScale = d3
//   .scaleLinear()
//   .domain([0, d3.max(dataset, (d) => d[0])])
//   .range([padding, w - padding]);

// const yScale = d3
//   .scaleLinear()
//   .domain([0, d3.max(dataset, (d) => d[1])])
//   .range([h - padding, padding]);

// const output = yScale(411); // Returns 30
// d3.select("body").append("h2").text(output);

// const dataset = [
//   [34, 78],
//   [109, 280],
//   [310, 120],
//   [79, 411],
//   [420, 220],
//   [233, 145],
//   [333, 96],
//   [222, 333],
//   [78, 320],
//   [21, 123],
// ];

// const w = 500;
// const h = 500;
// const padding = 60;

// const xScale = d3
//   .scaleLinear()
//   .domain([0, d3.max(dataset, (d) => d[0])])
//   .range([padding, w - padding]);

// const yScale = d3
//   .scaleLinear()
//   .domain([0, d3.max(dataset, (d) => d[1])])
//   .range([h - padding, padding]);

// const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

// svg
//   .selectAll("circle")
//   .data(dataset)
//   .enter()
//   .append("circle")
//   // Add your code below this line
//   .attr("cx", (d) => xScale(d[0]))
//   .attr("cy", (d) => yScale(d[1]))
//   .attr("r", 5);

// svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text((d) => d[0] + ", " + d[1])
//   // Add your code below this line
//   .attr("x", (d) => xScale(d[0] + 10))
//   .attr("y", (d) => yScale(d[1]));

const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([h - padding, padding]);

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[0]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", (d) => 5);

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d[0] + ", " + d[1])
  .attr("x", (d) => xScale(d[0] + 8))
  .attr("y", (d) => yScale(d[1]))
  .style("font-size", "13px");

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg
  .append("g")
  .attr("transform", "translate(0," + (h - padding) + ")")
  .call(xAxis);

svg
  .append("g")
  .attr("transform", "translate( " + padding + " ,0)")
  .call(yAxis);
