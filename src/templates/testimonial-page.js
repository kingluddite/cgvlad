import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

// custom components
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';

// images
// import logo from '../assets/images/cgvlad-logo.png';

export const TestimonialPageTemplate = ({
  title,
  heading,
  description,
  testimonials,
}) => (
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
      <Testimonials testimonials={testimonials} />
    </div>
  </>
);

TestimonialPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.array,
};

const TestimonialPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TestimonialPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  );
};

TestimonialPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TestimonialPage;

export const TestimonialQuery = graphql`
  query TestimonialPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
        testimonials {
          author
          quote
        }
      }
    }
  }
`;
