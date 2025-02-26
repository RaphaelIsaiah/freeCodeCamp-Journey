# Data Visualization with D3

- D3, or D3.js, stands for **Data Driven Documents**. It's a JavaScript library for creating dynamic and interactive data visualizations in the browser.
- D3 is built to work with common web standards – namely HTML, CSS, and Scalable Vector Graphics (SVG).
- D3 supports many different kinds of input data formats. Then, using its powerful built-in methods, you can transform those data into different charts, graphs, and maps.
- **_In the Data Visualization with D3 courses, you'll learn how to work with data to create different charts, graphs, hover elements, and other ingredients to create dynamic and attractive data visualizations._**

## Notes

- D3 has several methods that let you add and change elements in your document.
  The `select()` method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:

  ```javascript
  const anchor = d3.select("a");
  ```

  The above example finds the first anchor tag on the page and saves an HTML node for it in the variable anchor. You can use the selection with other methods. The d3 part of the example is a reference to the D3 object, which is how you access D3 methods.

  Two other useful methods are `append()` and `text()`.

  The `append()` method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.

  The `text()` method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.

  Here's an example that selects an unordered list, appends a list item, and adds text:

  ```javascript
  d3.select("ul").append("li").text("Very important item");
  ```

  `D3` allows you to chain several methods together with periods to perform a number of actions in a row.

- D3 also has the `selectAll()` method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string. Here's an example to select all the anchor tags in a document:

  ```javascript
  const anchors = d3.selectAll("a");
  ```

  Like the `select()` method, `selectAll()` supports method chaining, and you can use it with other methods.

- The D3 library focuses on a data-driven approach. When you have a set of data, you can apply D3 methods to display it on the page.

  - The first step is to make D3 aware of the data. The data() method is used on a selection of DOM elements to attach the data to those elements. The data set is passed as an argument to the method.
    A common workflow pattern is to create a new element in the document for each piece of data in the set. D3 has the enter() method for this purpose.
    When enter() is combined with the data() method, it looks at the selected elements from the page and compares them to the number of data items in the set. If there are fewer elements than data items, it creates the missing elements.
    Here is an example that selects a ul element and creates a new list item based on the number of entries in the array:

  ```html
  <body>
    <ul></ul>
    <script>
      const dataset = ["a", "b", "c"];
      d3.select("ul")
        .selectAll("li")
        .data(dataset)
        .enter()
        .append("li")
        .text("New item");
    </script>
  </body>
  ```

  It may seem confusing to select elements that don't exist yet. This code is telling D3 to first select the ul on the page. Next, select all list items, which returns an empty selection. Then the data() method reviews the dataset and runs the following code three times, once for each item in the array. The enter() method sees there are no li elements on the page, but it needs 3 (one for each piece of data in dataset). New li elements are appended to the ul and have the text New item.

- The D3 text() method can take a string or a callback function as an argument:

  ```javascript
  selection.text((d) => d);
  ```

  In the example above, the parameter d refers to a single entry in the dataset that a selection is bound to.

- D3 lets you add inline CSS styles on dynamic elements with the style() method.
  The style() method takes a comma-separated key-value pair as an argument. Here's an example to set the selection's text color to blue:

  ```javascript
  selection.style("color", "blue");
  ```

- D3 is about visualization and presentation of data. It's likely you'll want to change the styling of elements based on the data. For example, you may want to color a data point blue if it has a value less than 20, and red otherwise. You can use a callback function in the style() method and include the conditional logic. The callback function uses the d parameter to represent the data point:

  ```javascript
  selection.style("color", (d) => {});
  ```

  The style() method is not limited to setting the color - it can be used with other CSS properties as well.

- D3 has the attr() method to add any HTML attribute to an element, including a class name. The attr() method works the same way that style() does. It takes comma-separated values, and can use a callback function. Here's an example to add a class of container to a selection:

  ```javascript
  selection.attr("class", "container");
  ```

  Note that the class parameter will remain the same whenever you need to add a class and only the container parameter will change.

### Create a Bar Chart

- The previous challenges covered how to display data from an array and how to add CSS classes. You can combine these lessons to create a simple bar chart. There are two steps to this:
  1. Create a div for each data point in the array
  2. Give each div a dynamic height, using a callback function in the style() method that sets height equal to the data value
