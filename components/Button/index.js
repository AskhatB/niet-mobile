import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './style';

const Button = props => {
  return (
    <Btn
      width={props.width === 'fluid' && '100%'}
      size={props.size}
      onClick={props.onClick}
    >
      {props.children}
    </Btn>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  children: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
