import React from 'react';
import {
  IntroBackground,
  Name,
  Title,
  Techs,
  IntroArrow
} from '.././styledComponents/intro.style';

const Intro = (props) => {
  return (
    <IntroBackground>
      <Name>Jason Stickel</Name>
      <Title>Full-Stack Web Developer</Title>
      <Techs>JavaScript, Angular, React, Node, jQuery, HTML5/CSS3 & RESTful APIs</Techs>
      <IntroArrow onClick={() => props.toScroll('what')} />
    </IntroBackground>
  );
}

export default Intro;
