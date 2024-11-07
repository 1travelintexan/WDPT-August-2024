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
  //function that is called when the form is submitted
  function handleAddPet(event) {
    //you receive the event from the browser as an argument (always)
    //this stops the form from reloading by default
    event.preventDefault();
    //construct a new pet that is the same structure as the others
    //the values of the new pet should be the states from above
    const newPet = {
      id: userState.length + 1,
      name: petName,
      age: petAge,
      owner: petOwner,
      type: type,
    };
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
