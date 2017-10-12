import styled, { css } from 'styled-components';
import { MainBackground } from './basic_styles.style';

export const WhatBackground = styled(MainBackground)`
  position: relative;
  background: url(".././images/overlay.png"), url(".././images/what-i-do.jpg");
  background-size: cover;
  background-repeat: repeat, no-repeat;
`;

export const Ul = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
