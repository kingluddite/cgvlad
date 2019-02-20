import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

// images
// import logo from '../assets/images/cgvlad-logo.png';
import pic03 from '../assets/images/pic03.jpg';
import pic08 from '../assets/images/pic08.jpg';
import pic09 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';
// import styled from 'styled-components';

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
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>
              {my_name} | {title}
            </h1>
          </header>

          <h2 id="content" />
          <p>{statement}</p>
          <div className="grid-wrapper">
            <div className="col-6">
              <h3>{my_skills}</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat commodo eu sed ante lacinia.
                Sapien a lorem in integer ornare praesent commodo adipiscing
                arcu in massa commodo lorem accumsan at odio massa ac ac. Semper
                adipiscing varius montes viverra nibh in adipiscing blandit
                tempus accumsan.
              </p>
            </div>
            <div className="col-6">
              <h3>WORK EXPERIENCE</h3>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor. Ante commodo blandit
                adipiscing integer semper orci eget. Faucibus commodo adipiscing
                mi eu nullam accumsan morbi arcu ornare odio mi adipiscing
                nascetur lacus ac interdum morbi accumsan vis mi accumsan ac
                praesent.
              </p>
            </div>
            <div className="col-4">
              <h3>EDUCATION</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
            </div>
            <div className="col-4">
              <h3>HOBBIES</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
            </div>
            <div className="col-4">
              <h3>REFERENCES</h3>
              <p>Available on Request</p>
            </div>
          </div>
        </div>
      </section>
    </div>
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
        my_name={frontmatter.my_name}
        my_skills={frontmatter.my_skills}
        statement={frontmatter.statement}
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
