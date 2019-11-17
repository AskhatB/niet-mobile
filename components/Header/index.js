import React from 'react';
import LogoIcon from '../../icons/logo';
import BurgerIcon from '../../icons/burger';
import { Wrap, Burger, Logo } from './style';

const Header = () => {
  return (
    <Wrap>
      <Burger>
        <BurgerIcon />
      </Burger>
      <Logo>
        <LogoIcon></LogoIcon>
      </Logo>
    </Wrap>
  );
};

export default Header;
