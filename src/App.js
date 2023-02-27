import { useState } from 'react';
import './App.css';

// My first component

// function  App() {
//    // State
//     const [value, setValue] = useState(1);

//    // Event
//    const increment = () => {
//     setValue(value + 1);
//    }

//    // Render
//    return (
//     <>
//       <h1>{value}</h1>
//       <button onClick={increment}>Increment</button>
//     </>
//    )
// }

// List management
// Form Management

function App() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Banane" },
    { id: 2, name: "Pomme" },
    { id: 3, name: "Cerise" }
  ]);

  const [newFruit, setNewFruit] = useState("");

  const handleClick = (id) => {
    const fruitsCopy = [...fruits];
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    setFruits(fruitsCopyUpdated);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const fruitsCopy = [...fruits];

    const id = new Date().getTime();
    const name = newFruit;

    fruitsCopy.push({ id, name });

    setFruits(fruitsCopy);
    setNewFruit("");
  }

  const handleChange = (event) => {
    setNewFruit(event.target.value);
  }

  return (
    <>
      <h1>Fruit list</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} <button onClick={() => handleClick(fruit.id)}>X</button>
          </li>
        ))}
      </ul>
      <h2>Add Fruit</h2>
      <form action="post" onSubmit={handleSubmit}>
        <input type="text" value={newFruit} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App;
