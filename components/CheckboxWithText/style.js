import styled from 'styled-components';

export const Wrap = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  margin-left: 15px;
  font-size: 12px;
`;
