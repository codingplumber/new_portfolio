import styled, { css } from 'styled-components';
import { MainBackground } from './basic_styles.style';

export const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: black;
`;

export const WhoBackground = styled(MainBackground)`
  position: relative;
  background: url(".././images/overlay.png"), url(".././images/who-i-am.jpg");
  background-size: cover;
  background-repeat: repeat, no-repeat;
`;

// export const RevealP = styled.div`
//   position: relative;
//   &:after {
//     content: ' ';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100px;
//     height: 100px;
//     background-color: black;
//     transform-origin: left;
//     transform: rotateY(90deg);
//     transition: transform 1s;
//   }
//   ${({ hide }) => hide && css`
//     &:after {
//       transform: rotateY(0deg);
//     }
//   `}
// `;


//   position: relative;
//   &:after {
//     content: ' ';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: black;
//
//     transform-origin: left;
//     transform: rotateY(90deg);
//
//     transition: transform 1s;
//   }
//
//   ${({ hide }) => hide && css`
//     &:after {
//       transform: rotateY(0deg);
//     }
//   `}
// `;
