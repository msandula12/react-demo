import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ disabled, icon, label, onClick }) => {
  return (
    <div className={`button-wrapper ${disabled ? 'disabled' : ''}`}>
      <button className="button" disabled={disabled} onClick={onClick}>
        {label} {icon && <i className={icon} />}
      </button>
    </div>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false
};

export default Button;
