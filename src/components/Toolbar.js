import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Toolbar.css';

import logo from '../assets/images/Logo.png';

import MenuIcon from '../components/MenuIcon';

const Toolbar = ({ showPages }) => {
  return (
    <header className="toolbar">
      {showPages ? (
        <div className="toolbar-nav">
          <Link to="/" className="link">
            Store
          </Link>
          <Link to="/" className="link">
            Tutorials
          </Link>
        </div>
      ) : (
        <div className="toolbar-nav">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="link-icon fab fa-facebook-square" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="link-icon fab fa-twitter" />
          </a>
        </div>
      )}

      {/* Display logo in center */}
      <Link to="/">
        <img src={logo} alt="Byrd MR" />
      </Link>

      {showPages ? (
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
      ) : (
        <div className="toolbar-nav flex-end">
          <span>
            <MenuIcon />
          </span>
        </div>
      )}
    </header>
  );
};

Toolbar.propTypes = {
  showPages: PropTypes.bool
};

Toolbar.defaultProps = {
  showPages: false
};

export default Toolbar;
