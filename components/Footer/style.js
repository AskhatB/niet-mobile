import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: calc(100% - 230px);
  padding: 0 16px;
  box-sizing: border-box;
  height: 230px;
  position: relative;
  background: ${({ theme }) => theme.colors.gray};
  overflow: hidden;
`;
export const Copyright = styled.div`
  position: absolute;
  bottom: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Menu = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const MenuItem = styled.div`
  font-size: 12px;
  text-decoration: underline;
  margin-right: 10px;
`;
