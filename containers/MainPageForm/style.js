import styled from 'styled-components';

export const Wrap = styled.div``;
export const UnknownError = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
`;
export const AddButton = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.link};
  margin-bottom: 15px;
  margin-left: 10px;
`;

export const CarNumberList = styled.div``;
export const CarNumberListItem = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.dark};
  font-weight: bold;
  margin-bottom: 5px;
`;
