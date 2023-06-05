import axios from "axios";

export const fetchPokemon = async (pokemonName) => {
  try {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  } catch (error) {
    throw new Error("Failed to fetch Pokemon.");
  }
};
