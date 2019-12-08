import styled from 'styled-components';

export const Wrap = styled.div``;
export const CollapseTab = styled.div`
  color: ${({ theme, active }) =>
    active ? theme.colors.dark : theme.colors.darkGray};
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 10px 0;
`;
export const CollapseData = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark};
  padding: 20px 0;
`;
export const Accordion = styled.div``;
export const AccordionItem = styled.div``;
export const CollapseAnimationBlock = styled.div`
  max-height: ${({ active }) => (active ? '100%' : '0')};
  overflow: hidden;
`;
