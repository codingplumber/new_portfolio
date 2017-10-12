import styled, { css } from 'styled-components';
import { WhatBackground } from './what_i_do.style';

export const WhoBackground = styled(WhatBackground)`
  background: url(".././images/overlay.png"), url(".././images/who-i-am.jpg");
  background-size: cover;
  background-repeat: repeat, no-repeat;
`;

export const RevealP = styled.div`
  position: absolute;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
