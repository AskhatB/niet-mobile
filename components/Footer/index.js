import React from 'react';
import LogoIcon from '../../icons/logoFooter';
import { Wrap, Copyright } from './style';

const Footer = () => {
  return (
    <Wrap>
      <LogoIcon></LogoIcon>
      <Copyright>
        <p>© Copyright 2019, niet.kz, официальный сайт.</p>
        <p>
          Услуги страхования оказывает АО «СК «Freedom Finance Insurance».
          Лицензия №2.1.72 от 06.08.2019 года.
        </p>
      </Copyright>
    </Wrap>
  );
};

export default Footer;
