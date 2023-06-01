import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import "./PokemonList.css";
import { fetchPokemon } from "../api/fetchPokemon";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const results = await fetchPokemon();
        setPokemonList(results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemonList();
  }, []);

  return (
    <div className="CardDisplay">
      {pokemonList.map((pokemon, index) => (
        <Card
          key={index}
          id={index}
          title={pokemon.name}
          img={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
            index + 1
          ).padStart(3, "0")}.png`}
          alt={pokemon.name}
        />
      ))}
    </div>
  );
};

export default PokemonList;
