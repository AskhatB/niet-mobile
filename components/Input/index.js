import React from 'react';
import PropTypes from 'prop-types';
import { Wrap, InputBlock, Label, InputWrap, ErrorMessage } from './style';

const Input = props => {
  let inputInitialValue = '';
  if (props.mask === 'phone') {
    inputInitialValue = '+7';
  }

  const [colorGray, setColorGray] = React.useState(false);
  const [focus, setFocus] = React.useState(
    props.initialValue || inputInitialValue
  );
  const [inputValue, setInputValue] = React.useState(
    props.initialValue || inputInitialValue
  );

  const onInputFocus = () => {
    setFocus(true);
    setColorGray(true);
  };

  const onInputBlur = e => {
    if (!e.target.value) {
      setFocus(false);
    }
    setColorGray(false);
  };

  const onInputChange = e => {
    setInputValue(e.target.value);
    props.onChange(e.target.value);
  };

  return (
    <Wrap>
      <InputWrap focus={colorGray} error={props.errorMessage}>
        <Label focus={focus}>{props.label}</Label>
        <InputBlock
          type={props.type}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChange={props.onChange}
          value={inputValue}
          onChange={props.onChange && onInputChange}
          readOnly={!props.onChange}
        />
      </InputWrap>
      {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </Wrap>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  mask: PropTypes.string,
  initialValue: PropTypes.string
};

export default Input;
