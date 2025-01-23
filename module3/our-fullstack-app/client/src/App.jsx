import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { AllTodoPage } from "./pages/AllTodoPage";
import { CreateTodo } from "./pages/CreateTodo";
import { EditTodo } from "./pages/EditTodo";
function App() {
  return (
    <>
      <Navbar />
      <h1>Our Full Stack App</h1>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/todos"
          element={
            <PrivateRoute>
              <AllTodoPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-todo"
          element={
            <PrivateRoute>
              <CreateTodo />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-todo/:todoId"
          element={
            <PrivateRoute>
              <EditTodo />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
