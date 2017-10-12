import React from 'react';
import { Link } from 'react-router';
import {
  HeaderContainer,
  HeaderName,
  HeaderLinks,
  List,
  Item
} from '.././styledComponents/header.style'

const header = (props) => {
  return (
    <HeaderContainer>
      <HeaderName>
        Jason Stickel
      </HeaderName>

      <HeaderLinks>
        <List>
          <Item>Intro</Item>
          <Item to="/what_i_do">What I do</Item>
          <Item to="/who_i_am">Who I am</Item>
          <Item to="/gallery">My Work</Item>
          <Item to="/contact">Contact</Item>
        </List>
      </HeaderLinks>
    </HeaderContainer>
  );
}

export default header;
