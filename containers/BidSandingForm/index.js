import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/HeaderBackArrow';
import Input from '../../components/Input';
import Button from '../../components/Button';
import OgpoFinalPrice from '../../components/OgpoFinalPrice';
import Text from '../../components/Text';
import { Wrap, Layout } from './style';

const BidSandingForm = props => {
  return (
    <Wrap>
      <Header onClose={props.onClose} />
      <Layout>
        <Text variant="h5">Расчет стоимости</Text>
        <form method="POST" action="https://infinite.kz/niet_ogpo">
          <Input label="Имя" initialValue={props.data.fioAndClass} />
          <Input label="ИИН" initialValue={props.data.iin} name="iin" />
          <Input label="Телефон" initialValue={props.data.phone} name="phone" />
          <Input label="Автомобиль" initialValue={props.data.model} />
          <OgpoFinalPrice
            price={props.data.price}
            discountPrice={props.data.discountPrice}
          />
          <Button width="fluid" size="l" type="submit">
            Оформить
          </Button>
        </form>
      </Layout>
    </Wrap>
  );
};

BidSandingForm.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func
};

export default BidSandingForm;
