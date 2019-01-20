import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// styles
import NavbarStyles from './NavbarStyles';
import DrawerToggleButtonStyles from '../SideDrawer/DrawerToggleButtonStyles';

// custom components
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Navbar = ({ drawerClickHandler }) => (
  <NavbarStyles>
    <nav className="navbar">
      <DrawerToggleButtonStyles className="nav-toggle-button">
        <DrawerToggleButton click={drawerClickHandler} />
      </DrawerToggleButtonStyles>
      <div className="nav-logo">
        <Link to="/">CGVLAD</Link>
      </div>
      <div className="spacer" />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/print">Print</Link>
          </li>
          <li>
            <Link to="/reel">Reel</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/clips">Clips</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </NavbarStyles>
);

Navbar.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired,
};

export default Navbar;
