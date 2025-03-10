_React is one of the most popular JavaScript libraries for building user interfaces and web applications._

- A fundamental concept in React is the creation of reusable UI components. These components can easily be reused throughout your application.
- React uses a virtual DOM, which improves performance and efficiency.
- React also provides a powerful way to manage the state of your application. State refers to the data that determines how a component renders and behaves. With React, you can easily track and update the state of components, ensuring that the UI reflects the most current data.
- Components are the building blocks of React applications that allow developers to break down complex user interfaces into smaller, manageable pieces, making it easier to develop and maintain large-scale applications.
- The two types of components in React are **functional** and **class** based components. In modern React, developers will use functional components.
- At a higher level, you can think of component like JavaScript functions that return elements describing the UI. This UI is described using JSX, a syntax extension for JavaScript that looks similar to HTML but allows you to write UI elements in a more declarative way.
  Let's look at an example of a React component:

  ```
  function Greeting() {
  const name = "John"
  {/_ The result will be Hello John_/}
  return <h1 className="title">Hello {name}</h1>;
  }
  ```

  - In this example, we've defined a component called `Greeting`. The curly braces `{}` inside the `h1` tags enable us to embed JavaScript expressions, allowing us to access the `name` variable within the `h1` element. We are also applying a `className` called `title` to the `h1` element.
    - But why are we using `className` instead of `class` like with regular HTML elements? Well this is because in JavaScript, `class` is a reserved name. So, we need to use `className` instead.
    - We are also using a comment in JSX showing what the result will be. It is important to note that you can use regular comment syntax like this but it needs to be wrapped in curly braces in order for it to work. `{/* Block Comments */}`
    - React treats components with a capital letter as custom components, while elements with lowercase letters are considered built-in HTML elements. If the component name starts with a capital letter, React will treat it as a user-defined component and render it accordingly. This distinction helps React differentiate between native HTML tags and components that you create.
    - To use this Greeting component in our application, we would write something like this: `<Greeting />`

### Working with data in React

- Props, which is short for properties, is the way for Parent components to pass data down to the child component.

  - Props can be of any type: strings, numbers, booleans, objects, or arrays.
  - Let’s update our example from earlier to now accept a `name` prop:

  ```
  function App() {
  return <Greeting name="Jessica" />;
  }

  export default App;

  function Greeting(props) {
  console.log(props);
  return <h1>Hi {props.name}!</h1>;
  }
  ```

  - For the child component called `Greeting` we are now using `props.name` instead of hardcoding the name `"Jessica"`. We are also logging props to the console which is showing as an object. Then inside of the parent App component, we are passing the value to the name prop so it can be passed down to the child. The result will be the same on the screen like earlier, but now we have created a more flexible component.
  - Now we have the ability to reuse the child component several times and pass in different names each time.

  ```
  function App() {
  return (
    <>
      <Greeting name="Naomi" />
      <Greeting name="Tom" />
      <Greeting name="Jessica" />
      <Greeting name="Oliver" />
    </>
  );
  }
  ```

  - You can also choose to use object destructuring in the props to make it more readable. Here's how you could rewrite the Greeting component:

  ```
  function Greeting({ name }) {
  return <h1>Hi {name}!</h1>;
  }
  ```

  - This code achieves the same result but makes it clearer which props the component is expecting to receive.

  - Sometimes, you can have a lot of properties that you have to pass as props. Instead of passing them one by one, you can use the spread operator (...), after converting them to an object.

  - Here is an example of a new child component called DeveloperCard:

  ```
  function DeveloperCard({ name, age, country }) {
  return (
    <div className="developer-card">
      <h1>Developer: {name}</h1>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
  }
  ```

  - This DeveloperCard component accepts three props: name, age, and country.
  - In the parent App component, we can use the spread syntax to pass all the properties from an object as individual props to the child component.

  ```
  function App() {
  const developerObj = {
    name: "Alice",
    age: 30,
    country: "USA",
  };

  return (
    <div className="App">
      <DeveloperCard {...developerObj} />
    </div>
  );
  }
  ```

  - This is particularly useful when working with arrays of objects and passing multiple sets of properties to child components. For example, you might have a list of developers where each object in the array has the same structure but represents a different person.

  - Using props in React makes your components more flexible and reusable, allowing you to build more complex UIs. **_However_**, it's important to note that props are immutable, meaning they cannot be changed once passed to a component. _If you need to handle user input and modify data, you should use state instead. You'll learn more about managing state in future lectures_.

