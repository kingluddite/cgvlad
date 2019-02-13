import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
// import logo from '../assets/images/cgvlad-logo.png';

export const ResumePageTemplate = ({
  title,
  heading,
  description,
  my_name,
  my_skills,
  statement
}) => (
  <>
    <Helmet title={`${title} | `} />
    <div className="id">
      <h1>{my_name}</h1>
      <h2>{my_skills}</h2>
    </div>

    <p className="statement">{statement}</p>
  </>
);

ResumePageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  my_name: PropTypes.string,
  my_skills: PropTypes.string,
  statement: PropTypes.string
};

const ResumePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ResumePageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        my_name={frontmatter.description}
        my_skills={frontmatter.description}
        statement={frontmatter.description}
      />
    </Layout>
  );
};

ResumePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ResumePage;

export const ResumeQuery = graphql`
  query ResumePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
        my_name
        my_skills
        statement
      }
    }
  }
`;
