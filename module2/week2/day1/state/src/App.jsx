import { useState } from "react";
import "./App.css";
import Pet from "./components/Pet";

function App() {
  const [count, setCount] = useState(0);
  const [pet, setPet] = useState("Ragnar");
  const [user, setUser] = useState(
    { name: "Ragnar", isAdmin: false, email: "kfjaldkfj.com" },
    { name: "Babush", isAdmin: true, email: "kfjaldkfj.com" },
    { name: "Buddy", isAdmin: false, email: "kfjaldkfj.com" }
  );
  const [pizzas, setPizzas] = useState([
    { id: 1, title: "pep", isGood: true, isAdmin: false },
    { id: 2, title: "pinn", isGood: false, isAdmin: true },
    { id: 3, title: "cheese", isGood: true, isAdmin: false },
    { id: 4, title: "veg", isGood: false, isAdmin: true },
  ]);

  function handleAddCount() {
    setCount((prev) => {
      console.log(prev + 1);
      return prev + 1;
    });
    setPet("Babush");
    setUser({ name: "Joshua", age: 38 });
  }

  // you can use standard js is this area
  //   if (pizzas) {
  //     return <h1> Pizzas</h1>;
  //   } else {
  //     return <h1>No Pizzas</h1>;
  //   }
  // }

  return (
    <>
      <h1>UseState Day</h1>

      <h2>Count: {count}</h2>
      <button onClick={handleAddCount}>add to count</button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        subract from count
      </button>
      <Pet onePet={pet} />
      <h3>The user is: {user.name}</h3>
      <h3>Pizza types:</h3>
      {pizzas.map((onePizzaType) => (
        <div key={onePizzaType.id}>
          <h3>
            {onePizzaType.title} {onePizzaType.isgood ? "😋" : "🤐"}
          </h3>
          {onePizzaType.isAdmin && (
            <div>
              <button>Do Something Special</button> <h6>testing</h6>
            </div>
          )}
        </div>
      ))}

      {pizzas
        .filter((onePizza) => {
          if (onePizza.isGood) {
            return true;
          }
        })
        .map((pizza) => (
          <h2 key={pizza.id}>{pizza.title}</h2>
        ))}
    </>
  );
}

export default App;
