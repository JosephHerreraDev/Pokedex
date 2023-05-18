import { Card } from "./card";
import './card.css';

export default function App() {

  return (
    <>
    <h1>Pokedex</h1>
    <div className="CardDisplay">
    {Array.from({ length: 9 }).map((_, index) => (
      <Card
        key={index}
        img="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        alt="Bulbasaur"
        title="Bulbasaur"
      />
    ))}
  </div>
</>

  )
}