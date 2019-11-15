import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './style';

const Button = props => {
  return <Btn width={props.width}>{props.children}</Btn>;
};

Button.propTypes = {
  width: PropTypes.string,
  children: PropTypes.string
};

export default Button;
