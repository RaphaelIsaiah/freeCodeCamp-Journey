// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Navbar } from "./Navbar";
import { Footer, FruitList, UserList, Button, DynamicButton } from "./Footer";
import Greeting from "./Greeting";
import DeveloperCard from "./DeveloperCard";

function App() {
  const developerObj = {
    name: "Alice",
    age: 30,
    country: "USA",
  };

  return (
    <>
      <Navbar />
      <Greeting {...developerObj} isLoggedIn={true} />
      <DeveloperCard {...developerObj} />
      <DynamicButton isActive={true} />
      <Button buttonText="Submit" />
      <FruitList />
      <UserList />
      <Footer />
    </>
  );
}

export default App;
