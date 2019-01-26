import React from 'react';
import PropTypes from 'prop-types';

// import styles
import ArrowStyles from './ArrowStyles';

const LeftArrow = ({ goToPrevSlide }) => (
  <ArrowStyles className="backArrow" onClick={goToPrevSlide} role="presentation">
    <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
  </ArrowStyles>
);

LeftArrow.propTypes = {
  goToPrevSlide: PropTypes.func.isRequired,
};

export default LeftArrow;
