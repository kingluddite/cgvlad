import React, { Component } from 'react';

// styles
import CardsSliderStyles from './Card/CardsSliderStyles';
import CardSliderWrapperStyles from './Card/CardsSliderWrapperStyles';

// custom components
import Card from './Card/Card';

// data
import data from '../assets/data/data';

class ImageSlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: data.properties,
      property: data.properties[0]
    };
  }

  nextProperty = () => {
    const { property } = this.state;
    const newIndex = property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const { property } = this.state;
    const newIndex = property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  render() {
    const { properties, property } = this.state;

    return (
      <>
        <button
          type="button"
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}
        >
          Next
        </button>
        <button
          type="button"
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          Prev
        </button>

        <div className="page">
          <section>
            <h1>Image slideshow</h1>
          </section>

          <CardsSliderStyles className="cards-slider">
            <CardSliderWrapperStyles className="cards-slider-wrapper">
              {properties.map(property => (
                <Card key={property._id} property={property} />
              ))}
            </CardSliderWrapperStyles>
          </CardsSliderStyles>
        </div>
      </>
    );
  }
}

export default ImageSlideShow;
