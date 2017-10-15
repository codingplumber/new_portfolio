import styled, { css } from 'styled-components';

export const Desc = styled.div`
  color: #323d42;
  font-weight: 300;
  width: 90%;
  padding: 25px 20px;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: 16px;
  line-height: 25px;
  margin: auto;

  @media (min-width: 450px) {
    padding: 25px 24px;
    font-size: 18px;
    line-height: 27px;
  }

  @media (min-width: 737px) {
    position: absolute;
    line-height: 33px;
    background-color: white;
    top: calc(50% - 200px);
    right: 0;
    width: 65%;
    height: 400px;
    padding: 40px;
    transform-origin: right;
    transform: rotateY(0deg);
    transition: transform 1.75s;
    ${({ hide }) => hide && css`
      transform: rotateY(90deg);
    `}
  }
`;

export const Desc2 = styled(Desc)`
  @media (min-width: 737px) {
    right: auto;
    left: 0;
    transform-origin: left;
  }
`;

export const H3 = styled.p`
  color: #323d42;
  font-size: 25px;
  letter-spacing: -1.5px;
  font-weight: 900;
  margin-bottom: 22px;

  @media (min-width: 450px) {
    font-size: 35px;
    letter-spacing: -2.5px;
  }

  @media (min-width: 737px) {
    font-size: 48px;
    letter-spacing: -3px;
    margin-bottom: 36px;
  }
`;

export const MainBackground = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Arrow = styled.div`
  -moz-transition: background-color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
  border: solid 2px #e5e6e7;
  height: 5em;
  width: 5em;
  background-image: url(".././images/nav/dark-arrow.svg");
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 450px) {
    height: 6em;
    width: 6em;
    background-size: 48px;
  }

  @media (min-width: 737px) {
    height: 7em;
    width: 7em;
    background-size: 58px;
  }
`;

export const BottomArrow = styled(Arrow)`
  display: none;
  border-radius: 3em 3em 0 0;
  position: absolute;
  bottom: 0;
  border-bottom: none;

  @media (min-width: 650px) {
    display: block;
  }

  @media (min-width: 737px) {
    border-radius: 4em 4em 0 0;
  }
`;
