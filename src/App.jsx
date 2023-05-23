import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./pokemonList";
import CardInformation from "./cardInformation";

export default function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PokemonList />} />
          <Route path="/information" element={<CardInformation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
