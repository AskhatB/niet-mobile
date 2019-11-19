import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/CheckboxWithText';
import Text from '../../components/Text';
import { Wrap } from './style';

import getUserInfoByIin from '../../controllers/getUserInfoByIin';
import getCarModelByNumber from '../../controllers/getCarModelByNumber';
import getFinalPriceByIin from '../../controllers/getFinalPriceByIin';
import writeBid from '../../controllers/writeBid';

const MainPageForm = props => {
  const [phone, setPhone] = React.useState('');
  const [carNumber, setCarNumber] = React.useState('');
  const [iin, setIin] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [carNumberError, setCarNumberError] = React.useState();
  const [phoneError, setPhoneError] = React.useState();
  const [iinError, setIinError] = React.useState();
  const [personalData, setPersonalData] = React.useState(false);
  const [rulesAndProfile, setRulesAndProfile] = React.useState(false);

  const submitForm = async () => {
    setLoading(true);
    if (
      carNumberError ||
      phoneError ||
      iinError ||
      !personalData ||
      !rulesAndProfile
    ) {
      setLoading(false);
    } else {
      try {
        const carModel = await getCarModelByNumber(carNumber);
        const userInfo = await getUserInfoByIin(phone, iin);
        const finalPrice = await getFinalPriceByIin(iin);
        await writeBid({
          carModel,
          carNumber,
          phone,
          ...userInfo,
          ...finalPrice
        });
        props.onSubmit({
          carModel,
          phone,
          ...userInfo,
          ...finalPrice
        });
      } catch (error) {
        if (error === 'Неверный формат или номер не существует')
          setCarNumberError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePhoneError = value => {
    if (value.length < 8) {
      setPhoneError('Неверный формат номера');
    } else {
      setPhoneError(false);
    }
  };

  const handleIinError = value => {
    if (value.length < 12) {
      setIinError('В ИИН должно быть 12 символов');
    } else {
      setIinError(false);
    }
  };

  const handleCarNumberError = value => {
    if (value.length < 5) {
      setCarNumberError('Неверный формат');
    } else {
      setCarNumberError(false);
    }
  };

  const changePersonalData = checked => {
    setPersonalData(checked);
  };

  const changeRulesAndProfile = checked => {
    setRulesAndProfile(checked);
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
        onBlur={handlePhoneError}
        errorMessage={phoneError}
      />
      <Input
        type="text"
        label="ИИН водителя"
        onChange={value => setIin(value)}
        onBlur={handleIinError}
        errorMessage={iinError}
      />
      <Checkbox label="Льготы для инвалидов и ветеранов" />
      <Input
        type="text"
        label="Номер автомобиля"
        onChange={value => setCarNumber(value)}
        onBlur={handleCarNumberError}
        errorMessage={carNumberError}
      />
      <Checkbox
        label="Я соглашаюсь на сбор и обработку моих персональных данных, ознакомлен с правилами и анкетой"
        onChange={changePersonalData}
        required={!personalData}
      />
      <Checkbox
        label="Ознакомлен с правилами и анкетой"
        onChange={changeRulesAndProfile}
        required={!rulesAndProfile}
      />
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
