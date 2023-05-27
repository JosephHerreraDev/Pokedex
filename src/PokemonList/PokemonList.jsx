import { useState } from "react";
import { Card } from "../Card/Card";
import "./PokemonList.css";
import axios from "axios";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=9")
    .then(function (response) {
      setPokemonList(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });

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
