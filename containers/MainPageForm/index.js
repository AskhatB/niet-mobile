import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/CheckboxWithText';
import Text from '../../components/Text';
import Modal from '../../components/Modal';
import { Wrap, UnknownError, AddButton } from './style';

import getUserInfoByIin from '../../controllers/getUserInfoByIin';
import getAdditionalUser from '../../controllers/getAdditionalUser';
import getCarModelByNumber from '../../controllers/getCarModelByNumber';
import getFinalPriceByIin from '../../controllers/getFinalPriceByIin';
import getPrePrice from '../../controllers/getPrePrice';
import writeBid from '../../controllers/writeBid';

const MainPageForm = props => {
  const [phone, setPhone] = React.useState('');
  const [phoneError, setPhoneError] = React.useState();

  const [iin, setIin] = React.useState('');
  const [iinError, setIinError] = React.useState();
  const [iinLoading, setIinLoading] = React.useState(false);
  const [iinSuccess, setIinSuccess] = React.useState(false);

  const [additionalIin, setAdditionalIin] = React.useState('');
  const [additionalIinError, setAdditionalIinError] = React.useState();
  const [additionalIinLoading, setAdditionalIinLoading] = React.useState(false);
  const [additionalIinSuccess, setAdditionalIinSuccess] = React.useState(false);

  const [carNumber, setCarNumber] = React.useState('');
  const [carNumberError, setCarNumberError] = React.useState();
  const [carNumberLoading, setCarNumberLoading] = React.useState(false);
  const [carNumberSuccess, setCarNumberSuccess] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const [personalData, setPersonalData] = React.useState(false);
  const [personalDataError, setPersonalDataError] = React.useState(false);
  const [rulesAndProfile, setRulesAndProfile] = React.useState(false);
  const [rulesAndProfileError, setRulesAndProfileError] = React.useState(false);
  const [privileges, setPrivileges] = React.useState(false);
  const [unknownError, setUnknownError] = React.useState('');
  const [addDriverModal, setAddDriverModal] = React.useState(false);

  const submitForm = async () => {
    setLoading(true);
    if (!personalData) setPersonalDataError(true);
    if (!rulesAndProfile) setRulesAndProfileError(true);
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
        const { model, region, vin } = await getCarModelByNumber(carNumber);
        const userInfo = await getUserInfoByIin(phone, iin);
        await getPrePrice(
          carNumber,
          model.split(' ')[1],
          model.split(' ')[0],
          model.split(' ')[2],
          region,
          vin,
          userInfo.iin
        );
        const finalPrice = await getFinalPriceByIin(iin);
        await writeBid({
          model,
          carNumber,
          phone,
          ...userInfo,
          ...finalPrice
        });
        props.onSubmit({
          model,
          phone,
          ...userInfo,
          ...finalPrice
        });
      } catch (error) {
        if (error === 'Неверный формат или номер не существует') {
          setCarNumberError(error);
        } else {
          console.log(error);
          setUnknownError(error);
          setTimeout(() => setUnknownError(''), 3000);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePhoneBlur = async value => {
    setIinSuccess(false);
    if (value.length < 8) {
      setPhoneError('Неверный формат номера');
    } else if (value.length > 8 && iin.length === 12) {
      setPhoneError(false);
      setIinLoading(true);
      try {
        const userInfo = await getUserInfoByIin(phone, iin);
        if (userInfo.fioAndClass || userInfo.fioAndClass) {
          setIinSuccess(true);
        } else {
          setIinError('Ползователь не найден');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIinLoading(false);
      }
    }
  };

  const handleIinBlur = async value => {
    setIinSuccess(false);
    if (value.length !== 12) {
      setIinError('В ИИН должно быть 12 символов');
    } else if (value.length === 12 && phone.length < 8) {
      setPhoneError('Введите телефон');
      setIinError(false);
    } else {
      setIinLoading(true);
      setIinError(false);
      try {
        const userInfo = await getUserInfoByIin(phone, iin);
        if (userInfo.fioAndClass || userInfo.fioAndClass) {
          setIinSuccess(true);
        } else {
          setIinError('Ползователь не найден');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIinLoading(false);
      }
    }
  };

  const handleCarNumberBlur = async value => {
    setCarNumberSuccess(false);
    if (value.length < 5) {
      setCarNumberError('Неверный формат');
    } else {
      setCarNumberLoading(true);
      try {
        const { model, region, vin } = await getCarModelByNumber(carNumber);
        setCarNumberSuccess(true);
        setCarNumberError(false);
      } catch (error) {
        setCarNumberError('Автомобиль не найден');
      } finally {
        setIinLoading(false);
      }
      setCarNumberLoading(false);
    }
  };

  const handleAdditionalIin = async () => {
    setAdditionalIinLoading(true);
    try {
      const { model, region, vin } = await getCarModelByNumber(carNumber);
      await getPrePrice(
        carNumber,
        model.split(' ')[1],
        model.split(' ')[0],
        model.split(' ')[2],
        region,
        vin,
        additionalIin
      );
      const userInfo = await getAdditionalUser(iin, additionalIin);
      console.log('efwewf', userInfo);
    } catch (error) {
      setAdditionalIinError('Добавление невозможно');
    } finally {
      setAdditionalIinLoading(false);
    }
  };

  const changePersonalData = checked => {
    setPersonalData(checked);
  };

  const changeRulesAndProfile = checked => {
    setRulesAndProfile(checked);
  };

  const changePrivileges = checked => {
    setPrivileges(checked);
  };

  return (
    <Wrap>
      <Modal show={addDriverModal} onClose={() => setAddDriverModal(false)}>
        <Input
          type="text"
          label="ИИН водителя"
          onChange={value => setAdditionalIin(value)}
          errorMessage={additionalIinError}
          loading={additionalIinLoading}
          success={additionalIinSuccess}
        />
        <Button size="l" width="fluid" onClick={handleAdditionalIin}>
          Добавить водителя
        </Button>
      </Modal>
      <Text variant="h5" color="dark">
        Заполните поля ниже
      </Text>
      {unknownError && (
        <UnknownError>Произошла неизвестная ошибка</UnknownError>
      )}
      <Input
        type="text"
        label="Номер телефона"
        mask="phone"
        onChange={value => setPhone(value)}
        onBlur={handlePhoneBlur}
        errorMessage={phoneError}
      />
      <Input
        type="text"
        label="ИИН водителя"
        onChange={value => setIin(value)}
        onBlur={handleIinBlur}
        errorMessage={iinError}
        loading={iinLoading}
        success={iinSuccess}
        pattern="[0-9]*"
        inputmode="numeric"
      />
      {iinSuccess && carNumberSuccess && (
        <AddButton onClick={() => setAddDriverModal(true)}>
          + Добавить водителя
        </AddButton>
      )}
      <Checkbox
        label="Льготы для инвалидов и ветеранов"
        onChange={changePrivileges}
      />
      <Input
        type="text"
        label="Номер автомобиля"
        onChange={value => setCarNumber(value)}
        onBlur={handleCarNumberBlur}
        errorMessage={carNumberError}
        loading={carNumberLoading}
        success={carNumberSuccess}
        disabled={!iinSuccess}
      />
      <Checkbox
        label="Я соглашаюсь на сбор и обработку моих персональных данных, ознакомлен с правилами и анкетой"
        onChange={changePersonalData}
        required={personalDataError}
        checked={personalData}
      />
      <Checkbox
        label="Ознакомлен с правилами и анкетой"
        onChange={changeRulesAndProfile}
        required={rulesAndProfileError}
        checked={rulesAndProfile}
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
