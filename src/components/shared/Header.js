import React from 'react';
import { Link } from 'gatsby';

// custom components
import Navbar from './Navbar';

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>CGVLAD</strong> <span>My Online Portfolio</span>
    </Link>
    <Navbar />
  </header>
);

export default Header;
