import React, { Component } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

// custom components
import Layout from '../components/Layout';
import Banner from '../components/Banner';

import pic01 from '../assets/images/darksiders.png';
// import pic01 from '../assets/images/pic01.jpg';
// import pic02 from '../assets/images/pic02.jpg';
import pic02 from '../assets/images/reel-ship.png';
import pic03 from '../assets/images/gallery-jeep.png';
// import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/clip-man.png';
// import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/subaru-resume.png';
// import pic05 from '../assets/images/pic05.jpg';
import pic06 from '../assets/images/contact-mlb.png';
// import pic06 from '../assets/images/pic06.jpg';

class HomeIndex extends Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="What is this page about?"
          meta={[
            {
              name: 'description',
              content: 'Describe this page in one or two sentences',
            },
            { name: 'keywords', content: 'Keywords about this page' },
          ]}
        />

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>PRINT</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/print" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>REEL</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/reel" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>GALLERY</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/gallery" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>CLIPS</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/clips" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>RESUME</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/resume" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>CONTACT</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="#contact" className="link primary" />
            </article>
          </section>
          {/* <section id="two"> */}
          {/*   <div className="inner"> */}
          {/*     <header className="major"> */}
          {/*       <h2>CURRENT PROJECT</h2> */}
          {/*     </header> */}
          {/*     <p> */}
          {/*       Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris */}
          {/*       aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In */}
          {/*       efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem */}
          {/*       ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis */}
          {/*       libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus. */}
          {/*     </p> */}
          {/*     <ul className="actions"> */}
          {/*       <li> */}
          {/*         <Link to="/landing" className="button next"> */}
          {/*           Get Started */}
          {/*         </Link> */}
          {/*       </li> */}
          {/*     </ul> */}
          {/*   </div> */}
          {/* </section> */}
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
