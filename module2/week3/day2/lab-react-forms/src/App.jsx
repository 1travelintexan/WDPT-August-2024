import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");
  const [grad, setGrad] = useState(false);

  //the function to add a student
  function handleAddStudent(event) {
    event.preventDefault();
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear: year,
      graduated: grad,
    };
    console.log("clicked", newStudent);
    setStudents([newStudent, ...students]);
    setEmail("");
    setFullName("");
    setGrad(false);
    setImage("");
    setPhone("");
    setProgram("");
    setYear("");
  }
  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              //this links the state to the value of the input
              value={fullName}
              //when we type, change the value of the state
              onChange={(event) => {
                setFullName(event.target.value);
                console.log("event target", event.target.value);
              }}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              //this links the state to the value of the input
              value={image}
              //when we type, change the value of the state
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              //this links the state to the value of the input
              value={phone}
              //when we type, change the value of the state
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              //this links the state to the value of the input
              value={email}
              //when we type, change the value of the state
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program" //this links the state to the value of the input
              value={program}
              //when we type, change the value of the state
              onChange={(event) => {
                setProgram(event.target.value);
              }}
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              //this links the state to the value of the input
              value={year}
              //when we type, change the value of the state
              onChange={(event) => {
                setYear(event.target.value);
              }}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox" //this links the state to the value of the input
              checked={grad}
              //when we type, change the value of the state
              onChange={(event) => {
                setGrad(event.target.checked);
                console.log(event.target);
              }}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
