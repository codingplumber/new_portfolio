import React from 'react';
import SingleProject from './single_project';

const Gallery = (props) => {
  console.log('props: ', props)
  const projectItems = props.projects.map(project => {
    return (
      <SingleProject
        key={project.name}
        image={project.img}
        openModal={props.openModal}
        // onClick={props.openModal}
      />
    );
  });
  console.log('here: ', projectItems)

  return (
    <div className="gallery">
      <h3>My Work</h3>
      <ul>{projectItems}</ul>
    </div>
  );
}

// <img
//   src=".././images/gallery/DixieChickenClone.png"
//   onClick={this.props.openModal}
// />
// <img src=".././images/gallery/StanceClone.png" />
// <img src=".././images/gallery/DixieChickenClone.png" />

export default Gallery;
