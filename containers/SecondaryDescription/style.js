import styled from 'styled-components';

export const Wrap = styled.div`
  margin: 50px 0;
`;

export const Content = styled.div`
  font-weight: bold;
  margin: 25px 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;
export const Heading = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
`;
