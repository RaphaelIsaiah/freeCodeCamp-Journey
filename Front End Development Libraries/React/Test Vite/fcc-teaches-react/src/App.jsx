import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import CardContainer from "./Components/Cards/CardContainer";
import { MoodBoard } from "./Components/MoodBoard/MoodBoard";
import { Footer } from "./Components/Footer/Footer";
import MyComponent from "./Components/Examples/Sample";

function App() {
  return (
    <>
      <Navbar />
      <MoodBoard />
      <CardContainer />
      <MyComponent />
      <Footer />
    </>
  );
}

export default App;
