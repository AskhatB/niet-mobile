import App from 'next/app';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 0;
    padding: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }

  input, textarea, label, a {
    -webkit-tap-highlight-color: transparent;
  }
`;

const theme = {
  fontFamily: "'Roboto', sans-serif",
  colors: {
    primary: '#ffdd2d',
    dark: '#333',
    gray: '#eef2f7',
    darkGray: '#9299a2',
    red: '#dd5656',
    link: '#5485b8',
    green: '#22a053'
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
