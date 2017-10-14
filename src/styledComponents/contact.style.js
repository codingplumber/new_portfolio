import styled, { css } from 'styled-components';
import { H3 } from '.././styledComponents/basic_styles.style';

export const ContactBackground = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f6f7;

  @media (min-width: 737px) {
    position: relative;
    height 500px;
  }
`;

export const ContactH3 = styled(H3)`
  padding: 25px 0 40px 0;
  margin-bottom: 0;

  @media (min-width: 737px) {
    position: absolute;
    top: 0px;
  }
`;

export const Box = styled.div`
  -moz-transition: -moz-transform 1s ease;
  -webkit-transition: -webkit-transform 1s ease;
  -ms-transition: -ms-transform 1s ease;
  transition: transform 1s ease;
  -moz-transform: translateY(0);
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  position: relative;
  width: 90%;
  display: flex;
  justify-content: center;
  padding: 15px 15px 35px 15px;
  background: #ffffff;
  color: #39454b;

  @media (min-width: 737px) {
    height: 400px;
    width: 700px;
    position: absolute;
    bottom: 0;
    right: calc(50% - 350px);
    margin: auto;
    transform-origin: bottom;
    transform: rotateX(0deg);
    transition: transform 1.75s;
    ${({ hide }) => hide && css`
      transform: rotateX(90deg);
    `}
  }
`;

export const UserInfo = styled.div`
  @media (min-width: 650px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Field = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -webkit-transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -ms-transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
  display: block;
  width: 100%;
  padding: 12px;
  background: none;
  border: solid 2px #e5e6e7;
  color: inherit;
  border-radius: 0.5em;
  margin-bottom: 18px;
  font-size: 15px;
  color: #323d42;
`;

export const TextBox = styled.textarea`
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -webkit-transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -ms-transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: border-color 0.2s ease-in-out, color 0.2s ease-in-out;
  display: block;
  width: 100%;
  padding: 12px;
  background: none;
  border: solid 2px #e5e6e7;
  color: inherit;
  border-radius: 0.5em;
  margin-bottom: 18px;
  font-size: 15px;
  color: #323d42;
  height: 170px;
  resize: none;

  @media (min-width: 737px) {
    height: 215px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: background-color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
  width: 165px;
  height: 58px;
  border-radius: 3.5em;
  background-color: #98c593;
  text-align: center;
  color: #ffffff;
  outline: 0;
  cursor: pointer;
  border: 0;
  font-size: 15px;
  font-weight: 300;

  &:hover {
    background-color: #a8cea4;
  }
`;