- Conditional rendering in React allows you to create dynamic user interfaces. It is used to show different content based on certain conditions or states within your application.

  - The most common approaches of using Conditional rendering includes using if statements, the ternary operator, and `logical AND (&&)` operator.
  - The simplest form of conditional rendering uses an if statement. Here is an example:

  ```
  function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in</h1>;
  }
  ```

  - In this example, the Greeting component checks the isLoggedIn prop. If it's true, it returns a welcome message, otherwise, it prompts the user to sign in.
  - Here is an example using the Greeting component inside of the parent App component.

  ```
  function App() {
  return (
    <div className="App">
      <Greeting isLoggedIn={false} />
    </div>
  );
  }
  ```

  - For simpler conditions, the ternary operator (`?`) is often used directly within JSX. It allows for inline conditional rendering, which can make your code more concise:

  ```
  function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
  }
  ```

  - This code achieves the same result as the previous example but in a more compact form. The ternary operator checks isLoggedIn and renders the appropriate message.
  - Another common pattern for conditional rendering is using the `logical AND (&&)` operator. This is particularly useful when you want to render something or nothing based on a condition:

  ```
  function Notification({ message }) {
  return (
    <div>
      {message && <p>{message}</p>}
    </div>
  );
  }
  ```

  In this example, the paragraph element with the `message` is only rendered if the `message` prop is truthy. If `message` is falsy (meaning it is an empty string, `null`, or `undefined`), nothing is rendered to the screen.

- Rendering lists is a fundamental task in React web apps, and is used for displaying data to users. In React, the map() method is used to transform an array of data into an array of JSX elements that can be rendered in the UI.
  - Here is an example of a component called FruitList that displays a list of fruits:
  ```
  function FruitList() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  return (
    <ul>
      {fruits.map(fruit => <li>{fruit}</li>)}
    </ul>
  );
  }
  ```
  - In this example, the map() function iterates over each item in the fruits array. For each fruit, it creates a new `<li>` element containing the fruit's name. The newly created array of `<li>` elements is then displayed inside the `<ul>` parent tags.
  - However, when rendering lists in React, it is important not to forget the key prop to each element in the list. The key must always be unique and it helps React identify which items have changed, been added, or been removed, which is essential for efficient rendering and updating the list. Let's modify our example to include keys:
  ```
  function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={`${fruit}-${index}`}>{fruit}</li>
      ))}
    </ul>
  );
  }
  ```
  - In this refactored example, we are creating a unique key for each list item by concatenating the fruit name with its index. This ensures that each list item has a distinct key, which helps React efficiently manage and update the list when items are added, removed, or reordered.
  - React's also allows you to render more complex structures. For instance, you might have an array of objects representing users, each with multiple properties that you want to display:
  ```
  function UserList() {
  const users = [
    { id: "user-001-employee", name: "Alice", email: "alice@example.com" },
    { id: "user-002-employee", name: "Bob", email: "bob@example.com" },
    { id: "user-003-employee", name: "John", email: "john@example.com" },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
  }
  ```
  - In this example, we're creating a more complex JSX structure for each user, displaying both their name and email. We're using the user's id as the key, which is a good practice.
  - In conclusion, rendering lists in React involves converting arrays of data into JSX elements, typically using the map() function.
