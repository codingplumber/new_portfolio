import React from 'react';

const ModalDesc = ({project}) => {
  return (
    <div className="modal-desc">
      <div className="modal-text">
        <span className="modal-title">Project:</span> {project.name}
      </div>
      <div className="modal-text">
        <span className="modal-title">Tech:</span> {project.tech}
      </div>
      <div className="modal-text">
        <span className="modal-title">Description:</span> {project.desc}
      </div>
      <div className="modal-link-container">
        <div className="modal-link">
          <a href={project.link}>Visit the site</a>
        </div>
      </div>
    </div>
  );
};

export default ModalDesc;
