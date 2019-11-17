import React from 'react';
import PropTypes from 'prop-types';
import { Wrap, Text } from './style';
import Checkbox from '../Checkbox';

const CheckboxWithText = props => {
  return (
    <Wrap>
      <Checkbox />
      <Text>{props.label}</Text>
    </Wrap>
  );
};

CheckboxWithText.propTypes = {
  label: PropTypes.string
};

export default CheckboxWithText;
