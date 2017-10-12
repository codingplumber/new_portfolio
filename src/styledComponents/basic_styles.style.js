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

  @media (min-width: 450px) {
    padding: 25px 24px;
    font-size: 18px;
    line-height: 27px;
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

  @media (min-width: 450px) {
    height: 6em;
    width: 6em;
    background-size: 48px;
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
`;
