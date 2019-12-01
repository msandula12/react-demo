import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import logo from '../assets/images/Logo.png';

import MenuIcon from '../components/MenuIcon';

const Contact = () => {
  return (
    <div className="page contact">
      <header className="toolbar">
        <div className="toolbar-nav">
          <Link to="/" className="link">
            Store
          </Link>
          <Link to="/" className="link">
            Tutorials
          </Link>
        </div>
        <Link to="/">
          <img src={logo} alt="Byrd MR" />
        </Link>
        <div className="toolbar-nav">
          <Link to="/" className="link">
            Blog
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
          <span className="menu-icon">
            <MenuIcon />
          </span>
        </div>
      </header>
      <div className="page-content">Contact us</div>
    </div>
  );
};

export default Contact;
