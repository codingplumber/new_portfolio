import React from 'react';
import {
  GalleryImage,
  Image
} from '.././styledComponents/single_project.style';

const SingleProject = (props) => {
  return (
    <GalleryImage>
      <Image
        src={props.project.img}
        onClick={() => props.openModal(props.project)}
      />
    </GalleryImage>
  );
}

export default SingleProject;
