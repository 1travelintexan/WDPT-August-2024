import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharDetail = () => {
  const [oneChar, setOneChar] = useState({});
  const { characterId } = useParams();
  //   console.log(characterId);
  useEffect(() => {
    async function getOneChar() {
      console.log("inside the detail page");
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        const data = await response.json();
        console.log("one character", data);
        setOneChar(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneChar();
    //this is less common but when the component is destroy or unmounted then you return a function
    return () => {
      console.log("unmounted");
    };
  }, [characterId]);

  return (
    <div className="char-card">
      <img src={oneChar.image} alt="rick and morty char" />
      <h2>Name: {oneChar.name}</h2>
      <h2>Species: {oneChar.species}</h2>
      <h2>Gender: {oneChar.gender}</h2>
      <h2>Alive: {oneChar.status}</h2>
    </div>
  );
};
