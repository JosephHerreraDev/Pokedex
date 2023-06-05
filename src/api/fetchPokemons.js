import axios from "axios";

export const fetchPokemons = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=9"
    );
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch Pokemon list.");
  }
};