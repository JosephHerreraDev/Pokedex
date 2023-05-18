import PropTypes from 'prop-types';
import './card.css';


export function Card({ img, alt, title }) {
  return (
    <div className="Card">
        <img className="CardImage" src={img} alt={alt} />
        <div className="CardNameContainer">
            <h3 className="CardName">{title}</h3>
        </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
