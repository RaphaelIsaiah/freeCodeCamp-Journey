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
    -  React treats components with a capital letter as custom components, while elements with lowercase letters are considered built-in HTML elements. If the component name starts with a capital letter, React will treat it as a user-defined component and render it accordingly. This distinction helps React differentiate between native HTML tags and components that you create.
    - To use this Greeting component in our application, we would write something like this: `<Greeting />`