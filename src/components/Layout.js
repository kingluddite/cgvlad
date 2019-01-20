import React from 'react';
import PropTypes from 'prop-types';

// custom styles
import '../assets/scss/main.scss';

// custom components
import Navbar from './shared/Navbar/Navbar';
import SideDrawer from './shared/SideDrawer/SideDrawer';
import Backdrop from './shared/SideDrawer/Backdrop';
import Contact from './shared/Contact';
import Footer from './shared/Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  state = {
    sideDrawerOpen: false,
  };

  // NOTE: bad practice --> this.setState({sideDrawerOpen: !this.state.sideDrawerOpen});
  // with the way that React batch updates
  // you are not guaranteed the state changed whenever {sideDrawerOpen: !this.state.sideDrawerOpen} the next time
  // Better Way: Pass a function to setState and in that function
  // you will receive the `prevState` as an argument to that function
  // This is passed to the function by React
  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { children } = this.props;
    const { sideDrawerOpen } = this.state;

    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div>
        <div id="wrapper" style={{ height: '100%' }}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={sideDrawerOpen} />
          {backdrop}
          {children}
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
