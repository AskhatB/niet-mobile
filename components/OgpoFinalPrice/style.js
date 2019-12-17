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

export const PriceOne = styled.div`
  font-weight: bold;
`;

export const FlexBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const Text = styled.div`
  margin-top: 10px;
`;
