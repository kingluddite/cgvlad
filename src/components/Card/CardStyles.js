import React from 'react';
import styled from 'styled-components';

// images
import bed from './images/bed-left-side.svg';
import car from './images/car-compact.svg';
import bathtub from './images/bathtub.svg';
import house from './images/house-location-pin.svg';

const CardStyles = styled.div`
  border: 3px #f3f3f3 solid;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s linear;
  cursor: pointer;
  background-color: #f3f3f3;
  padding: 10px;
  max-width: 220px;
  text-align: left;
  margin: 0 auto;

  &:hover {
    background-color: #f3f3f3;
    border-color: #f3f3f3;
  }

  img {
    max-width: calc(100%);
    margin: 0 auto;
    display: block;
  }

  .index {
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    line-height: 20px;
    font-size: 14px;
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    padding: 0 10px;
  }

  .price {
    margin: 0;
    padding: 10px 0;
    font-weight: bold;
  }

  .details {
    position: relative;
  }

  .features {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding-left: 24px;
      margin-right: 10px;
      display: inline-block;

      span {
        display: none;
      }

      &.icon-bed {
        background: url(./images/${bed}) left center;
        background-size: auto 100%;
        background-repeat: no-repeat;
      }

      &.icon-bath {
        background: url(./images/${bathtub});
        background-size: auto 100%;
        background-repeat: no-repeat;
      }

      &.icon-car {
        background: url(./images/${car});
        background-size: auto 100%;
        background-repeat: no-repeat;
      }
    }
  }
`;

export default CardStyles;
