import React from 'react';
import PropTypes from 'prop-types';
import { Heading1, Heading2 } from './style';

const Text = props => {
  if (props.variant === 'h1') {
    return <Heading1>{props.children}</Heading1>;
  }
  if (props.variant === 'h5') {
    return <Heading2 color={props.color}>{props.children}</Heading2>;
  }
};

Text.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]),
  color: PropTypes.string
};

export default Text;
