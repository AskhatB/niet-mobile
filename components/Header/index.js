import React from 'react';
import LogoIcon from '../../icons/logo';
import BurgerIcon from '../../icons/burger';
import LeftSideMenu from '../LeftSideMenu';
import Link from 'next/link';
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
      <Link href="/">
        <Logo>
          <LogoIcon></LogoIcon>
        </Logo>
      </Link>
    </Wrap>
  );
};

export default Header;
