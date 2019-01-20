import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
// import logo from '../assets/images/cgvlad-logo.png';

export const GalleryPageTemplate = ({ title, heading, description }) => (
  <>
    <Helmet title={`${title} | `} />
    <div id="main" className="alt-colors">
      <section id="section-one">
        <div className="inner">
          <h2>{title}</h2>
        </div>
      </section>
      <section id="section-two">
        <div className="inner">
          <div className="grid-wrapper">
            <div className="col-4">{description}</div>
          </div>
        </div>
      </section>
    </div>
  </>
);

GalleryPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

const GalleryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <GalleryPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  );
};

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default GalleryPage;

export const GalleryQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
      }
    }
  }
`;
