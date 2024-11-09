import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { UpdateStudent } from "./pages/UpdateStudent";
import { useState } from "react";
import studentsData from "./assets/students.json";
function App() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<HomePage students={students} />} />
          <Route path="/students/:studentId" element={<StudentDetailsPage />} />
          <Route
            path="/student/update/:studentId"
            element={
              <UpdateStudent students={students} setStudents={setStudents} />
            }
          />
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
