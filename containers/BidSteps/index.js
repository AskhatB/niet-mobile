import React from 'react';
import { Wrap, FlexBlock, Left, Right } from './style';

const BidSteps = () => {
  return (
    <Wrap>
      <FlexBlock>
        <Left>1</Left>
        <Right>Рассчитайте стоимость ОГПО на онлайн-калькуляторе</Right>
      </FlexBlock>
      <FlexBlock>
        <Left>2</Left>
        <Right>Оформление ОГПО без похода в офис</Right>
      </FlexBlock>
      <FlexBlock>
        <Left>3</Left>
        <Right>Полис придет на электронную почту сразу после оплаты</Right>
      </FlexBlock>
    </Wrap>
  );
};

export default BidSteps;
