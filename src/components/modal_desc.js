import React from 'react';

const ModalDesc = ({project}) => {
  return (
    <div className="modal-desc">
      <p>
        <span>Project:</span> {project.name}
      </p>
      <p>
        <span>Tech:</span> {project.tech}
      </p>
      <p>
        <span>Description:</span> {project.desc}
      </p>
    </div>
  );
};

export default ModalDesc;
