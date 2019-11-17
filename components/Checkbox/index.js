import React from 'react';
import TickIcon from '../../icons/tick';
import { Wrap } from './style';

const Checkbox = () => {
  return (
    <Wrap>
      <input type="checkbox" />
      <div>
        <TickIcon />
      </div>
    </Wrap>
  );
};

export default Checkbox;
