import React from 'react';
import PropTypes from 'prop-types';
import { Wrap, Price } from './style';
import toValidCost from '../../services/toValidCost';

const OgpoFinalPrice = props => {
  return (
    <Wrap>
      <Price>
        {props.discountPrice
          ? toValidCost(props.discountPrice)
          : toValidCost(props.price)} ₸
      </Price>
      {props.discountPrice && (
        <Price discount>{toValidCost(props.price)} ₸</Price>
      )}
    </Wrap>
  );
};

OgpoFinalPrice.propTypes = {
  price: PropTypes.number,
  discountPrice: PropTypes.number
};

export default OgpoFinalPrice;