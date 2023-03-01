export default function Fruit({ fruit, onClick }) {
    return (
        <li>
            {fruit.name} <button onClick={onClick}>X</button>
        </li>
    )
}