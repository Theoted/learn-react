import { useState } from 'react';
import Fruit from './components/Fruit'
import FruitForm from './components/FruitForm'
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



  const removeFruit = (id) => {
    const fruitsCopy = [...fruits];
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    setFruits(fruitsCopyUpdated);
  }

  const handleAdd = (fruitToAdd) => {
    const fruitsCopy = [...fruits];
    fruitsCopy.push(fruitToAdd);
    setFruits(fruitsCopy);
  }

  const displayFavouritFruit = (fruitName) => {
    alert(`Love ${fruitName} !`);
  }
  
  return (
    <>
      <h1>Fruit list</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.id}
            fruit={fruit}
            onClick={() => displayFavouritFruit(fruit.name)} />
        ))}
      </ul>
      <h2>Add Fruit</h2>
      <FruitForm handleAdd={handleAdd} />
    </>
  )
}

export default App;
