import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import CardContainer from "./Components/Cards/CardContainer";
import { MoodBoard } from "./Components/MoodBoard/MoodBoard";
import { Footer } from "./Components/Footer/Footer";
import DisplayMessages from "./Components/Examples/React and Redux/DisplayMessages";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <DisplayMessages />
      <MoodBoard />
      <CardContainer />
      <Footer />
    </Provider>
  );
}

export default App;
