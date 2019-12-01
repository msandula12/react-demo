import React from 'react';

import './Drone.css';

import drone from '../assets/images/Drone.png';
import shadow from '../assets/images/Shadow.png';

const Drone = () => {
  return (
    <div className="drone">
      <img className="drone-drone" src={drone} alt="F-210 drone" />
      <img className="drone-shadow" src={shadow} alt="" />
    </div>
  );
};

export default Drone;
