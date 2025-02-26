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
const padding = 30;

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
  .attr("r", 5);

const tooltip = d3
  .select("body")
  .append("div")
  .style("position", "absolute")
  .style("background-color", "lightsteelblue")
  .style("padding", "5px")
  .style("border", "1px solid black")
  .style("border-radius", "5px")
  .style("pointer-events", "none")
  .style("opacity", 0);

svg
  .selectAll("circle")
  .on("mouseover", (event, d) => {
    tooltip
      .style("opacity", 1)
      .html(`X: ${d[0]}<br>Y: ${d[1]}`)
      .style("left", `${event.pageX + 5}px`)
      .style("top", `${event.pageY - 28}px`);
  })
  .on("mouseout", () => {
    tooltip.style("opacity", 0);
  });
