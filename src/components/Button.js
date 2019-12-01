import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ icon, label }) => {
  return (
    <button className="button">
      {label} {icon && <i className={icon} />}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string
};

export default Button;
