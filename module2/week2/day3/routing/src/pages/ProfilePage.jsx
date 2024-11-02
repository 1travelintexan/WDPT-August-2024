import { useParams } from "react-router-dom";

export const ProfilePage = ({ userState }) => {
  const [queries] = useSearchParams();

  //useParams grabs all parameters from the URL
  const { userId } = useParams();
  //use the destructured id from the params to find one user with that id
  const foundUser = userState.find((user) => {
    if (user.id == userId) {
      return true;
    }
  });
  //log the user to make sure that you have the correct one
  console.log("found user", foundUser);

  return <div>{foundUser.name}'s ProfilePage</div>;
};
