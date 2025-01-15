import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import CardContainer from "./CardContainer";
import { MoodBoard } from "./MoodBoard";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <MoodBoard />
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
