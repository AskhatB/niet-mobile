import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/CheckboxWithText';
import Text from '../../components/Text';
import Modal from '../../components/Modal';
import Switcher from '../../components/Switcher';
import {
  Wrap,
  UnknownError,
  AddButton,
  CarNumberList,
  CarNumberListItem
} from './style';

import getUserInfoByIin from '../../controllers/getUserInfoByIin';
import getAdditionalUser from '../../controllers/getAdditionalUser';
import getCarModelByNumber from '../../controllers/getCarModelByNumber';
import getCarModelByDataSheet from '../../controllers/getCarModelByDataSheet';
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
  const [iinList, setIinList] = React.useState([]);

  const [additionalIin, setAdditionalIin] = React.useState('');
  const [additionalIinError, setAdditionalIinError] = React.useState();
  const [additionalIinLoading, setAdditionalIinLoading] = React.useState(false);
  const [additionalIinSuccess, setAdditionalIinSuccess] = React.useState(false);

  const [carNumber, setCarNumber] = React.useState('');
  const [carNumberError, setCarNumberError] = React.useState();
  const [carNumberLoading, setCarNumberLoading] = React.useState(false);
  const [carNumberSuccess, setCarNumberSuccess] = React.useState(false);

  const [carDataSheet, setCarDataSheet] = React.useState('');
  const [carDataSheetError, setCarDataSheetError] = React.useState();
  const [carDataSheetLoading, setCarDataSheetLoading] = React.useState(false);
  const [carDataSheetSuccess, setCarDataSheetSuccess] = React.useState(false);

  const [carInfoTab, setCarInfoTab] = React.useState(0);

  const [additionalCarNumber, setAdditionalCarNumber] = React.useState('');
  const [
    additionalCarNumberError,
    setAdditionalCarNumberError
  ] = React.useState('');
  const [
    additionalCarNumberLoading,
    setAdditionalCarNumberLoading
  ] = React.useState(false);
  const [
    additionalCarNumberSuccess,
    setAdditionalCarNumberSuccess
  ] = React.useState(false);
  const [carNumberList, setCarNumberList] = React.useState([]);
  const [addCarNumberModal, setAddCarNumberModal] = React.useState(false);

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
        const { model } = await getCarModelByNumber(carNumber);
        const userInfo = await getUserInfoByIin(phone, iin);
        await getPrePrice(carNumberList, iin);
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
    } else {
      setPhoneError(false);
      if (iin.length === 12) {
        setIinLoading(true);
        try {
          const userInfo = await getUserInfoByIin(phone, iin);
          if (userInfo.fioAndClass) {
            setIinSuccess(true);
            setIinList(prev => [...new Set([...prev, userInfo.fioAndClass])]);
          } else {
            setIinError('Ползователь не найден');
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIinLoading(false);
        }
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
        if (userInfo.fioAndClass) {
          setIinSuccess(true);
          setIinList(prev => [...new Set([...prev, userInfo.fioAndClass])]);
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

  const handleCarDataSheetBlur = async value => {
    setCarDataSheetSuccess(false);
    if (value.length < 7) {
      setCarDataSheetError('Необходимо 8 символов');
    } else {
      setCarDataSheetLoading(true);
      try {
        const data = await getCarModelByDataSheet(carDataSheet);
        console.log('cdw', data);
        setCarDataSheetSuccess(true);
        setCarDataSheetError(false);
      } catch (error) {
        console.log('ereere', error);
        setCarDataSheetError(error);
      } finally {
        setCarDataSheetLoading(false);
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
        setCarNumberList(prev => [
          ...prev,
          {
            carMark: model.split(' ')[0],
            carModel: model.split(' ')[1],
            carYear: model.split(' ')[2],
            region,
            vin,
            carNumber
          }
        ]);
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

  const handleAdditionalCarNumberBlur = () => {};

  const handleAdditionalIin = async () => {
    setAdditionalIinLoading(true);
    try {
      await getPrePrice(carNumberList, iin);
      const { data } = await getAdditionalUser(iin, additionalIin);
      console.log('user additinal info ===>', data);
      if (data.response) {
        setIinList(prev => [...new Set([...prev, data.response])]);
        setAddDriverModal(false);
      }
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

  const handleAdditionalCarNumber = async value => {
    setAdditionalCarNumberSuccess(false);
    if (additionalCarNumber.length < 5) {
      setAdditionalCarNumberError('Неверный формат');
    } else {
      setAdditionalCarNumberLoading(true);
      try {
        const { model, region, vin } = await getCarModelByNumber(
          additionalCarNumber
        );
        setCarNumberList(prev => [
          ...prev,
          {
            carMark: model.split(' ')[0],
            carModel: model.split(' ')[1],
            carYear: model.split(' ')[2],
            region,
            vin,
            carNumber
          }
        ]);
        setAdditionalCarNumberSuccess(true);
        setAdditionalCarNumberError(false);
        setAddCarNumberModal(false);
      } catch (error) {
        setAdditionalCarNumberError('Автомобиль не найден');
      } finally {
        setAdditionalCarNumberLoading(false);
      }
      setCarNumberLoading(false);
    }
  };

  const onAddCarNumberModalClose = () => {
    setAddCarNumberModal(false);
  };

  const handleCarInfoTabChange = active => {
    setCarInfoTab(active);
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
      <Modal show={addCarNumberModal} onClose={onAddCarNumberModalClose}>
        <Input
          type="text"
          label="Номер автомобиля"
          onChange={value => setAdditionalCarNumber(value)}
          onBlur={handleAdditionalCarNumberBlur}
          errorMessage={additionalCarNumberError}
          loading={additionalCarNumberLoading}
          success={additionalCarNumberSuccess}
          upperCase
        />
        <Button size="l" width="fluid" onClick={handleAdditionalCarNumber}>
          Добавить автомобиль
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
        mask="+7 (999) 999 99 99"
        pattern="[0-9]*"
        inputmode="numeric"
        maskChar=" "
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
        mask="999999999999"
        maskChar=""
      />
      <CarNumberList>
        {iinList.map(val => (
          <CarNumberListItem>{val}</CarNumberListItem>
        ))}
      </CarNumberList>
      {iinSuccess && carNumberSuccess && (
        <AddButton onClick={() => setAddDriverModal(true)}>
          + Добавить водителя
        </AddButton>
      )}
      <Checkbox
        label="Льготы для инвалидов и ветеранов"
        onChange={changePrivileges}
      />
      <Switcher
        tabs={['Номер авто', 'СРТС']}
        onTabChange={handleCarInfoTabChange}
      ></Switcher>
      {carInfoTab === 0 ? (
        <Input
          type="text"
          label="Номер автомобиля"
          onChange={value => setCarNumber(value)}
          onBlur={handleCarNumberBlur}
          errorMessage={carNumberError}
          loading={carNumberLoading}
          success={carNumberSuccess}
          disabled={!iinSuccess}
          upperCase
        />
      ) : (
        <Input
          type="text"
          label="Введите номер техпаспорта"
          onChange={value => setCarDataSheet(value)}
          onBlur={handleCarDataSheetBlur}
          errorMessage={carDataSheetError}
          loading={carDataSheetLoading}
          success={carDataSheetSuccess}
          disabled={!iinSuccess}
          upperCase
        />
      )}

      <CarNumberList>
        {carNumberList.map(val => (
          <CarNumberListItem>
            {val.carMark} {val.carModel} {val.carYear} {val.carNumber}
          </CarNumberListItem>
        ))}
      </CarNumberList>
      {iinSuccess && carNumberSuccess && (
        <AddButton onClick={() => setAddCarNumberModal(true)}>
          + Добавить автомобиль
        </AddButton>
      )}
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
