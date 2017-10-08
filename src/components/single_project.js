import React from 'react';

const SingleProject = (props) => {
  console.log('single: ', props)
  return (
    <li className="gallery-images">
      <img
        src={props.image}
        onClick={props.openModal}
      />
    </li>
  );
}

export default SingleProject;
