import React from 'react';
import ModalDesc from './modal_desc';

const Modal = (props) => {
  return(
    <div className="modal">
      <div
        className="modal-close"
        onClick={props.closeModal}
      >X</div>
      <div className="modal-content">
        <img
          className="modal-img"
          src={props.project.img}
        />
        <ModalDesc project={props.project} />
      </div>
    </div>
  );
}

export default Modal;
