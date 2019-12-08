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
          <ContainerRight>
            Назарбаева проспект, 240В Самал 2, Медеуский район, Алматы, A26F8D3
            4 этаж
          </ContainerRight>
        </Contaner>
        <Contaner>
          <ContainerLeft>
            <EmailIcon />
          </ContainerLeft>
          <ContainerRight>info@ffins.kz</ContainerRight>
        </Contaner>
        <Contaner>
          <ContainerLeft>
            <PhoneIcon />
          </ContainerLeft>
          <ContainerRight>+7 701 031 65 35</ContainerRight>
        </Contaner>
      </Content>
    </Wrap>
  );
};

export default Layout(ContactsPage);
