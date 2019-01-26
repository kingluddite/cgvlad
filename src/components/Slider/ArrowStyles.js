import React from 'react';
import styled from 'styled-components';

const ArrowStyles = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 50%;
  cursor: pointer;
  transition: transform ease-in 0.1s;
  opacity: 0.4;
  font-size: 12px;

  &.nextArrow {
    position: absolute;
    top: 50%;
    right: 25px;
    z-index: 999;
    color: #fff;
  }

  &.backArrow {
    position: absolute;
    top: 50%;
    left: 25px;
    z-index: 999;
    color: #fff;
  }

  .fa-arrow-right:before,
  .fa-arrow-left:before {
    color: #222;
  }
`;

export default ArrowStyles;
