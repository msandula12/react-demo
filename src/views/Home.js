import React from 'react';

import '../App.css';

import drone from '../assets/images/Drone.png';
import shadow from '../assets/images/Shadow.png';

import Toolbar from '../components/Toolbar';

const Home = () => {
  return (
    <div className="page home">
      <Toolbar showPages />
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
