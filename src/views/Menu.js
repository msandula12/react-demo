import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';
import MenuContext from '../context/MenuContext';

import logoWhite from '../assets/images/Logo all White.png';

import Drone from '../components/Drone';

const Menu = () => {
  return (
    <MenuContext.Consumer>
      {({ toggleVisibility }) => (
        <div className="popout-menu">
          <header className="toolbar">
            <div className="toolbar-nav" />
            <img src={logoWhite} alt="Byrd MR" />
            <div className="toolbar-nav">
              <i onClick={toggleVisibility} className="close fas fa-times" />
            </div>
          </header>
          <div className="menu-content">
            <Drone />
            <div className="menu-list">
              <div>
                <Link onClick={toggleVisibility} to="/" className="link-alt">
                  Store
                </Link>
                <Link onClick={toggleVisibility} to="/" className="link-alt">
                  Tutorials
                </Link>
                <Link onClick={toggleVisibility} to="/" className="link-alt">
                  Blog
                </Link>
                <Link
                  onClick={toggleVisibility}
                  to="/contact"
                  className="link-alt"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </MenuContext.Consumer>
  );
};

export default Menu;
