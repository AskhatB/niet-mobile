import styled from 'styled-components';

export const Btn = styled.button`
  display: block;
  width: ${props => props.width};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.dark};
  ${props => props.size === 'l' && 'height: 60px;'};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  margin: 15px 0;
  outline: none;
  border: none;
  border-radius: 6px;
  &:disabled {
    opacity: 0.5;
  }
`;
