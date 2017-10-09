import React from 'react';
import SingleProject from './single_project';

const Gallery = (props) => {
  console.log('props: ', props)
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
    <div className="gallery">
      <h3>My Work</h3>
      <ul>{projectItems}</ul>
    </div>
  );
}

export default Gallery;
