import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Wrap, Container } from './style';

const Layout = Component => {
  const NestedComponent = () => {
    return (
      <Wrap>
        <Header />
        <Container>
          <Component />
        </Container>
        <Footer />
      </Wrap>
    );
  };
  return NestedComponent;
};

export default Layout;
