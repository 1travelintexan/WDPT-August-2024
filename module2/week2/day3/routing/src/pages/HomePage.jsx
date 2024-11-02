import { Link } from "react-router-dom";

export const HomePage = ({ userState }) => {
  return (
    <div>
      <h1>All Users:</h1>
      {userState &&
        userState.map((oneUser) => {
          return (
            <div key={oneUser.id}>
              <Link to={`/profile/${oneUser.id}/?name=pizzaPizza`}>
                {oneUser.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
};
