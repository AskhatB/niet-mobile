import styled from 'styled-components';

export const Wrap = styled.div`
  margin-bottom: 150px;
`;
export const Header = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 25px 0;
  color: ${({ theme }) => theme.colors.dark};
`;
export const Content = styled.div`
  color: ${({ theme }) => theme.colors.dark};
`;
export const Contaner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const ContainerLeft = styled.div`
  min-width: 35px;
`;
export const ContainerRight = styled.div`
  font-size: 14px;
`;