- The last challenge created a bar chart, but there are a couple of formatting changes that could improve it:
  1. Add space between each bar to visually separate them, which is done by adding a margin to the CSS for the bar class
  2. Increase the height of the bars to better show the difference in values, which is done by multiplying the value by a number to scale the height
     Note: Multiplying each data point by the same constant only alters the scale. It's like zooming in, and it doesn't change the meaning of the underlying data.

### Learn about SVG in D3

- SVG stands for Scalable Vector Graphics. Here "scalable" means that, if you zoom in or out on an object, it would not appear pixelated. It scales with the display system, whether it's on a small mobile screen or a large TV monitor.
- SVG is used to make common geometric shapes. Since D3 maps data into a visual representation, it uses SVG to create the shapes for the visualization. SVG shapes for a web page must go within an HTML `svg` tag.
- CSS can be scalable when styles use relative units (such as `vh`, `vw`, or percentages), but using SVG is more flexible to build data visualizations.
- Note: When using attr() width and height attributes do not have units. This is the building block of scaling - the element will always have a 5:1 width to height ratio, no matter what the zoom level is.
- There are a number of supported shapes in SVG, such as rectangles and circles. They are used to display data. For example, a rectangle (`<rect>`) SVG shape could create a bar in a bar chart.
- When you place a shape into the svg area, you can specify where it goes with x and y coordinates. The origin point of (0, 0) is in the upper-left corner. Positive values for x push the shape to the right, and positive values for y push the shape down from the origin point.
- There are a few differences working with rect elements instead of div elements. The rect elements must be appended to an svg element, not directly to the body. Also, you need to tell D3 where to place each rect within the svg area. The bar placement will be covered in the next challenge.
- The attr() method in D3 accepts a callback function to dynamically set that attribute. The callback function takes two arguments, one for the data point itself (usually d) and one for the index of the data point in the array. The second argument for the index is optional. Here's the format:

  ```javascript
  selection.attr("property", (d, i) => {});
  ```

- In SVG, a rect shape is colored with the fill attribute. It supports hex codes, color names, and rgb values, as well as more complex options like gradients and transparency.
- D3 lets you label a graph element, such as a bar, using the SVG text element.

### Create a Scatterplot with SVG Circles

- A scatter plot is another type of visualization. It usually uses circles to map data points, which have two values each. These values tie to the x and y axes, and are used to position the circle in the visualization.
- SVG has a circle tag to create the circle shape. It works a lot like the rect elements you used for the bar chart.
- A `circle` in SVG has three main attributes. The `cx` and `cy` attributes are the coordinates. They tell D3 where to position the center of the shape on the SVG. The radius (`r` attribute) gives the size of the `circle`.
- Just like the `rect` `y` coordinate, the `cy` attribute for a circle is measured from the top of the SVG, not from the bottom.
- All three attributes can use a callback function to set their values dynamically. Remember that all methods chained after `data(dataset)` run once per item in `dataset`. The `d` parameter in the callback function refers to the current item in `dataset`, which is an array for each point. You use bracket notation, like `d[0]`, to access the values in that array.

### Create a Linear Scale with D3

- The bar and scatter plot charts both plotted data directly onto the SVG. However, if the height of a bar or one of the data points were larger than the SVG height or width values, it would go outside the SVG area.
- In D3, there are scales to help plot data. `scales` are functions that tell the program how to map a set of raw data points onto the pixels of the SVG.
- For example, say you have a 100x500-sized SVG and you want to plot Gross Domestic Product (GDP) for a number of countries. The set of numbers would be in the billion or trillion-dollar range. You provide D3 a type of scale to tell it how to place the large GDP values into that 100x500-sized area.
- It's unlikely you would plot raw data as-is. Before plotting it, you set the scale for your entire data set, so that the `x` and `y` values fit your SVG width and height.
- D3 has several scale types. For a linear scale (usually used with quantitative data), there is the D3 method `scaleLinear()`:

  ```javascript
  const scale = d3.scaleLinear();
  ```

