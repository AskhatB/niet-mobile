import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 150px;
`;
export const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const MainTitle = styled.div`
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
`;
export const Description = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGray};
  text-align: center;
`;
