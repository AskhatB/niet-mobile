import styled from 'styled-components';

export const Wrap = styled.div`
  margin: 30px 0;
`;
export const FlexBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const Left = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
`;
export const Right = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-left: 15px;
`;
