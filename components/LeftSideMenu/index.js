import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import CloseIcon from '../../icons/close';
import { Wrap, Header, Close, Menu, MenuItem } from './style';

const LeftSideMenu = props => {
  return (
    <Wrap show={props.show}>
      <Header>
        <Close onClick={props.close}>
          <CloseIcon />
        </Close>
      </Header>
      <Menu>
        <MenuItem>
          <Link href="/">
            <a>Главная</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/about">
            <a>О компании</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/contacts">
            <a>Контакты</a>
          </Link>
        </MenuItem>
      </Menu>
    </Wrap>
  );
};

LeftSideMenu.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func
};

export default LeftSideMenu;
