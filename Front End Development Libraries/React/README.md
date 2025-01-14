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

