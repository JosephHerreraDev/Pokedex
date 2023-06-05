import { Route, Routes } from "react-router-dom";
import PokemonList from "./PokemonList/PokemonList";
import CardInformation from "./CardInformation/CardInformation";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigateTo = useNavigate();
  function navigateHome() {
    navigateTo(`/`);
  }
  return (
    <>
      <h1 onClick={navigateHome}>Pokedex</h1>
      <Routes>
        <Route exact path="/" element={<PokemonList />} />
        <Route
          path="/information/:name"
          element={
            <CardInformation
              title=""
              img=""
              alt=""
              name=""
              exp={0}
              hp={0}
              attack={0}
              defense={0}
              specialAttack={0}
            />
          }
        />
      </Routes>
    </>
  );
}
