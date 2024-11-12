import { Link } from "react-router-dom";

export const CharCard = ({ oneChar }) => {
  return (
    <div key={oneChar.id} className="char-card">
      <img src={oneChar.image} alt="rick and morty char" />
      <Link to={`/one-character/${oneChar.id}`}>
        <h2>{oneChar.name}</h2>
      </Link>
    </div>
  );
};
