import React from 'react';

// custom components
import Layout from '../components/Layout';
import ImageSlideShow from '../components/ImageSlideShow';

const ExamplePage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>Example Page</h1>
          <ImageSlideShow />
        </div>
      </section>
    </div>
  </Layout>
);

export default ExamplePage;
