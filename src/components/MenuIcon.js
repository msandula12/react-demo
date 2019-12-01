import React from 'react';
import PropTypes from 'prop-types';

import './MenuIcon.css';

const MenuIcon = ({ onClick }) => {
  return <div className="menu" onClick={onClick} />;
};

MenuIcon.propTypes = {
  onClick: PropTypes.func
};

export default MenuIcon;
