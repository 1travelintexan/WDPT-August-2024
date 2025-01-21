import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // console.log("here in the private route component");
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};
export default PrivateRoute;
