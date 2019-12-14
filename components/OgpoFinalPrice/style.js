import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Price = styled.div`
  ${({ discount, theme }) =>
    !discount &&
    `color: ${theme.colors.dark};font-weight: bold;font-size: 32px;`}
  ${({ discount, theme }) =>
    discount &&
    `text-decoration: line-through; color: ${theme.colors.darkGray};`}
`;

export const Text = styled.div``;
