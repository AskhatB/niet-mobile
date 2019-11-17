import React from 'react';
import Link from 'next/link';
import { Wrap, Content, Heading } from './style';

const SecondaryDescription = () => {
  return (
    <Wrap>
      <Heading>Почему мы?</Heading>
      <Content>
        <span style={{ color: '#333' }}>Онлайн страхование.</span> Вам больше не
        надо ехать в офис чтобы оформить страховку. Вы можете сделать это со
        своего телефона. Введя все лишь номер телефона, ИИН и гос номер
        автомобиля
      </Content>
      <Content>
        <span style={{ color: '#333' }}>Личный кабинет.</span> У всех клиентов
        компании есть личный кабинет на сайте, где можно скачать полис, узнать,
        его условия и подать заявление о страховом случае онлайн
      </Content>
      <hr />
      <Heading>Зарабатывай вместе с нами</Heading>
      <Content>
        Отправь реферальную ссылку своим друзьям и получай кэш-бэк с их покупок
        на свою карту
      </Content>
      <Link href="">Подробнее</Link>
    </Wrap>
  );
};

export default SecondaryDescription;
