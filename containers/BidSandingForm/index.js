import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/HeaderBackArrow';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Wrap, Layout } from './style';

const BidSandingForm = props => {
  return (
    <Wrap>
      <Header onClose={props.onClose} />
      <Layout>
        <Input label="Имя" initialValue={props.data.fioAndClass} />
        <Input label="ИИН" initialValue={props.data.iin} />
        <Input label="Телефон" initialValue={props.data.phone} />
        <Input label="Автомобиль" initialValue={props.data.carModel} />
        <Button width="fluid" size="l">
          Оформить
        </Button>
      </Layout>
    </Wrap>
  );
};

BidSandingForm.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func
};

export default BidSandingForm;
