import React from 'react';
import styled from 'styled-components';

const BannerHeading = styled.h1`
  span {
    color: #737373;
  }
`;

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <BannerHeading>
          CG<span>VLAD</span>
        </BannerHeading>
      </header>
      <div className="content">
        <p>A Showcase of My Work</p>
      </div>
    </div>
  </section>
);

export default Banner;
