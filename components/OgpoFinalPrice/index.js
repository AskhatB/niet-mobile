import React from 'react';
import PropTypes from 'prop-types';
import { Wrap, Price, Text, FlexBlock, PriceOne } from './style';
import toValidCost from '../../services/toValidCost';

const OgpoFinalPrice = props => {
  return (
    <Wrap>
      <FlexBlock>
        <Text>Сумма страховки</Text>
        <PriceOne>{toValidCost(props.price)} ₸</PriceOne>
      </FlexBlock>
      <FlexBlock>
        <Text>Скидка </Text>
        <PriceOne>
          {100 - Math.round((props.discountPrice / props.price) * 100)} %
        </PriceOne>
      </FlexBlock>
      <FlexBlock>
        <Text>Сумма скидки </Text>
        <PriceOne>{toValidCost(Math.round(props.price - props.discountPrice))} ₸</PriceOne>
      </FlexBlock>
      <FlexBlock>
        <PriceOne>Итоговая сумма</PriceOne>
        <Price>{toValidCost(props.discountPrice)} ₸</Price>
      </FlexBlock>
    </Wrap>
  );
};

OgpoFinalPrice.propTypes = {
  price: PropTypes.number,
  discountPrice: PropTypes.number
};

export default OgpoFinalPrice;
