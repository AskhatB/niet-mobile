import React from 'react';
import Link from 'next/link';
import LogoIcon from '../../icons/logoFooter';
import { Wrap, Copyright, Menu, MenuItem } from './style';

const Footer = () => {
  return (
    <Wrap>
      <Menu>
        <MenuItem>
          <Link href="/about">
            <a>О нас</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/contacts">
            <a>Контакты</a>
          </Link>
        </MenuItem>
      </Menu>
      <LogoIcon></LogoIcon>
      <Copyright>
        © Copyright 2019, niet.kz, официальный сайт.
        <br />
        Услуги страхования оказывает АО «СК «Freedom Finance Insurance».
        Лицензия №2.1.72 от 06.08.2019 года.
      </Copyright>
    </Wrap>
  );
};

export default Footer;
