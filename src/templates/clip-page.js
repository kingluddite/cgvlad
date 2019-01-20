import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
// import logo from '../assets/images/cgvlad-logo.png';

export const ClipPageTemplate = ({ title, heading, description }) => (
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

ClipPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

const ClipPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ClipPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  );
};

ClipPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ClipPage;

export const ClipQuery = graphql`
  query ClipPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
      }
    }
  }
`;
