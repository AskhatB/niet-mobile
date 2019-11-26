import React from 'react';
import LogoIcon from '../../icons/logoFooter';
import { Wrap, Copyright } from './style';

const Footer = () => {
  return (
    <Wrap>
      <LogoIcon></LogoIcon>
      <Copyright>© Copyright 2019, niet.kz, официальный сайт.</Copyright>
    </Wrap>
  );
};

export default Footer;
