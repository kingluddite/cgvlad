import React from 'react';
import PropTypes from 'prop-types';

// import styles
import ArrowStyles from './ArrowStyles';

const RightArrow = ({ goToNextSlide }) => (
  <ArrowStyles className="nextArrow arrow" onClick={goToNextSlide} role="presentation">
    <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
  </ArrowStyles>
);

RightArrow.propTypes = {
  goToNextSlide: PropTypes.func.isRequired,
};

export default RightArrow;
