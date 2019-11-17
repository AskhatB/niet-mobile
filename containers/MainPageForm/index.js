import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/CheckboxWithText';
import Text from '../../components/Text';
import { Wrap } from './style';

import getUserInfoByIin from '../../controllers/getUserInfoByIin';

const MainForm = () => {
  return (
    <Wrap>
      <Text variant="h5" color="dark">
        Заполните поля ниже
      </Text>
      <Input
        type="text"
        label="Номер телефона"
        errorMessage="Неверный формат"
        mask="phone"
        onChange={value => console.log(value)}
      />
      <Input type="text" label="ИИН водителя" />
      <Checkbox label="Льготы для инвалидов и ветеранов" />
      <Input type="text" label="Номер автомобиля" />
      <Checkbox label="Я соглашаюсь на сбор и обработку моих персональных данных, ознакомлен с правилами и анкетой" />
      <Checkbox label="Ознакомлен с правилами и анкетой" />
      <Button size="l" width="fluid" onClick={() => getUserInfoByIin('A858XRO')}>
        Далее
      </Button>
    </Wrap>
  );
};

export default MainForm;
