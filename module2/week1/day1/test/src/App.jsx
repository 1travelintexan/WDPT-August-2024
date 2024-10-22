import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      {/* call the component Navbar */}
      <Navbar /> {/*Navbar()*/}
      <h1>Hello World</h1>
      <Footer />
    </div>
  );
}
