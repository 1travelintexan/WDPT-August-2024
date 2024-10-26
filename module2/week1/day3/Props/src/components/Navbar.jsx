function Navbar({ myDog, cristysDog }) {
  console.log("here are the props,");
  //   destructuring an object
  //   const { myDog, cristysDog } = props;
  return (
    <nav>
      <h1>
        {myDog} and {cristysDog}s Navbar
      </h1>
    </nav>
  );
}

export default Navbar;
