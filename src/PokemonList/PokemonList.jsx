import { useState, useEffect } from "react";
import { Card } from "../Card/card";
import { GenerationSelect } from "../GenerationSelect/GenerationSelect";
import "./PokemonList.scss";
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

  const handleSelectChange = (selectedOption) => {
    switch (selectedOption.value) {
      case "all":
        setPokemonList(pokemonList);
        break;
      case "first":
        setPokemonList(pokemonList.slice(0, 151));
        break;
      case "second":
        setPokemonList(pokemonList.slice(151, 251));
        break;
      case "third":
        setPokemonList(pokemonList.slice(251, 386));
        break;
      case "fourth":
        setPokemonList(pokemonList.slice(386, 493));
        break;
      case "fifth":
        setPokemonList(pokemonList.slice(493, 649));
        break;
      case "sixth":
        setPokemonList(pokemonList.slice(649, 721));
        break;
      case "seventh":
        setPokemonList(pokemonList.slice(721, 809));
        break;
      case "eighth":
        setPokemonList(pokemonList.slice(809, 898));
        break;
      case "ninth":
        setPokemonList(pokemonList.slice(898, 1000));
        break;
      default:
        setPokemonList(pokemonList);
        break;
    }
  };
  
  return (
    <>
      <GenerationSelect onSelectChange={handleSelectChange} />
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
    </>
  );
};

const PokemonList = () => {
  return <PokemonListCreator />;
};

export default PokemonList;
