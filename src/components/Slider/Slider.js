import React, { Component } from 'react';
import styled from 'styled-components';
// get our fontawesome imports
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// custom components
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const SliderStyles = styled.div`
  position: relative;
  width: 500px;
  margin: 0 auto;
  height: 500px;
  overflow: hidden;
  white-space: nowrap;
`;

const SliderWrapperStyles = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg',
      ],
      currentIndex: 0, // show first image at start
      translateValue: 0,
    };
  }

  goToPrevSlide = () => {
    const { currentIndex } = this.state;
    if (currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  goToNextSlide = () => {
    const { currentIndex, images } = this.state;
    // Exiting the method early if we are at the end of the images array
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array
    if (currentIndex === images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  slideWidth = () => document.querySelector('.slide').clientWidth;

  render() {
    const { images, translateValue, currentIndex } = this.state;

    return (
      <SliderStyles className="slider">
        <SliderWrapperStyles
          className="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          {images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </SliderWrapperStyles>

        {currentIndex && <LeftArrow goToPrevSlide={this.goToPrevSlide} />}

        <RightArrow goToNextSlide={this.goToNextSlide} />
      </SliderStyles>
    );
  }
}

export default Slider;
