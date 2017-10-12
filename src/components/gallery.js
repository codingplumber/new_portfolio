import React from 'react';
import SingleProject from './single_project';
import {
  GalleryBackground,
  GalleryH3,
  GalleryImages
} from '.././styledComponents/gallery.style';

const Gallery = (props) => {
  const projectItems = props.projects.map(project => {
    return (
      <SingleProject
        key={project.name}
        project={project}
        openModal={props.openModal}
      />
    );
  });

  return (
    <GalleryBackground>
      <GalleryH3>My Work</GalleryH3>
      <GalleryImages>{projectItems}</GalleryImages>
    </GalleryBackground>
  );
}

export default Gallery;
