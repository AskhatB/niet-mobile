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
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.darkGray};
`;

export const Line = styled.div`
  position: absolute;
  top: calc(100% + 3px);
  display: block;
  width: 1px;
  height: 20px;
  background: ${({ theme }) => theme.colors.darkGray};
`;
export const Right = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  background: ${({ theme }) => theme.colors.gray};
  padding: 8px;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 6px;
  margin-left: 15px;
  width: 100%;
`;
