import React from 'react';
import MapMarkIcon from '../../icons/mapMark';
import EmailIcon from '../../icons/email';
import PhoneIcon from '../../icons/phone';
import Layout from '../../components/Layout';
import {
  Wrap,
  Header,
  Content,
  Contaner,
  ContainerLeft,
  ContainerRight
} from './style';

const ContactsPage = () => {
  return (
    <Wrap>
      <Header>Контакты</Header>
      <Content>
        <Contaner>
          <ContainerLeft>
            <MapMarkIcon />
          </ContainerLeft>
          <ContainerRight>Кабанбай Батыра 89, офис 24</ContainerRight>
        </Contaner>
        <Contaner>
          <ContainerLeft>
            <EmailIcon />
          </ContainerLeft>
          <ContainerRight>helloniet35@gmail.com</ContainerRight>
        </Contaner>
        <Contaner>
          <ContainerLeft>
            <PhoneIcon />
          </ContainerLeft>
          <ContainerRight>+7 777 165 37 03</ContainerRight>
        </Contaner>
      </Content>
    </Wrap>
  );
};

export default Layout(ContactsPage);
