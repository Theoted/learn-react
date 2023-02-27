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

function App() {
  const [fruits, setFruits] = useState([
    {id: 1, name: "Banane"},
    {id: 2, name: "Pomme"},
    {id: 3, name: "Cerise"}
  ]);

  const removeFruit = (id) => {
    const fruitsCopy = [...fruits];
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    setFruits(fruitsCopyUpdated);
  }

  return (
    <>
      <h1>Fruit list</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} <button onClick={() => removeFruit(fruit.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;
