import React from 'react';

const SingleProject = (props) => {
  return (
    <li className="gallery-images">
      <img
        src={props.project.img}
        onClick={() => props.openModal(props.project)}
      />
    </li>
  );
}

export default SingleProject;
