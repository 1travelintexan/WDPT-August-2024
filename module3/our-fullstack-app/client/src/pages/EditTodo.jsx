import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const { todoId } = useParams();

  const nav = useNavigate();
  //make a useEffect to go fetch all the details of the the todo from the DB
  useEffect(() => {
    async function getOneTodo() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/todo/one-todo/${todoId}`
        );
        console.log("here is the one todo on the front", data);
        setTitle(data.title);
        setDescription(data.description);
        setCompleted(data.completed);
      } catch (error) {
        console.log(error);
      }
    }
    getOneTodo();
  }, [todoId]);

  async function handleUpdateTodo(event) {
    event.preventDefault();
    const todoToUpdate = {
      title,
      description,
      completed,
    };
    try {
      const { data } = await axios.put(
        `http://localhost:5005/todo/update/${todoId}`,
        todoToUpdate
      );
      console.log("successful updating the todo", data);
      nav("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h3>Update Todo Page</h3>
      <form onSubmit={handleUpdateTodo}>
        <label>
          Todo Title:
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <div>
          <label>Todo Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Todo Completed:</label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              setCompleted(e.target.checked);
            }}
          />
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};
