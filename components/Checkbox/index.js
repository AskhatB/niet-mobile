import React from 'react';
import PropTypes from 'prop-types';
import TickIcon from '../../icons/tick';
import { Wrap } from './style';

const Checkbox = props => {
  return (
    <Wrap required={props.required}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <div>
        <TickIcon />
      </div>
    </Wrap>
  );
};

Checkbox.propTypes = {
  required: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
