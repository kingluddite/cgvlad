import React from 'react';
import PropTypes from 'prop-types';

// styles
import CardStyles from './CardStyles';

const Card = ({ property }) => {
  const {
    index,
    picture,
    city,
    address,
    bedrooms,
    bathrooms,
    carSpaces
  } = property;
  return (
    <CardStyles id={`card-${index}`} className="card">
      <img src={picture} alt={city} />
      <div className="details">
        <span className="index">{index + 1}</span>
        <p className="location">
          {city}
          <br />
          {address}
        </p>
        <ul className="features">
          <li className="icon-bed">
            {bedrooms} <span>bedrooms</span>
          </li>
          <li className="icon-bath">
            {bathrooms} <span>bathrooms</span>
          </li>
          <li className="icon-car">
            {carSpaces} <span>parking spots</span>
          </li>
        </ul>
      </div>
    </CardStyles>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
