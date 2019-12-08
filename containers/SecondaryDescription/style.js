import styled from 'styled-components';

export const Wrap = styled.div`
  margin: 50px 0;
  & > hr {
    width: 50%;
    height: 1px;
    background: ${({ theme }) => theme.colors.darkGray};
    margin: 0 auto;
    outline: none;
    border: none;
  }
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
