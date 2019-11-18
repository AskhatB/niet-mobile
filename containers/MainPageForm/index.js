import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/CheckboxWithText';
import Text from '../../components/Text';
import { Wrap } from './style';

import getUserInfoByIin from '../../controllers/getUserInfoByIin';
import getCarModelByNumber from '../../controllers/getCarModelByNumber';

const MainPageForm = props => {
  const [phone, setPhone] = React.useState('');
  const [carNumber, setCarNumber] = React.useState('');
  const [iin, setIin] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [carNumberError, serCarNumberError] = React.useState();

  const submitForm = async () => {
    setLoading(true);
    try {
      const carModel = await getCarModelByNumber(carNumber);
      const userInfo = await getUserInfoByIin(phone, iin);
      props.onSubmit({ carModel, phone, ...userInfo });
    } catch (error) {
      if (error === 'Неверный формат или номер не существует') serCarNumberError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrap>
      <Text variant="h5" color="dark">
        Заполните поля ниже
      </Text>
      <Input
        type="text"
        label="Номер телефона"
        mask="phone"
        onChange={value => setPhone(value)}
      />
      <Input
        type="text"
        label="ИИН водителя"
        onChange={value => setIin(value)}
      />
      <Checkbox label="Льготы для инвалидов и ветеранов" />
      <Input
        type="text"
        label="Номер автомобиля"
        onChange={value => setCarNumber(value)}
        errorMessage={carNumberError}
      />
      <Checkbox label="Я соглашаюсь на сбор и обработку моих персональных данных, ознакомлен с правилами и анкетой" />
      <Checkbox label="Ознакомлен с правилами и анкетой" />
      <Button size="l" width="fluid" onClick={submitForm} loading={loading}>
        Далее
      </Button>
    </Wrap>
  );
};

MainPageForm.propTypes = {
  onSubmit: PropTypes.func
};

export default MainPageForm;