- In React, inline styles are used to apply CSS styles directly to React elements within your JSX code instead of defining them in separate CSS files.

  - React's approach to inline styles involves using JavaScript objects to define styles, rather than traditional CSS strings. Here is an example of how you can use inline styles for a Button component:

  ```
  function Button({ buttonText }) {
  const defaultStyles = {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return <button style={defaultStyles}>{buttonText}</button>;
  }
  ```

  - In this example, we define a style object called defaultStyles. We then apply these styles to a button element using the style attribute. React takes care of applying these styles to the element when it renders.
  - A great advantage of inline styles in React is that they support dynamic styling based on a component state or props. For example:

  ```
  function DynamicButton({ isActive }) {
  const buttonStyles = {
    backgroundColor: isActive ? "green" : "red",
    color: "white",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={buttonStyles}>Login</button>;
  }
  ```

  - In this example, the button's background color changes based on the isActive prop. This kind of dynamic styling can be powerful for creating interactive and responsive user interfaces.
  - In summary, inline styles in React provide a powerful way to apply and manipulate styles directly within your components. They use JavaScript objects instead of CSS strings, require camelCased property names, and can easily incorporate dynamic values. They're an essential tool in a React developer's toolkit, especially for creating highly customized and interactive user interfaces.

### Notes 2

- There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. A stateless component as one that can receive data and render it, but does not manage or track changes to that data.

  - The other way to define a React component is with the ES6 `class` syntax. In the following example, `Kitten` extends `React.Component`:

  ```
  class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
  }
  ```

- The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.

  ```
  const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }

  Items.defaultProps = {
  quantity: 0
  }

  class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10} />
    { /* Change code above this line */ }
  }
  };

  ```

- React provides useful type-checking features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set `propTypes` on your component to require the data to be of type `array`. This will throw a useful warning when the data is of any other type.

  - It's considered a best practice to set propTypes when you know the type of a prop ahead of time. You can define a propTypes property for a component in the same way you defined defaultProps. Doing this will check that props of a given key are present with a given type. Here's an example to require the type function for a prop called handleClick:

  ```
    MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
  ```

  - Example code:

  ```
  const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };

  Items.propTypes = {
  quantity: PropTypes.number.isRequired
  }
  ```

  - **Note**: As of React v15.5.0, PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';

- The ES6 class component uses a slightly different convention to access props.

  - Anytime you refer to a class component within itself, you use the `this` keyword. To access props within a class component, you preface the code that you use to access it with `this`. For example, if an ES6 class component has a prop called `data`, you write `{this.props.data}` in JSX.

- _A **stateless functional component** is any function you write which accepts props and returns JSX. A **stateless component**, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge). Finally, a **stateful component** is a class component that does maintain its own internal state._

  - Stateful components referred to simply as components or React components
  - A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

- One of the most important topics in React is state. State consists of any data your application needs to know about, that can change over time.
  - You create state in a React component by declaring a state property on the component class in its constructor. This initializes the component with state when it is created. The state property must be set to a JavaScript object. Declaring it looks like this: `this.state = {}`
  - You have access to the state object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The state object can be as complex or as simple as you need it to be. Note that you must create a class component by extending React.Component in order to create state like this.
  - Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in `state` in its `render()` method. You can access the data with `this.state`.
  - If you want to access a state value within the `return` of the render method, you have to enclose the value in curly braces.
- `state` is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.
- **Note that** if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.
  ```
  class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
          <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
  };
  ```
  - There is another way to access `state` in a component. In the `render()` method, before the `return` statement, you can write JavaScript directly. For example, you could declare functions, access data from `state` or `props`, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the `return` statement.
  ```
  class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */}
        <h1>{name}</h1>
        { /* Change code above this line */}
      </div>
    );
  }
  };
  ```
- React provides a method for updating component `state` called `setState`. You call the `setState` method within your component class like so: `this.setState()`, passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. For instance, if we were storing a `username` in state and wanted to update it, it would look like this:

  ```
  this.setState({
  username: 'Lewis'
  });
  ```

  - React expects you to never modify `state` directly, instead always use `this.setState()` when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the `setState` method can be asynchronous. There is an alternative syntax for the `setState` method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! **_[Read this React article for further details on how state works in React.](https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/)_**

  ```
  import React from "react";

  class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    // Change code below this line
    // Bind the method to this context
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  // Define the toggle method
  toggleVisibility() {
    this.setState((state) => ({ visibility: !state.visibility }));
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
  }

  export default MyComponent;
  ```

