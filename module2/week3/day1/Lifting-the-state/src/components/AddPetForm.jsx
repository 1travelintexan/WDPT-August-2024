import { useState } from "react";

export const AddPetForm = ({ setUserState, userState }) => {
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState(0);
  const [petOwner, setPetOwner] = useState("");
  const [type, setType] = useState("");
  function handleChange(event) {
    if (event.target.name === "pet-name") {
      setPetName(event.target.value);
    } else if (event.target.name === "pet-owner") {
      setPetOwner(event.target.value);
    }
  }
  function handleAddPet(event) {
    //this stops the form from reloading by default
    event.preventDefault();
    const newPet = {
      id: userState.length + 1,
      name: petName,
      age: petAge,
      owner: petOwner,
      type: type,
    };
    console.log("pet was added", newPet, type);
    //typical solution to add a new Pet
    // setUserState([...userState, newPet]);
    // Franzi solution
    setUserState((prev) => [...prev, newPet]);
    //standard practice to reset all the states
    setPetAge(0);
    setPetName("");
    setPetOwner("");
    setType("");
  }

  return (
    <div>
      <h2>Add Pet Form:</h2>
      {/* onSubmit can be put on forms to submit them when filled out  */}
      <form onSubmit={handleAddPet}>
        <label>
          Pet Name:
          <input
            type="text"
            value={petName}
            name="pet-name"
            onChange={handleChange}
            placeholder="name"
          />
        </label>
        <label>
          Pet owner:
          <input
            type="text"
            value={petOwner}
            name="pet-owner"
            onChange={handleChange}
          />
        </label>
        <label>
          Pet age:
          <input
            type="number"
            value={petAge}
            onChange={(event) => {
              setPetAge(event.target.value);
            }}
          />
        </label>
        <label>
          Pet type:
          <select onChange={(e) => setType(e.target.value)} value={type}>
            <option value="Dog">Doggo</option>
            <option value="Cat">Meow</option>
            <option value="Bird">Birdy</option>
          </select>
        </label>
        <button>Add Pet</button>
      </form>
    </div>
  );
};
