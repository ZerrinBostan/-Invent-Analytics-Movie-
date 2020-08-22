import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

const Button = ({
  className, text, loading, ...props
}) => (
  <button type="button" className={`btn ${className}`} {...props}>
    {loading ? (
      <ReactLoading type="spinningBubbles" width={18} height={18} color="#2f5bea" />
    ) : (
      <span>{text}</span>
    )}
  </button>
);

Button.defaultProps = {
  className: 'btn',
  loading: false,
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default Button;