- You can design a more complex stateful component by combining the concepts covered so far. These include initializing state, writing methods that set state, and assigning click handlers to trigger these methods.
- Your application may have more complex interactions between `state` and the rendered UI. For example, form control elements for text input, such as `input` and `textarea`, maintain their own state in the DOM as the user types. With React, you can move this mutable state into a React component's `state`. The user's input becomes part of the application `state`, so React controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form.
  - This applies to other form elements as well, including the regular HTML `form` element.

### More on Props

- A common pattern is to have a stateful component containing the `state` important to your app, that then renders child components. You want these components to have access to some pieces of that `state`, which are passed in as props.
  - For example, maybe you have an App component that renders a Navbar, among other components. In your App, you have state that contains a lot of user information, but the Navbar only needs access to the user's username so it can display it. You pass that piece of state to the Navbar component as a prop.
- This pattern illustrates some important paradigms in React.
  - The first is **unidirectional data flow**. State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need.
  - The second is that complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state.
  - It begins to create a separation where state management is handled in one part of code and UI rendering in another.
  - This principle of separating state logic from UI logic is one of React's key principles. When it's used correctly, it makes the design of complex, stateful applications much easier to manage.
- You can pass `state` as props to child components, but you're not limited to passing data.
  - You can also pass handler functions or any method that's defined on a React component to a child component. This is how you allow child components to interact with their parent components.
  - You pass methods to a child just like a regular prop. It's assigned a name and you have access to that method name under `this.props` in the child component.

### Lifecycle Methods

