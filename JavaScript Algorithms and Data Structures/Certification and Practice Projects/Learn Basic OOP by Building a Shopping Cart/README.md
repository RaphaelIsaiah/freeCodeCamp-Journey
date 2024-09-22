# Project Details

- OOP, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, developers use objects and classes to structure their code.

In this shopping cart project, you'll learn how to define classes and use them. You'll create class instances and implement methods for data manipulation.

This project will cover concepts like the ternary operator, the spread operator, the this keyword, and more.

## Hints

- Remember that you can use destructuring to extract multiple values from an array or object in a single statement.For the first parameter of your callback function, destructure the name, id, price, and category properties from the object passed in.
  products.forEach(({name, id, price, category}) => {});
- You are already familiar with an HTML class, but JavaScript also has a class. **_In JavaScript, a class is like a blueprint for creating objects. It allows you to define a set of properties and methods, and instantiate (or create) new objects with those properties and methods._**
  The class keyword is used to declare a class. Here is an example of declaring a Computer class:
  class Computer {};
- Classes have a special constructor method, which is called when a new instance of the class is created. The constructor method is a great place to initialize properties of the class. Here is an example of a class with a constructor method:
  class Computer {
  constructor() {
  }
  }
- The this keyword in JavaScript is used to refer to the current object. Depending on where this is used, what it references changes. In the case of a class, it refers to the instance of the object being constructed. You can use the this keyword to set the properties of the object being instantiated. Here is an example:
  class Computer {
  constructor() {
  this.ram = 16;
  }
  }
- The first parameter, id, is the id of the product the user has added to their cart. The second parameter, products, is an array of product objects. By using a parameter instead of directly referencing your existing products array, this method will be more flexible if you wanted to add additional product lists in the future.
- There is still more functionality that your ShoppingCart class needs, but first you need to be able to test the code you have currently written. You'll need to instantiate a new ShoppingCart object and assign it to a variable. Here is an example of instantiating the Computer class from earlier examples:
  const myComputer = new Computer();
