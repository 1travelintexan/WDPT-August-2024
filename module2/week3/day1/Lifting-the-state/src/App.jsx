import "./App.css";
import { AddPetForm } from "./components/AddPetForm";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { useState } from "react";
function App() {
  const [userState, setUserState] = useState([
    {
      id: 1,
      name: "Ragny",
      age: 3,
      type: "Dog",
      owner: "Joshua",
    },
    { id: 2, name: "Buddy", age: 13, owner: "Joshua", type: "Dog" },
    { id: 3, name: "Babush", age: 8, owner: "Nado", type: "Cat" },
  ]);
  return (
    <>
      <Navbar user={userState} />
      <Profile currentUsers={userState} />
      <AddPetForm setUserState={setUserState} userState={userState} />
      <Footer />
    </>
  );
}

export default App;
