import styled from 'styled-components';

export const Wrap = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray};
`;
