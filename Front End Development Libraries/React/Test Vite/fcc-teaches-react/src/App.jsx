// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Navbar } from "./Navbar";
import { Footer, FruitList, UserList, Button, DynamicButton } from "./Footer";
import Greeting from "./Greeting";
import DeveloperCard from "./DeveloperCard";
import { Card } from "./Card";

function App() {
  // const developerObj = {
  //   name: "Alice",
  //   age: 30,
  //   country: "USA",
  // };

  return (
    <>
      <Navbar />
      <div className="flex-container">
        <Card
          name="Mark"
          title="Frontend developer"
          bio="I like to work with different frontend technologies and play video games."
        />
        <Card
          name="Tiffany"
          title="Engineering manager"
          bio="I have worked in tech for 15 years and love to help people grow in this industry."
        />
        <Card
          name="Doug"
          title="Backend developer"
          bio="I have been a software developer for 20 years and I love working with Go and Rust."
        />
      </div>
      {/* <Greeting {...developerObj} isLoggedIn={true} />
      <DeveloperCard {...developerObj} />
      <DynamicButton isActive={true} />
      <Button buttonText="Submit" />
      <FruitList />
      <UserList /> */}
      <Footer />
    </>
  );
}

export default App;
