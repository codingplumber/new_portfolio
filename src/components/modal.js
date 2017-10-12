import React from 'react';
import ModalDesc from './modal_desc';
import {
  ModalBackground,
  Close,
  Content,
  Image
} from '.././styledComponents/modal.style';

const Modal = (props) => {
  return(
    <ModalBackground>
      <Close onClick={props.closeModal} />
      <Content>
        <Image src={props.project.img} />
        <ModalDesc project={props.project} />
      </Content>
    </ModalBackground>
  );
}

export default Modal;
