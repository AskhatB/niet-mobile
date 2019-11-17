import styled from 'styled-components';

export const Wrap = styled.label`
  display: block;
  width: 30px;
  min-width: 30px;
  height: 30px;
  min-height: 30px;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  overflow: hidden;
  & > input {
    display: none;
  }
  & > div {
    display: none;
    width: 100%;
    height: 100%;
    padding: 6px;
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.primary};
  }
  & > input:checked ~ div {
    display: block;
  }
`;
