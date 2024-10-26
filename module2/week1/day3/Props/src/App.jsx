import "./App.css";
import BodyComponent from "./components/BodyComponent";
// this is a named export
import { Footer } from "./components/Footer";
// this is a default export
import Navbar from "./components/Navbar";

function App() {
  // you can do straight JS here
  const myDog = "Ragnar";
  const world = "Everybody";
  return (
    <>
      <Navbar myDog={myDog} test="this is fun" cristysDog="Coconut" />

      <BodyComponent world={world} />
      <Footer />
    </>
  );
}

export default App;