- By default, scales use the identity relationship. This means the input value maps to the output value. However, scales can be much more flexible and interesting.
- Say a dataset has values ranging from 50 to 480. This is the input information for a scale, also known as the _domain_.
- You want to map those points along the `x` axis on the SVG, between 10 units and 500 units. This is the output information, also known as the _range_.
- The domain() and range() methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:

  ```javascript
  scale.domain([50, 480]);
  scale.range([10, 500]);
  scale(50);
  scale(480);
  scale(325);
  scale(750);
  d3.scaleLinear();
  ```

- The D3 methods `domain()` and `range()` set that information for your scale based on the data. There are a couple methods to make that easier.
- Often when you set the domain, you'll want to use the minimum and maximum values within the data set. Trying to find these values manually, especially in a large data set, may cause errors.
- D3 has two methods - `min()` and `max()` to return this information. Here's an example:

  ```javascript
  const exampleData = [34, 234, 73, 90, 6, 52];
  d3.min(exampleData);
  d3.max(exampleData);
  ```

- A dataset may have nested arrays, like the `[x, y]` coordinate pairs that were in the scatter plot example. In that case, you need to tell D3 how to calculate the maximum and minimum. Fortunately, both the `min()` and `max()` methods take a callback function. In this example, the callback function's argument `d` is for the current inner array. The callback needs to return the element from the inner array (the `x` or `y` value) over which you want to compute the maximum or minimum. Here's an example for how to find the min and max values with an array of arrays:

  ```javascript
  const locationData = [
    [1, 7],
    [6, 3],
    [8, 3],
  ];
  const minX = d3.min(locationData, (d) => d[0]);
  // minX would have the value 1.
  ```

- The D3 `min()` and `max()` methods are useful to help set the scale. Given a complex data set, one priority is to set the scale so the visualization fits the SVG container's width and height. You want all the data plotted inside the SVG so it's visible on the web page.
- The example below sets the x-axis scale for scatter plot data. The `domain()` method passes information to the scale about the raw data values for the plot. The `range()` method gives it information about the actual space on the web page for the visualization.
- In the example, the domain goes from 0 to the maximum in the set. It uses the `max()` method with a callback function based on the x values in the arrays. The range uses the SVG's width (`w`), but it includes some padding, too. This puts space between the scatter plot dots and the edge of the SVG.

  ```javascript
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
  ```

- The padding may be confusing at first. Picture the x-axis as a horizontal line from 0 to 500 (the width value for the SVG). Including the padding in the range() method forces the plot to start at 30 along that line (instead of 0), and end at 470 (instead of 500).
- The scales are like processing functions that turn the x and y raw data into values that fit and render correctly on the SVG. They keep the data within the screen's plotting area.
- You set the coordinate attribute values for an SVG shape with the scaling function. This includes x and y attributes for rect or text elements, or cx and cy for circles. Here's an example:

  ```javascript
  shape.attr("x", (d) => xScale(d[0]));
  ```

- Scales set shape coordinate attributes to place the data points onto the SVG. You don't need to apply scales when you display the actual data value, for example, in the text() method for a tooltip or label.

- Another way to improve the scatter plot is to add an x-axis and a y-axis. D3 has two methods, `axisLeft()` and `axisBottom()`, to render the y-axis and x-axis, respectively. Here's an example to create the x-axis based on the `xScale` in the previous challenges:

  ```javascript
  const xAxis = d3.axisBottom(xScale);
  ```

- The next step is to render the axis on the SVG. To do so, you can use a general SVG component, the `g` element. The `g` stands for group. Unlike `rect`, `circle`, and `text`, an axis is just a straight line when it's rendered. Because it is a simple shape, using `g` works. The last step is to apply a `transform` attribute to position the axis on the SVG in the right place. Otherwise, the line would render along the border of the SVG and wouldn't be visible. SVG supports different types of `transforms`, but positioning an axis needs `translate`. When it's applied to the `g` element, it moves the whole group over and down by the given amounts. Here's an example:

  ```javascript
  const xAxis = d3.axisBottom(xScale);

  svg
    .append("g")
    .attr("transform", "translate(0, " + (h - padding) + ")")
    .call(xAxis);
  ```

- The above code places the x-axis at the bottom of the SVG. Then it's passed as an argument to the `call()` method. The y-axis works in the same way, except the `translate` argument is in the form `(x, 0)`. Because `translate` is a string in the `attr()` method above, you can use concatenation to include variable values for its arguments.
