import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const nav = useNavigate();
  const { authenticateUser } = useContext(AuthContext);
  async function handleLogin(e) {
    e.preventDefault();
    const userToLogin = {
      email,
      password,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5005/auth/login",
        userToLogin
      );
      console.log("successful login", data);
      //this sets the token into the local storage of the browser
      localStorage.setItem("authToken", data.authToken);
      //here
      await authenticateUser();
      nav("/profile");
    } catch (error) {
      console.log("here is the error", error);
      setError(error.response.data.message);
    }
  }

  return (
    <div>
      <h3>Login Page</h3>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};
