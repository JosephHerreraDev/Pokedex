import axios from "axios";

export const fetchPokemon = async (generation) => {
  try {
    return await axios.get(
      `https://pokeapi.co/api/v2/generation/${generation}`
    );
  } catch (error) {
    throw new Error("Failed to fetch Pokemon.");
  }
};
