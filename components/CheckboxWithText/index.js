import React from 'react';
import PropTypes from 'prop-types';
import { Wrap, Text } from './style';
import Checkbox from '../Checkbox';

const CheckboxWithText = props => {
  const onCheckboxChecked = e => {
    props.onChange(e.target.checked);
  };
  return (
    <Wrap>
      <Checkbox
        required={props.required}
        checked={props.checked}
        onChange={onCheckboxChecked}
      />
      <Text>{props.label}</Text>
    </Wrap>
  );
};

CheckboxWithText.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckboxWithText;
