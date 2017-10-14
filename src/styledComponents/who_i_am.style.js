import styled, { css } from 'styled-components';
import { WhatBackground } from './what_i_do.style';

export const WhoBackground = styled(WhatBackground)`
  background: url(".././images/overlay.png"), url(".././images/who-i-am.jpg");
  background-size: cover;
  background-repeat: repeat, no-repeat;
  background-attachment: fixed;
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 3s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
