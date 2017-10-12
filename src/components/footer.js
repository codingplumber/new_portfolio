import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
  FooterBackground,
  Link,
  Icons
} from '.././styledComponents/footer.style';

const Footer = () => {
  return (
    <FooterBackground>
      <Icons>
        <Link href="https://github.com/codingplumber">
          <FontAwesome className="icon fa-github" name="github" size="2x"/>
        </Link>
        <Link href="https://www.linkedin.com/in/jason-stickel/">
          <FontAwesome className="icon fa-linkedin" name="linkedin" size="2x"/>
        </Link>
      </Icons>
      <div style={{marginBottom: 22 + 'px'}}>
        <Link href="https://www.codewars.com/users/codingplumber"><img src="https://www.codewars.com/users/codingplumber/badges/small" alt="Codewars badge" /></Link>
      </div>
      <p>&copy; Jason Stickel</p>
    </FooterBackground>
  );
}

export default Footer;
