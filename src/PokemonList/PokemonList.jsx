import "./PokemonList.scss";
import { useState, useEffect } from "react";
import { Card } from "../Card/card";
import {GenerationSelect} from "../GenerationSelect/GenerationSelect"
import { fetchPokemonByGeneration } from "../api/fetchPokemonByGeneration";
import { fetchPokemons } from "../api/fetchPokemons";

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
        const generationData = await fetchPokemonByGeneration(selectedGeneration);
        if (generationData && generationData.pokemon_species) {
          setPokemonList(generationData.pokemon_species);
        } else {
          console.error('Not valid generation data:', generationData);
        }
      } catch (error) {
        console.error(error);
      }
    }
      
    fetchGenerationList();
  }, [selectedGeneration]);

  const handleSelectChange = (selectedOption) => {
    setSelectedGeneration(selectedOption.value);
  };

  const idList = pokemonList.map(pokemon => {
    const parts = pokemon.url.split('/');
    parts.pop();
    return parts.pop();
  });

  let x = 0;

  return (
    <>
      <GenerationSelect onSelectChange={handleSelectChange}/>
      
      <div className="CardDisplay">
      {pokemonList.map((pokemon, id) => (
        <Card
          key={idList[id]}
          id={idList[id]}
          name={pokemon.name}
          img={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
            idList[id]
          ).padStart(3, "0")}.png`}
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
