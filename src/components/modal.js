import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="modal">
        <div
          className="modal-close"
          onClick={this.props.closeModal}
        />
      </div>
    );
  }
}

export default Modal;
