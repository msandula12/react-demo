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
          <a href="https://facebook.com" target="_blank">
            <i className="link-icon fab fa-facebook-square" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <i className="link-icon fab fa-twitter" />
          </a>
        </div>
        <Link to="/">
          <img src={logo} alt="Byrd MR" />
        </Link>
        <div className="toolbar-nav">
          <span>
            <MenuIcon />
          </span>
        </div>
      </header>
      <div className="page-content">Contact us</div>
    </div>
  );
};

export default Contact;
