**Coding a game is a great way to grasp fundamental programming principles, while also creating an interactive gaming experience.**

**_In this platformer game project, you'll continue to learn about classes, objects, inheritance, and encapsulation. You'll also learn how to design and organize game elements efficiently and gain insights into problem-solving and code reusability._**

## Notes

- Before you can begin building out the functionality for the game, you will need to set up the ability to add 2D graphics.
  The Canvas API can be used to create graphics in games using JavaScript and the HTML canvas element.
  You will need to use the getContext method which will provide the context for where the graphics will be rendered.
  Example Code
  canvas.getContext("2d");
- The canvas element has a width property which is a positive number that represents the width of the canvas.
- The innerWidth property is a number that represents the interior width of the browser window.
- The innerHeight property is a number that represents the interior height of the browser window.
- As you are designing the game, you will need to make sure that the size of the elements in the game are responsive and adapt to different screen sizes.
- The width and the height of the main player, platforms and checkpoints will be proportional sized relative to the innerHeight of the browser screen. The goal is to make the game responsive and visually consistent across different screen sizes.
- Inside your Player class, you will need to define the player's position, velocity, width, and height values. All of these values will be defined inside the constructor method.
- Inside your position object, add a new key called x with a value of proportionalSize(10). After that, add another key called y with a value of proportionalSize(400).
  You need to use the proportionalSize function here to make sure that the player's position is always proportional to the screen size. This is important because you want the player to be able to move around the screen regardless of the screen size.
- The velocity property will be used to store the player's speed in the x and y directions.
- The next step is to create a draw() method, which will be responsible for creating the player's width, height, position, and fill color.
- The next step is to create an update() method which will be responsible for updating the player's position and velocity as it moves throughout the game.
- Inside the update() method, call the draw() method to ensure that the player is continually drawn on the screen as the game updates.
- When the player moves to the right, you will need to adjust its velocity. Use the addition assignment operator to add the velocity's x coordinate to the player's x position.
- When the player jumps up, you will need to add the logic for adjusting its velocity. Use the addition assignment operator to add the velocity's y coordinate to the player's y position.
- Right now, when the player jumps up, it is possible for it to move past the height of the canvas. To fix that, you will need to add a condition to stop the player from falling past the height of the canvas.
- The final condition you need to add inside the Player class is to ensure that the player stays within the boundaries of the canvas screen and doesn't move too far off to the left. Create an if statement, to check if the player's x position is less than the width.
- For the last condition, you will need to check if the player's x position has exceeded the right edge of the canvas. If it has, you will need to set the player's x position to the maximum value so the player does not accidentally go off screen to the right. Inside your update method, create an if statement that checks if this.position.x >= canvas.width - this.width \* 2.
- Inside your if statement, assign canvas.width - this.width \* 2 to this.position.x. This will ensure that the player's x position will never exceed the right edge of the canvas.
- The requestAnimationFrame() web API, takes in a callback and is used to update the animation on the screen. The animate function will be responsible for updating the player's position and continually drawing it on the canvas.
- As the player moves through the game, you will need to clear the canvas before rendering the next frame of the animation. You can use the clearRect() Web API to accomplish this. It takes in an x, y, width, and height arguments.
- When working with objects where the property name and value are the same, you can use the shorthand property name syntax. This syntax allows you to omit the property value if it is the same as the property name.
  // using shorthand property name syntax
  obj = {
  a, b, c
  }
  The following code is the same as:
  obj = {
  a: a,
  b: b,
  c: c
  }
- If you try to start the game, you will notice that the platforms are rendered on the screen. But as the player moves to the right, the platform does not move with it. To fix this issue, you will need to update the platform's x position as the player moves across the screen. Inside the animate function, add a condition to check if the right key was pressed and if the isCheckpointCollisionDetectionActive is true.
