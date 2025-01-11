- Bootstrap has a class called "**_well_**" that can create a visual sense of depth for your columns.
- Not every class needs to have corresponding CSS. Sometimes we create classes just for the purpose of selecting these elements more easily using jQuery.
- When we start using jQuery, we will modify HTML elements without needing to actually change them in HTML.

## jQuery

jQuery is one of the most widely used JavaScript libraries in the world.

In 2006 when it was released, all major browsers handled JavaScript slightly differently. jQuery simplified the process of writing client-side JavaScript, and also ensured that your code worked the same way in all browsers.

In this course, you'll learn how to use jQuery to select, remove, clone, and modify different elements on the page.

- Note that code you put inside this function will run as soon as your browser has loaded your page.

  ```
  <script>
    $(document).ready(function () {});
  </script>
  ```

  - This is important because without your document ready function, your code may run before your HTML is rendered, which would cause bugs.

- All jQuery functions start with a `$`, usually referred to as a dollar sign operator, or as bling.

  - jQuery often selects an HTML element with a selector, then does something to that element.
  - For example, let's make all of your button elements bounce. Just add this code inside your document ready function: `$("button").addClass("animated bounce");`

- In the same way you can add classes to an element with jQuery's addClass() function, you can remove them with jQuery's removeClass() function.
  Here's how you would do this for a specific button: `$("#target2").removeClass("btn-default");`
- We can also change the CSS of an HTML element directly with jQuery.

  - jQuery has a function called `.css()` that allows you to change the CSS of an element.
    Here's how we would change its color to blue: `$("#target1").css("color", "blue");`
    This is slightly different from a normal CSS declaration, because the CSS property and its value are in quotes, and separated with a comma instead of a colon.

- You can also change the non-CSS properties of HTML elements with jQuery. For example, you can disable buttons.

  - When you disable a button, it will become grayed-out and can no longer be clicked.
  - jQuery has a function called `.prop()` that allows you to adjust the properties of elements.
  - Here's how you would disable all buttons: `$("button").prop("disabled", true);`

- Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.

- jQuery has a function called `.html()` that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.

  - Here's how you would rewrite and emphasize the text of our heading: `$("h3").html("<em>jQuery Playground</em>");`
  - jQuery also has a similar function called `.text()` that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.

- jQuery has a function called `.remove()` that will remove an HTML element entirely.
- jQuery has a function called appendTo() that allows you to select HTML elements and append them to another element. For example, if we wanted to move target4 from our right well to our left well, we would use: `$("#target4").appendTo("#left-well");`

- In addition to moving elements, you can also copy them from one place to another.

- jQuery has a function called clone() that makes a copy of an element.

  - For example, if we wanted to copy target2 from our left-well to our right-well, we would use:
    `$("#target2").clone().appendTo("#right-well");`
  - Did you notice this involves sticking two jQuery functions together? This is called function chaining and it's a convenient way to get things done with jQuery.

- Every HTML element has a parent element from which it inherits properties.

  - For example, the `h3` element in your jQuery Playground has the parent element of `<div class="container-fluid">`, which itself has the parent element of body.
  - jQuery has a function called `parent()` that allows you to access the parent of whichever element you've selected.
  - Here's an example of how you would use the `parent()` function if you wanted to give the parent element of the left-well element a background color of blue: `$("#left-well").parent().css("background-color", "blue")`

- When HTML elements are placed one level below another they are called children of that element. For example, the button elements in this challenge with the text #target1, #target2, and #target3 are all children of the <div class="well" id="left-well"> element.

  - jQuery has a function called children() that allows you to access the children of whichever element you've selected.
  - Here's an example of how you would use the children() function to give the children of your left-well element the color blue: `$("#left-well").children().css("color", "blue")`

- You've seen why id attributes are so convenient for targeting with jQuery selectors. But you won't always have such neat ids to work with. Fortunately, jQuery has some other tricks for targeting the right elements.

  - jQuery uses CSS Selectors to target elements. The `target:nth-child(n)` CSS selector allows you to select all the nth elements with the target class or element type.
  - Here's how you would give the third element in each well the bounce class: `$(".target:nth-child(3)").addClass("animated bounce");`

- You can also target elements based on their positions using `:odd` or `:even` selectors.

  - Note that jQuery is zero-indexed which means the first element in a selection has a position of 0. This can be a little confusing as, counter-intuitively, `:odd` selects the second element (position 1), fourth element (position 3), and so on.
  - Here's how you would target all the odd elements with class `target` and give them classes: `$(".target:odd").addClass("animated shake");`

- jQuery can target the body element as well.
  - Here's how we would make the entire body fade out: `$("body").addClass("animated fadeOut");`
  - But let's do something more dramatic. Add the classes animated and hinge to your body element.
