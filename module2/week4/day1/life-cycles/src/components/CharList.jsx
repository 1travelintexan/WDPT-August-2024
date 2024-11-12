import { Link } from "react-router-dom";
import { CharCard } from "./CharCard";

const CharList = ({ chars }) => {
  return (
    <>
      {chars &&
        chars.map((oneChar) => {
          return <CharCard key={oneChar.id} oneChar={oneChar} />;
        })}
    </>
  );
};
export default CharList;
