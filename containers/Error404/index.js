import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import { Wrap, MainTitle, Description, StyledLink } from './style';

const Error404 = () => {
  return (
    <>
      <Header />
      <Wrap>
        <MainTitle>404</MainTitle>
        <Description>Страница с таким адресом не найдена</Description>
        <StyledLink>
          <Link href="/">
            <a>На главную</a>
          </Link>
        </StyledLink>
      </Wrap>
    </>
  );
};

export default Error404;
