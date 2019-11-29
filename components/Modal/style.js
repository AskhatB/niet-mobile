import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const BackSurface = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ModalWrap = styled.div`
  position: absolute;
  background: #fff;
  width: 90%;
  padding: 20px;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
`;
