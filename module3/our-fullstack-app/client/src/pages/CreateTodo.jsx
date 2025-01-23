import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);
  const nav = useNavigate();
  async function handleCreateTodo(event) {
    event.preventDefault();
    const todoToCreate = {
      title,
      description,
      completed: false,
      owner: user._id,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5005/todo/create",
        todoToCreate
      );
      console.log("successful creating a todo", data);
      nav("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h3>Create Todo Page</h3>
      <form onSubmit={handleCreateTodo}>
        <label>Todo Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Todo Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button>Create</button>
      </form>
    </div>
  );
};
