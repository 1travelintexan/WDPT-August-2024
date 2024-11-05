export const Profile = ({ currentUsers }) => {
  return (
    <div className="profile">
      <h2>All the Pets:</h2>
      {currentUsers &&
        currentUsers.map((oneUser) => {
          return (
            <div key={oneUser.id} className="pet-card">
              <h3>Name: {oneUser.name}</h3>
              <h3>Age: {oneUser.age}</h3>
              <h3>Type: {oneUser.type}</h3>
              <h3>Owner: {oneUser.owner}</h3>
            </div>
          );
        })}
    </div>
  );
};
