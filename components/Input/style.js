import styled from 'styled-components';
import InputMask from 'react-input-mask';

const borderType = ({ theme, focus, error }) => {
  if (focus && !error) {
    return theme.colors.gray;
  } else if (error) {
    return theme.colors.red;
  } else {
    return 'transparent';
  }
};

export const Wrap = styled.div`
  margin: 15px 0;
`;

export const InputWrap = styled.label`
  position: relative;
  display: block;
  background: ${({ theme, focus }) => (focus ? '#fff' : theme.colors.gray)};
  border-radius: 6px;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid ${borderType};
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

export const InputBlock = styled(InputMask)`
  background: transparent;
  outline: none;
  border: none;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  margin-top: 20px;
  width: 100%;
  display: block;
`;

export const Label = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.darkGray};
  top: 50%;

  ${props =>
    props.focus
      ? 'font-size: 12px;transform: translate(0, calc(-100% - 5px));'
      : 'font-size: 16px;transform: translate(0, -50%);'};
  transition: 0.2s;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-size: 12px;
  margin-top: 5px;
`;

export const LoaderWrap = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translate(0, -50%);
`;
