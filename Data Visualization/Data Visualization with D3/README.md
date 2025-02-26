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
