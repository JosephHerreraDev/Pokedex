import { useState, useEffect } from "react";
import { Card } from "../card";
import { useNavigate } from "react-router-dom";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=100")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (event) => {
    const pokemonName = event.target.alt;

    navigateTo(`/pokemon/${pokemonName}`, {
      state: {
        img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
          pokemonList.indexOf(pokemonName) + 1
        ).padStart(3, "0")}.png`,
        alt: event.target.name,
        title: event.target.name,
        exp: event.target.base_experience,
        hp: 50,
        attack: 50,
        defense: 50,
        specialAttack: 50,
        // hp: event.target.stats[0].base_stat,
        // attack: event.target.stats[1].base_stat,
        // defense: event.target.stats[2].base_stat,
        // specialAttack: event.target.stats[3].base_stat,
      },
    });
  };

  return (
    <div className="CardDisplay" onClick={handleClick}>
      {pokemonList.map((pokemon, index) => (
        <Card
          key={index}
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
