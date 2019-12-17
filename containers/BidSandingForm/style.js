import styled, { keyframes } from 'styled-components';

const onSlideLeft = keyframes`
  0% {
    transform: translate(100%, 0);
  } 
  100% {
    transform: translate(0, 0);
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  animation: ${onSlideLeft} 0.2s;
  overflow: auto;
`;

export const Layout = styled.div`
  margin: 0 16px;
`;
