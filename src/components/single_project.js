import React from 'react';

const SingleProject = (props) => {
  return (
    <li className="gallery-image">
      <img
        src={props.project.img}
        onClick={() => props.openModal(props.project)}
      />
    </li>
  );
}

export default SingleProject;
