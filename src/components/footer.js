import React from 'react';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://github.com/codingplumber">
          <FontAwesome className="icon fa-github" name="github" size="2x"/>
        </a>
        <a href="https://www.linkedin.com/in/jason-stickel/">
          <FontAwesome className="icon fa-linkedin" name="linkedin" size="2x"/>
        </a>
      </div>
      <div className="codewars">
        <a href="https://www.codewars.com/users/codingplumber"><span className="label"><img src="https://www.codewars.com/users/codingplumber/badges/small" alt="Codewars badge" /></span></a>
      </div>
      <p>&copy; Jason Stickel</p>
    </div>
  );
}

// <li><a href="https://github.com/codingplumber" className="icon fa-github"><span className="label">Github</span></a></li>
// <li><a href="https://www.linkedin.com/in/jason-stickel/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>

export default Footer;
