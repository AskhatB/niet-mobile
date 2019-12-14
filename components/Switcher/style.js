import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
`;
export const Item = styled.div`
  font-size: 14px;
  width: 50%;
  text-align: center;
  line-height: 40px;
  background: ${({ theme, active }) => active && theme.colors.primary};
  box-shadow: 1px 0 0 0 ${({ theme }) => theme.colors.primary};
  &:last-child {
    box-shadow: none;
  }
`;
