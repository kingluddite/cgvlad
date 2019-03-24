import React from 'react';
import styled from 'styled-components';

const CardsSliderStyles = styled.div`
  position: relative;
  max-width: 226px;
  margin: 0 auto;

  // border for active property
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 264px;
    outline: 5px solid #61dafb;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default CardsSliderStyles;
