import { useState } from "react";

export default function FruitForm({ handleAdd }) {
    const [newFruit, setNewFruit] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = new Date().getTime();
        const name = newFruit;

        const fruitToAdd = { id, name };

        handleAdd(fruitToAdd);
        setNewFruit("");
    }

    const handleChange = (event) => {
        setNewFruit(event.target.value);
    }

    return (
        <form action="post" onSubmit={handleSubmit}>
            <input type="text" value={newFruit} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}