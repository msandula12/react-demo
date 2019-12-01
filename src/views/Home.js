import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import drone from '../assets/images/Drone.png';
import logo from '../assets/images/Logo.png';
import shadow from '../assets/images/Shadow.png';

import MenuIcon from '../components/MenuIcon';

const Home = () => {
  return (
    <div className="page home">
      <header className="toolbar">
        <div className="toolbar-nav">
          <span className="link">Store</span>
          <span className="link">Tutorials</span>
        </div>
        <Link to="/">
          <img src={logo} alt="Byrd MR" />
        </Link>
        <div className="toolbar-nav">
          <span className="link">Blog</span>
          <span className="link">Contact</span>
          <span className="menu-icon">
            <MenuIcon />
          </span>
        </div>
      </header>
      <div className="page-content">
        <div className="jumbotron">
          <div className="jumbotron-image">
            <img className="drone-drone" src={drone} alt="F-210 drone" />
            <img className="drone-shadow" src={shadow} alt="" />
          </div>
          <h1 className="jumbotron-header">F-210</h1>
          <p className="jumbotron-quote">"The fastest drone on the planet"</p>
          <p className="jumbotron-tagline">— The Wirecutter</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
