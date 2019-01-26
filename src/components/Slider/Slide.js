import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
    height: '100%',
    width: '100%',
  };

  return <div className="slide" style={styles} />;
};

Slide.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Slide;
