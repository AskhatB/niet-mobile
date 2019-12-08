import styled from 'styled-components';

export const Wrap = styled.div``;
export const Header = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 25px 0;
  color: ${({ theme }) => theme.colors.dark};
`;
export const Content = styled.div`
  color: ${({ theme }) => theme.colors.dark};
`;
