import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeftIcon from '../../icons/arrowLeft';
import { Wrap } from './style';

const HeaderBackArrow = props => {
  return (
    <Wrap>
      <div onClick={props.onClose}>
        <ArrowLeftIcon />
      </div>
    </Wrap>
  );
};

HeaderBackArrow.propTypes = {
  onClose: PropTypes.func
};

export default HeaderBackArrow;
