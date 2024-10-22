import "./App.css";
import { IronhackImage } from "./components/IronhackImage";
import { Navbar } from "./components/Navbar";

function App() {
  //this is just regular JS Land
  // const name = "Ragnar";

  //Inside the return is JSX which means you needs { }
  return (
    <>
      <Navbar />
      <IronhackImage />
      <div>
        <button className="my-btn">Download for Mac</button>
      </div>
    </>
  );
}

export default App;
