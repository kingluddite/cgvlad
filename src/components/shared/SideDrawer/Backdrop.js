import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// styles
import BackdropStyles from './BackdropStyles';

const Backdrop = ({ click }) => <BackdropStyles onClick={click} />;

Backdrop.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Backdrop;
