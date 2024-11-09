import { useState } from "react";
import { useParams } from "react-router-dom";

export const UpdateStudent = ({ students, setStudents }) => {
  const params = useParams();
  const studentToUpdate = students.find(
    (student) => student._id === params.studentId
  );
  const [firstName, setFirstName] = useState(studentToUpdate.firstName);
  const [lastName, setLastName] = useState(studentToUpdate.lastName);
  const [email, setEmail] = useState(studentToUpdate.email);

  function handleUpdate(event) {
    event.preventDefault();
    const updatedStudents = students.map((oneStudent) => {
      if (oneStudent._id == params.studentId) {
        oneStudent.firstName = firstName;
        oneStudent.lastName = lastName;
        oneStudent.email = email;
      }
      return oneStudent;
    });
    console.log("updated", updatedStudents);
    setStudents(updatedStudents);
  }
  return (
    <div>
      <h1>Update Student Page</h1>
      <form onSubmit={handleUpdate}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};
