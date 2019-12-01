import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

const TextInput = ({
  isMultiline,
  label,
  name,
  onChange,
  placeholder,
  type,
  value
}) => {
  return (
    <div className="input">
      {label && <label htmlFor={name}>{label}</label>}
      {isMultiline ? (
        <textarea
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          rows="4"
          value={value}
        />
      ) : (
        <input
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      )}
    </div>
  );
};

TextInput.propTypes = {
  isMultiline: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

TextInput.defaultProps = {
  isMultiline: false,
  type: 'text'
};

export default TextInput;
