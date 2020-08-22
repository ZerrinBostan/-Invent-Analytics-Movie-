import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  className, type, placeholder, ...props
}) => (
  <input className={className} type={type} placeholder={placeholder} {...props} />
);

Input.defaultProps = {
  className: 'form-control',
  type: 'text',
  placeholder: '',
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
