import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './style';
import Loader from '../../icons/buttonLoader';

const Button = props => {
  return (
    <Btn
      width={props.width === 'fluid' && '100%'}
      size={props.size}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
    >
      {props.loading ? <Loader /> : props.children}
    </Btn>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  children: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Button;
