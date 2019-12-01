import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

import logoWhite from '../assets/images/Logo all White.png';

import Drone from '../components/Drone';

const Menu = () => {
  return (
    <div className="popout-menu">
      <header className="toolbar">
        <div className="toolbar-nav" />
        <img src={logoWhite} alt="Byrd MR" />
        <div className="toolbar-nav">
          <i className="close fas fa-times" />
        </div>
      </header>
      <div className="menu-content">
        <Drone />
        <div className="menu-list">
          <div>
            <Link to="/" className="link-alt">
              Store
            </Link>
            <Link to="/" className="link-alt">
              Tutorials
            </Link>
            <Link to="/" className="link-alt">
              Blog
            </Link>
            <Link to="/" className="link-alt">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
