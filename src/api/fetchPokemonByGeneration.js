import axios from "axios";

export const fetchPokemonByGeneration = async (generation) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/generation/${generation}`
    );
    return response.data; 
  } catch (error) {
    throw new Error("Failed to fetch Pokemon list.");
  }
};
