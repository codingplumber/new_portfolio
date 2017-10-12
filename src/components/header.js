import React from 'react';
import { Link } from 'react-router';

const header = (props) => {
  return (
    <div className="header">
      <div className="header-name">
        Jason Stickel
      </div>

      <div className="header-links">
        <ul>
          <li>Intro</li>
          <li to="/what_i_do">What I do</li>
          <li to="/who_i_am">Who I am</li>
          <li to="/gallery">My Work</li>
          <li to="/contact">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default header;
