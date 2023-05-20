import { useState, useEffect } from "react";
import { Card } from "./card";

export function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=100")
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="CardDisplay">
      {pokemonList.map((pokemon, index) => (
        <Card
          key={index}
          title={pokemon.name}
          img={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(index + 1).padStart(3, '0')}.png`}
          alt={pokemon.name}
        />
      ))}
    </div>
  );
}