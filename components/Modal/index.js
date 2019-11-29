import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../icons/close';
import { Wrap, ModalWrap, CloseButton, BackSurface } from './style';

const Modal = props => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const onClose = () => {
    setShow(false);
    if (props.onClose) props.onClose();
  };

  const onShow = () => {
    setShow(true);
  };

  return (
    <Wrap show={show}>
      <BackSurface onClick={onClose}></BackSurface>
      <ModalWrap>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        {props.children}
      </ModalWrap>
    </Wrap>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  show: PropTypes.bool,
  onClose: PropTypes.func
};

export default Modal;
