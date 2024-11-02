import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="links">
        <NavLink to="https://google.com">to Google</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <h1>Navbar</h1>
      <p>Signup</p>
    </nav>
  );
};
