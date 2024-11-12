import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CharList from "./components/CharList";
import { NotFound } from "./components/NotFound";
import { CharDetail } from "./components/CharDetail";

function App() {
  const [chars, setChars] = useState(null);

  //this happens only once, when the component first renders
  useEffect(() => {
    console.log("inside the app.jsx");
    //fetch with .then and .catch
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then((res) => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setChars(data.results);
    //   })
    //   .catch((err) => console.log(err));

    //**********fetch with async and await  ****************/
    async function getCharacters() {
      try {
        const responseFromFetch = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const actualData = await responseFromFetch.json();
        //finally all good and we have the data then we set the state
        setChars(actualData.results);
      } catch (error) {
        console.log(error);
      }
    }
    getCharacters();
  }, []);

  return (
    <>
      <h1>Life Cycles</h1>
      <Routes>
        <Route path="/" element={<CharList chars={chars} />} />
        <Route path="/one-character/:characterId" element={<CharDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
