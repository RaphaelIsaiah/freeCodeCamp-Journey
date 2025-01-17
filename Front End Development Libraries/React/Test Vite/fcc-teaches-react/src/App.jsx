import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import CardContainer from "./Components/Cards/CardContainer";
import { MoodBoard } from "./Components/MoodBoard/MoodBoard";
import { Footer } from "./Components/Footer/Footer";
import MyForm from "./Components/Examples/Sample";

function App() {
  return (
    <>
      <Navbar />
      <MyForm />
      <MoodBoard />
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
