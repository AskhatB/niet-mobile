import React from 'react';
import LogoIcon from '../../icons/logo';
import BurgerIcon from '../../icons/burger';
import LeftSideMenu from '../LeftSideMenu';
import { Wrap, Burger, Logo } from './style';

const Header = () => {
  const [sideMenuActive, setSideMenuActive] = React.useState(false);

  const showSideMenu = () => {
    setSideMenuActive(true);
  };

  const closeSideMenu = () => {
    setSideMenuActive(false);
  };

  return (
    <Wrap>
      <LeftSideMenu show={sideMenuActive} close={closeSideMenu} />
      <Burger onClick={showSideMenu}>
        <BurgerIcon />
      </Burger>
      <Logo>
        <LogoIcon></LogoIcon>
      </Logo>
    </Wrap>
  );
};

export default Header;
