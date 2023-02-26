import { useState } from 'react';
import './App.css';

function  App() {
   // State
    const [value, setValue] = useState(1);

   // Event
   const increment = () => {
    setValue(value + 1);
   }

   // Render
   return (
    <>
      <h1>{value}</h1>
      <button onClick={increment}>Increment</button>
    </>
   )
}

export default App;
