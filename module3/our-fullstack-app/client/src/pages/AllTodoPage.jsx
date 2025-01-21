import axios from "axios";
import { useEffect, useState } from "react";

export const AllTodoPage = () => {
  const [allTodos, setAllTodos] = useState([]);
  useEffect(() => {
    async function getTodos() {
      try {
        const { data } = await axios.get(
          "http://localhost:5005/todo/all-todos"
        );
        console.log("here are all the todos", data);
        setAllTodos(data);
      } catch (error) {
        console.log("there was a problem with todos", error);
      }
    }
    getTodos();
  }, []);

  return (
    <div>
      <h3>All Todos Page</h3>
      {allTodos.map((oneTodo) => {
        return (
          <div key={oneTodo._id} className="todo-card">
            <h5>Title: {oneTodo.title}</h5>
            <h5>Description: {oneTodo.description}</h5>
            <h5>Finished: {oneTodo.completed ? "✅" : "❌"}</h5>
          </div>
        );
      })}
    </div>
  );
};
