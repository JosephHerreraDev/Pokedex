import "./PokemonList.scss";
import { useState, useEffect } from "react";
import { Card } from "../Card/card";
import { GenerationSelect } from "../GenerationSelect/GenerationSelect";
import { fetchPokemons } from "../api/fetchPokemons";
import { fetchPokemonByGeneration } from "../api/fetchPokemonByGeneration";

const PokemonListCreator = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedGeneration, setSelectedGeneration] = useState();

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

  useEffect(() => {
    async function fetchGenerationList() {
      try {
        const results = await fetchPokemonByGeneration(selectedGeneration);
        alert(results);
        setPokemonList(results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGenerationList();
  }, [selectedGeneration]);

  const handleSelectChange = (selectedOption) => {
    setSelectedGeneration(selectedOption.value);
  };

  return (
    <>
      <GenerationSelect onSelectChange={handleSelectChange} />
      <div className="CardDisplay">
        {pokemonList.map((pokemon, id) => (
          <Card
            key={id}
            id={id}
            name={pokemon.name}
            img={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
              id + 1
            ).padStart(3, "0")}.png`}
            alt={pokemon.generation}
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
