import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";
function App() {
  const users = [
    { id: 1, name: "Ragnar", age: 3 },
    { id: 2, name: "Joshua", age: 38 },
    { id: 3, name: "Babush", age: 8 },
  ];
  const [userState, setUsersState] = useState(users);
  return (
    <>
      <main>
        <Navbar />
        <h1>Routing Day!</h1>
        {/* wrap all your singluar route with the Routes tags */}
        <Routes>
          <Route path="/" element={<HomePage userState={userState} />} />
          <Route path="/about" element={<AboutPage />} />
          {/* this is a dynamic route  */}
          <Route
            path="/profile/:userId"
            element={<ProfilePage userState={userState} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
