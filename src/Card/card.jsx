import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { fetchPokemon } from "../api/fetchPokemon";

export function Card({ img, alt, name }) {
  const navigateTo = useNavigate();

  function handleClick() {
    const pokemonName = name;

    async function getPokemon() {
      return fetchPokemon(pokemonName);
    }

    getPokemon()
      .then(({ data }) =>
        navigateTo(`/information/${pokemonName}`, {
          state: {
            img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
              data.id
            ).padStart(3, "0")}.png`,
            alt: pokemonName,
            title: pokemonName,
            exp: data.base_experience + "xp",
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
          },
        })
      )
      .catch((error) => console.error(error));
  }

  return (
    <div className="Card" onClick={handleClick}>
      <img className="CardImage" src={img} alt={alt} />
      <div className="CardNameContainer">
        <h3 className="CardName">{name}</h3>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
