import React from 'react';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderName,
  HeaderLinks,
  List,
  Item
} from '.././styledComponents/header.style';

const header = (props) => {
  console.log(props.toScroll);
  return (
    <HeaderContainer>
      <HeaderName>Jason Stickel</HeaderName>
      <HeaderLinks>
        <List>
          <Item onClick={() => props.toScroll('intro')}>Intro</Item>
          <Item onClick={() => props.toScroll('what')}>What I do</Item>
          <Item onClick={() => props.toScroll('who')}>Who I am</Item>
          <Item onClick={() => props.toScroll('gallery')}>My Work</Item>
          <Item onClick={() => props.toScroll('contact')}>Contact</Item>
        </List>
      </HeaderLinks>
    </HeaderContainer>
  );
}

export default header;
