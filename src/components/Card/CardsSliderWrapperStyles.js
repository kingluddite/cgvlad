import React from 'react';
import styled from 'styled-components';

const CardsSliderWrapperStyles = styled.div`
  display: flex;
  position: absolute;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  .card {
    flex: 1;
    min-width: 200px;
    opacity: 0.7;
    transform: scale(0.8);
    box-shadow: none;
    background-color: white;
    border-color: white;
    transition: opacity 300ms linear, border-color 300ms linear,
      background-color 300ms linear,
      transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    .details {
      opacity: 0;
      transition: opacity 150ms linear;
    }
  }
`;

export default CardsSliderWrapperStyles;
