import React from 'react';
import ModalDesc from './modal_desc';

const Modal = (props) => {
  return(
    <div className="modal">
      <div
        className="modal-close"
        onClick={props.closeModal}
      />
      <ModalDesc project={props.project} />
    </div>
  );
}

export default Modal;
