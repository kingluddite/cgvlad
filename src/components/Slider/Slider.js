import React, { Component } from 'react';
import styled from 'styled-components';
// get our fontawesome imports
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SliderStyles = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
`;
class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <SliderStyles className="slider">
        <h1>Slider</h1>
        <FontAwesomeIcon icon={faHome} />
      </SliderStyles>
    );
  }
}

export default Slider;
