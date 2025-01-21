import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import axios from "axios";

const ProfilePage = () => {
  //testing the context for data
  const { user } = useContext(AuthContext);
  const [userTodos, setUserTodos] = useState([]);
  useEffect(() => {
    async function getTodos() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/todo/user-todos/${user._id}`
        );
        console.log("here are all the todos for one user", data);
        setUserTodos(data);
      } catch (error) {
        console.log("there was a problem with todos", error);
      }
    }
    getTodos();
  }, [user._id]);

  // console.log("here is the name from the context", user);
  return (
    <div>
      <h2>{user.username}'s ProfilePage</h2>
      {userTodos.length === 0 ? (
        <p>You don't have any todos</p>
      ) : (
        userTodos.map((oneTodo) => {
          return (
            <div key={oneTodo._id} className="todo-card">
              <h5>Title: {oneTodo.title}</h5>
              <h5>Description: {oneTodo.description}</h5>
              <h5>Finished: {oneTodo.completed ? "✅" : "❌"}</h5>
            </div>
          );
        })
      )}
    </div>
  );
};
export default ProfilePage;
