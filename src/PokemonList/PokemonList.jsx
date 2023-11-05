import { useState, useEffect } from "react";
import { Card } from "../Card/card";
import "./pokemonList.scss";
import { fetchPokemons } from "../api/fetchPokemons";

const PokemonListCreator = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const results = await fetchPokemons();
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
          name={pokemon.name}
          img={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
            index + 1
          ).padStart(3, "0")}.png`}
          alt={pokemon.name}
        />
      ))}
    </div>
  );
};

const PokemonList = () => {
  return <PokemonListCreator />;
};

export default PokemonList;
