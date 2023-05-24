import { useParams, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import "./card.css";

const CardInformation = () => {
  const { name } = useParams();
  const { state } = useLocation();

  const { img, alt, title, exp, hp, attack, defense, specialAttack } = state;

  alert(name);

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
  exp: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  specialAttack: PropTypes.number.isRequired,
};

export default CardInformation;