- React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component.
  - React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component.
  - This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods:
  ```
  componentWillMount()
  componentDidMount()
  shouldComponentUpdate()
  componentDidUpdate()
  componentWillUnmount()
  ```
  - Note: The componentWillMount Lifecycle method will be deprecated in a future version of 16.X and removed in version 17. Learn more in this [article](https://www.freecodecamp.org/news/how-to-safely-use-reacts-life-cycles-with-fiber-s-async-rendering-fd4469ebbd8f/)
  - Initialization: Use the constructor or `componentDidMount` for initialization tasks.
  - Rendering Control: Use `shouldComponentUpdate` to optimize performance.
  - Side-Effects: Use `componentDidMount` and `componentDidUpdate` for handling side-effects.
  - Cleanup: Use `componentWillUnmount` for cleanup tasks.
- Most web developers, at some point, need to call an API endpoint to retrieve data. If you're working with React, it's important to know where to perform this action.
  - The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount().
  - This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component.
  - When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.
- The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality.
  - React provides a synthetic event system which wraps the native event system present in browsers. This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers.
  - You've already been using some of these synthetic event handlers such as `onClick()`.
  - React's synthetic event system is great to use for most interactions you'll manage on DOM elements. However, if you want to attach an event handler to the document or window objects, you have to do this directly.
- React provides a lifecycle method you can call when child components receive new `state` or `props`, and declare specifically if the components should update or not. The method is `shouldComponentUpdate()`, and it takes `nextProps` and `nextState` as parameters.
  - This method is a useful way to optimize performance. For example, the default behavior is that your component re-renders when it receives new `props`, even if the `props` haven't changed. You can use `shouldComponentUpdate()` to prevent this by comparing the `props`.
  - The method must return a `boolean` value that tells React whether or not to update the component. You can compare the current props (`this.props`) to the next props (`nextProps`) to determine if you need to update or not, and return `true` or `false` accordingly.

### Advanced JavaScript in React Render Method

- You can also write JavaScript directly in your render methods, before the return statement, without inserting it inside of curly braces. This is because it is not yet within the JSX code. When you want to use a variable later in the JSX code inside the return statement, you place the variable name inside curly braces.
- Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition. When the condition is `true`, one view renders. When it's `false`, it's a different view. You can do this with a standard `if/else` statement in the `render()` method of a React component.
- The `if/else` statements worked in the last challenge, but there's a more concise way to achieve the same result. Imagine that you are tracking several conditions in a component and you want different elements to render depending on each of these conditions. If you write a lot of `else if` statements to return slightly different UIs, you may repeat code which leaves room for error. Instead, you can use the `&&` logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is `true`, and if it is, return some markup. Here's an example: `{condition && <p>markup</p>}`
  - If the condition is `true`, the markup will be returned. If the condition is `false`, the operation will immediately return `false` after evaluating the `condition` and return nothing. You can include these statements directly in your JSX and string multiple conditions together by writing `&&` after each one. This allows you to handle more complex conditional logic in your `render()` method without repeating a lot of code.
- Before moving on to dynamic rendering techniques, there's one last way to use built-in JavaScript conditionals to render what you want: **_the ternary operator_**.
  - The ternary operator is often utilized as a shortcut for `if/else` statements in JavaScript. They're not quite as robust as traditional `if/else` statements, but they are very popular among React developers.
  - One reason for this is because of how JSX is compiled, `if/else` statements can't be inserted directly into JSX code. You might have noticed this a couple challenges ago — when an `if/else` statement was required, it was always outside the `return` statement.
  - Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX. Recall that a ternary operator has three parts, but you can combine several ternary expressions together. Here's the basic syntax:
    `condition ? expressionIfTrue : expressionIfFalse;`
- Using props to conditionally render code is very common with React developers — that is, they use the value of a given prop to automatically make decisions about what to render.
- You can also render CSS conditionally based on the state of a React component. To do this, you check for a condition, and if that condition is met, you modify the styles object that's assigned to the JSX elements in the render method.
  - This paradigm is important to understand because it is a dramatic shift from the more traditional approach of applying styles by modifying DOM elements directly (which is very common with jQuery, for example).
  - In that approach, you must keep track of when elements change and also handle the actual manipulation directly. It can become difficult to keep track of changes, potentially making your UI unpredictable.
  - When you set a style object based on a condition, you describe how the UI should look as a function of the application's state. There is a clear flow of information that only moves in one direction. This is the preferred method when writing applications with React.
- Conditional rendering is useful, but you may need your components to render an unknown number of elements. Often in reactive programming, a programmer has no way to know what the state of an application is until runtime, because so much depends on a user's interaction with that program. Programmers need to write their code to correctly handle that unknown state ahead of time. Using `Array.map()` in React illustrates this concept.
  - For example, you create a simple "To Do List" app. As the programmer, you have no way of knowing how many items a user might have on their list. You need to set up your component to dynamically render the correct number of list elements long before someone using the program decides that today is laundry day.
  - When you create an array of elements, each one needs a key attribute set to a unique value. React uses these keys to keep track of which items are added, changed, or removed. This helps make the re-rendering process more efficient when the list is modified in any way.
  - **Note**: Keys only need to be unique between sibling elements, they don't need to be globally unique in your application.
- Another method related to map is filter, which filters the contents of an array based on a condition, then returns a new array. For example, if you have an array of users that all have a property online which can be set to true or false, you can filter only those users that are online by writing:

  ```
  let onlineUsers = users.filter(user => user.online);
  ```

- So far, you have been rendering React components on the client. Normally, this is what you will always do. However, there are some use cases where it makes sense to render a React component on the server. Since React is a JavaScript view library and you can run JavaScript on the server with Node, this is possible. In fact, React provides a `renderToString()` method you can use for this purpose.

  - There are two key reasons why rendering on the server may be used in a real world app. First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines.
  - Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.
  - The renderToString() method is provided on ReactDOMServer, which is available as a global object. The method takes one argument which is a React element.

  ```
  class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
  };

  // Change code below this line
    ReactDOMServer.renderToString(<App />);
    <!-- or -->
    const string = ReactDOMServer.renderToString(<App />);
  ```

## Redux

- As applications grow in size and scope, managing shared data becomes much more difficult. Redux is defined as a "predictable state container for JavaScript apps" that helps ensure your apps work predictably, and are easier to test.
  - While you can use Redux with any view library, we introduce Redux here before combining it with React in the next set of courses.
  - In this course, you'll learn the fundamentals of Redux stores, actions, reducers and middleware to manage data throughout your application.

### Notes

- Redux is a state management framework that can be used with a number of different web technologies, including React.
- In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux `store`.
- This is the first important principle to understand when learning Redux: **_the Redux store is the single source of truth when it comes to application state_**.
- This also means that any time any piece of your app wants to update state, it must do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.
- The Redux `store` is an object which holds and manages application `state`. There is a method called `createStore()` on the Redux object, which you use to create the Redux `store`. This method takes a `reducer` function as a required argument.
  The reducer function takes `state` as an argument and returns `state`.
- The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current `state` held in the Redux store object with the `getState()` method.
- Since Redux is a state management framework, updating state is one of its core tasks. In Redux, all state updates are triggered by dispatching actions. _An action is simply a JavaScript object that contains information about an action event that has occurred_.
- The Redux store receives these action objects, then updates its state accordingly. Sometimes a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data is optional, actions must carry a type property that specifies the '`type`' of action that occurred.
- Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred. Writing a Redux action is as simple as declaring an object with a type property.
  ```
  const action = {
  type: "LOGIN"
  }
  ```
- After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.
  ```
  const actionCreator = () => {
    return action
  }
  ```
- `dispatch` method is what you use to dispatch actions to the Redux store. Calling `store.dispatch()` and passing the value returned from an action creator sends an action back to the store.
- Recall that action creators return an object with a type property that specifies the type of action that has occurred. Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:
  ```
  store.dispatch(actionCreator());
  store.dispatch({ type: 'LOGIN' });
  ```
- After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a `reducer` function. Reducers in Redux are responsible for the state modifications that take place in response to actions. A `reducer` takes `state` and `action` as arguments, and it always returns a new state. It is important to see that this is the only role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.
- Another key principle in Redux is that `state` is read-only. In other words, the `reducer` function must always return a new copy of `state` and never modify state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions.
- You can tell the Redux store how to handle multiple action types. Say you are managing user authentication in your Redux store. You want to have a state representation for when users are logged in and when they are logged out. You represent this with a single state object with the property `authenticated`. You also need action creators that create actions corresponding to user login and user logout, along with the action objects themselves.
- A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used. **Note**: It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.
- Another method you have access to on the Redux `store` object is `store.subscribe()`. This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store. One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.
- When the state of your app begins to grow more complex, it may be tempting to divide state into multiple pieces. Instead, remember the first principle of Redux: **_all app state is held in a single state object in the store_**.
- Therefore, Redux provides **reducer composition** as a solution for a complex state model. **You define multiple reducers to handle different pieces of your application's state, then compose these reducers together into one root reducer.** The root reducer is then passed into the Redux `createStore()` method.
- In order to let us combine multiple reducers together, Redux provides the `combineReducers()` method. This method accepts an object as an argument in which you define properties which associate keys to specific reducer functions. The name you give to the keys will be used by Redux as the name for the associated piece of state.
- Typically, it is a good practice to create a reducer for each piece of application state when they are distinct or unique in some way. For example, in a note-taking app with user authentication, one reducer could handle authentication while another handles the text and notes that the user is submitting. For such an application, we might write the combineReducers() method like this:
  ```
  const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
  });
  ```
- Now, the key `notes` will contain all of the state associated with our notes and handled by our `notesReducer`. This is how multiple reducers can be composed to manage more complex application state. In this example, the state held in the Redux store would then be a single object containing `auth` and `notes` properties.
- By now you've learned how to dispatch actions to the Redux store, but so far these actions have not contained any information other than a `type`. You can also send specific data along with your actions. In fact, this is very common because actions usually originate from some user interaction and tend to carry some data with them. The Redux store often needs to know about this data.
- So far these challenges have avoided discussing asynchronous actions, but they are an unavoidable part of web development. At some point you'll need to call asynchronous endpoints in your Redux app, so how do you handle these types of requests? Redux provides middleware designed specifically for this purpose, called **Redux Thunk middleware**. Here's a brief description how to use this with Redux.
  - To include Redux Thunk middleware, you pass it as an argument to `Redux.applyMiddleware()`. This statement is then provided as a second optional parameter to the `createStore()` function.
  ```
  const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
  );
  ```
  - Then, to create an asynchronous action, you return a function in the action creator that takes `dispatch` as an argument. Within this function, you can dispatch actions and perform asynchronous requests.
  - In this example, an asynchronous request is simulated with a `setTimeout()` call. It's common to dispatch an action before initiating any asynchronous behavior so that your application state knows that some data is being requested (this state could display a loading icon, for instance). Then, once you receive the data, you dispatch another action which carries the data as a payload along with information that the action is completed.
  - Remember that you're passing dispatch as a parameter to this special action creator. This is what you'll use to dispatch your actions, you simply pass the action directly to dispatch and the middleware takes care of the rest.
  ```
  const handleAsync = () => {
  return function (dispatch) {
    // Dispatch request action here
    store.dispatch(requestingData());
    setTimeout(function () {
      let data = {
        users: ["Jeff", "William", "Alice"],
      };
      // Dispatch received data action here
      store.dispatch(receivedData(data));
    }, 2500);
  };
  };
  ```
- Now you've learned all the core principles of Redux! You've seen how to create actions and action creators, create a Redux store, dispatch your actions against the store, and design state updates with pure reducers. You've even seen how to manage complex state with reducer composition and handle asynchronous actions. These examples are simplistic, but these concepts are the core principles of Redux. If you understand them well, you're ready to start building your own Redux app. The next challenges cover some of the details regarding `state` immutability, but first, here's a review of everything you've learned so far.
- In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, but you'll have to fill in the details! Use the names that are provided and define `incAction` and `decAction` action creators, the `counterReducer()`, `INCREMENT` and `DECREMENT` action types, and finally the Redux `store`. Once you're finished you should be able to dispatch `INCREMENT` or `DECREMENT` actions to increment or decrement the state held in the `store`. Good luck building your first Redux app!
- These final challenges describe several methods of enforcing the key principle of state immutability in Redux. **_Immutable state means that you never modify state directly, instead, you return a new copy of state._**
- If you took a snapshot of the state of a Redux app over time, you would see something like `state 1`, `state 2`, `state 3`, `state 4`, `...` and so on where each state may be similar to the last, but each is a distinct piece of data. This immutability, in fact, is what provides such features as time-travel debugging that you may have heard about.
- Redux does not actively enforce state immutability in its store or reducers, that responsibility falls on the programmer. Fortunately, JavaScript (especially ES6) provides several useful tools you can use to enforce the immutability of your state, whether it is a `string`, `number`, `array`, or `object`. Note that strings and numbers are primitive values and are immutable by nature. In other words, 3 is always 3. You cannot change the value of the number 3. An `array` or `object`, however, is mutable. In practice, your state will probably consist of an `array` or `object`, as these are useful data structures for representing many types of information.
- One solution from ES6 to help enforce state immutability in Redux is the spread operator: .... The spread operator has a variety of applications, one of which is well-suited to the previous challenge of producing a new array from an existing array. This is relatively new, but commonly used syntax. For example, if you have an array myArray and write:
  ```
  let newArray = [...myArray];
  ```
- `newArray` is now a clone of `myArray`. Both arrays still exist separately in memory. If you perform a mutation like `newArray.push(5)`, `myArray` doesn't change. The `...` effectively spreads out the values in `myArray` into a new array. To clone an array but add additional values in the new array, you could write `[...myArray, 'new value']`. This would return a new array composed of the values in `myArray` and the string `new value` as the last value.
- The spread syntax can be used multiple times in array composition like this, but it's important to note that it only makes a shallow copy of the array. That is to say, it only provides immutable array operations for one-dimensional arrays.
- Time to practice removing items from an array. The spread operator can be used here as well. Other useful JavaScript methods include `slice()` and `concat()`.
- The last several challenges worked with arrays, but there are ways to help enforce state immutability when state is an `object`, too. A useful tool for handling objects is the `Object.assign()` utility.
- `Object.assign()` takes a target object and source objects and maps properties from the source objects to the target object. Any matching properties are overwritten by properties in the source objects. This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy. Here's an example:
  ```
  const newObject = Object.assign({}, obj1, obj2);
  ```
  This creates newObject as a new object, which contains the properties that currently exist in obj1 and obj2.

## React and Redux

- React and Redux are often mentioned together, and with good reason. The developer who created Redux was a React developer who wanted to make it easier to share data across different components.
- Now that you know how to manage the flow of shared data with Redux, it's time to combine that knowledge with React. In the React and Redux courses, you'll build a React component and learn how to manage state locally at the component level, and throughout the entire application with Redux.
- First, here's a review of some of the key principles of each technology. React is a view library that you provide with data, then it renders the view in an efficient, predictable way. Redux is a state management framework that you can use to simplify the management of your application's state.
- Typically, in a React Redux app, you create a single Redux store that manages the state of your entire app. Your React components subscribe to only the pieces of data in the store that are relevant to their role. Then, you dispatch actions directly from React components, which then trigger store updates.
- Although React components can manage their own state locally, when you have a complex app, it's generally better to keep the app state in a single location with Redux. There are exceptions when individual components may have local state specific only to them.
- Finally, because Redux is not designed to work with React out of the box, you need to use the `react-redux` package. It provides a way for you to pass Redux `state` and `dispatch` to your React components as `props`.
- In the last challenge, you created a Redux store to handle the messages array and created an action for adding new messages. The next step is to provide React access to the Redux store and the actions it needs to dispatch updates. React Redux provides its `react-redux` package to help accomplish these tasks.
- React Redux provides a small API with two key features: `Provider` and `connect`. The `Provider` is a wrapper component from React Redux that wraps your React app. This wrapper then allows you to access the Redux `store` and `dispatch` functions throughout your component tree. `Provider` takes two props, the Redux store and the child components of your app. Defining the `Provider` for an App component might look like this:
  ```
  <Provider store={store}>
  <App/>
  </Provider>
  ```
- The `Provider` component allows you to provide `state` and `dispatch` to your React components, but you must specify exactly what state and actions you want. This way, you make sure that each component only has access to the state it needs. You accomplish this by creating two functions: `mapStateToProps()` and `mapDispatchToProps()`.
- In these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch. Once these functions are in place, you'll see how to use the React Redux `connect` method to connect them to your components in another challenge.
- The `mapDispatchToProps()` function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store. It's similar in structure to the `mapStateToProps()` function you wrote in the last challenge. It's similar in structure to the `mapStateToProps()`.
- It returns an object that maps dispatch actions to property names, which become component `props`. However, instead of returning a piece of `state`, each property returns a function that calls `dispatch` with an action creator and any relevant action data. You have access to this dispatch because it's passed in to `mapDispatchToProps()` as a parameter when you define the function, just like you passed `state` to `mapStateToProps()`. Behind the scenes, React Redux is using Redux's `store.dispatch()` to conduct these dispatches with `mapDispatchToProps()`.
- For example, you have a `loginUser()` action creator that takes a `username` as an action payload. The object returned from `mapDispatchToProps()` for this action creator would look something like:
  ```
  {
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
  }
  ```
- Now that you've written both the `mapStateToProps()` and the `mapDispatchToProps()` functions, you can use them to map `state` and `dispatch` to the `props` of one of your React components.
- The `connect` method from React Redux can handle this task. This method takes two optional arguments, `mapStateToProps()` and `mapDispatchToProps()`. They are optional because you may have a component that only needs access to `state` but doesn't need to dispatch any actions, or vice versa.
- To use this method, pass in the functions as arguments, and immediately call the result with your component. This syntax is a little unusual and looks like:
  ```
  connect(mapStateToProps, mapDispatchToProps)(MyComponent)
  ```
  **Note**: If you want to omit one of the arguments to the connect method, you pass null in its place.
- Now that you understand how to use connect to connect React to Redux, you can apply what you've learned to your React component that handles messages. In the last lesson, the component you connected to Redux was named `Presentational`, and this wasn't arbitrary. This term generally refers to React components that are not directly connected to Redux. They are simply responsible for the presentation of UI and do this as a function of the props they receive. By contrast, container components are connected to Redux. These are typically responsible for dispatching actions to the store and often pass store state to child components as props.
- You're almost done! Recall that you wrote all the Redux code so that Redux could control the state management of your React messages app. Now that Redux is connected, you need to extract the state management out of the `Presentational` component and into Redux. Currently, you have Redux connected, but you are handling the state locally within the `Presentational` component.
