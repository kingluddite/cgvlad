import React from 'react';
import PropTypes from 'prop-types';

const DrawerToggleButton = ({ click }) => (
  <button type="button" className="toggle-button" onClick={click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

DrawerToggleButton.propTypes = {
  click: PropTypes.func.isRequired,
};

export default DrawerToggleButton;
