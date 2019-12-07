import React from 'react';
import LogoIcon from '../../icons/logoFooter';
import { Wrap, Copyright } from './style';

const Footer = () => {
  return (
    <Wrap>
      <LogoIcon></LogoIcon>
      <Copyright>
        © Copyright 2019, niet.kz, официальный сайт.
        <br />
        Услуги страхования оказывает АО «СК «Freedom Finance Insurance».
        Лицензия №т2.1.72 от 06.08.2019 года.
      </Copyright>
    </Wrap>
  );
};

export default Footer;
