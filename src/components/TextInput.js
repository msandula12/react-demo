import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

const TextInput = ({ isMultiline, label, placeholder, type }) => {
  return (
    <div className="input">
      {label && <label>{label}</label>}
      {isMultiline ? (
        <textarea placeholder={placeholder} rows="4" />
      ) : (
        <input type={type} placeholder={placeholder} />
      )}
    </div>
  );
};

TextInput.propTypes = {
  isMultiline: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

TextInput.defaultProps = {
  isMultiline: false,
  type: 'text'
};

export default TextInput;
