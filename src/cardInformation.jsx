import PropTypes from "prop-types";
import "./card.css";

export function CardInformation({
  img,
  alt,
  title,
  hp,
  exp,
  attack,
  defense,
  specialAttack,
}) {
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
}

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
