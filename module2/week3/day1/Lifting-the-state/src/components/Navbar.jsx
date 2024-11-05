export const Navbar = ({ user }) => {
  return (
    <nav>
      {user.owner} is the owner of... {user.name}
    </nav>
  );
};
