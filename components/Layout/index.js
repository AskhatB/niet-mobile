import React from 'react';
import Header from '../Header';
import { Wrap, Container } from './style';

const Layout = Component => {
  const NestedComponent = () => {
    return (
      <Wrap>
        <Header />
        <Container>
          <Component />
        </Container>
      </Wrap>
    );
  };
  return NestedComponent;
};

export default Layout;
