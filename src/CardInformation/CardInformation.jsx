import PropTypes from "prop-types";
import { fetchPokemon } from "../api/fetchPokemon";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./cardInformation.scss";

const CardInformation = () => {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetchPokemon(name)
      .then(({ data }) => {
        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
          data.id
        ).padStart(3, "0")}.png`;
        const alt = name;
        const title = name;
        const exp = data.base_experience + "xp";
        const hp = data.stats[0].base_stat;
        const attack = data.stats[1].base_stat;
        const defense = data.stats[2].base_stat;
        const specialAttack = data.stats[3].base_stat;

        setPokemonData({
          img,
          alt,
          title,
          exp,
          hp,
          attack,
          defense,
          specialAttack,
        });
      })
      .catch((error) => console.error(error));
  }, [name]);

  if (!pokemonData) {
    return null;
  }

  const { img, alt, title, exp, hp, attack, defense, specialAttack } =
    pokemonData;

  return (
    <div className="CardInformation">
      <img className="CardImage" src={img} alt={alt} />
      <section className="CardText">
        <div className="CardInfoNameContainer">
          <h3 className="CardInformationName">{title}</h3>
          <p>{hp}</p>
        </div>
        <section className="CardExperience">
          <p>{exp}</p>
        </section>
        <section className="Stats">
          <p>{attack}</p>
          <p>{specialAttack}</p>
          <p>{defense}</p>
          <p>Ataque</p>
          <p>Ataque Especial</p>
          <p>Defensa</p>
        </section>
      </section>
    </div>
  );
};

CardInformation.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  exp: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  specialAttack: PropTypes.number.isRequired,
};

export default CardInformation;
