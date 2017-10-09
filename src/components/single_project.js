import React from 'react';

const SingleProject = (props) => {
  return (
    <li className="gallery-images">
      <img
        src={props.project.img}
        onClick={props.openModal}
      />
    </li>
  );
}

export default SingleProject;
