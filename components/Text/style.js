import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Heading2 = styled.h5`
  color: ${({ theme, color }) => theme.colors[color]};
`;
