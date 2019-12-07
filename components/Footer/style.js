import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 20px;
  padding: 0 16px;
  box-sizing: border-box;
  height: 220px;
  position: relative;
  background: ${({ theme }) => theme.colors.gray};
`;
export const Copyright = styled.div`
  position: absolute;
  bottom: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
`;
