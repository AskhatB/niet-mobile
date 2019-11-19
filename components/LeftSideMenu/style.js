import styled from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  width: calc(100% - 32px);
  height: 100vh;
  ${({ show }) =>
    show
      ? 'transform: translate(0, 0);box-shadow: 32px 0px 37px rgba(0, 0, 0, 0.3);'
      : 'transform: translate(-100%, 0);'}
  left: 0;
  top: 0;
  background: #fff;

  transition: 0.2s;
`;
export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  background: ${({ theme }) => theme.colors.gray};
  padding: 0 15px;
  box-sizing: border-box;
`;

export const Close = styled.div``;

export const Menu = styled.div``;
export const MenuItem = styled.div`
  padding: 20px;
  margin: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;
