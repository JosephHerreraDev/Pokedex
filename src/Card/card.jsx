import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export function Card({ img, alt, name }) {
  const navigateTo = useNavigate();
  function handleClick() {
    navigateTo(`/information/${name}`);
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
