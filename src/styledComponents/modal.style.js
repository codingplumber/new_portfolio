import styled, { css } from 'styled-components';

export const ModalBackground = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 5%;
`;

export const Close = styled.div`
  -moz-transition: background-color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  color: #323d42;

  &:before {
    content: "X";
  }

  &:hover {
    background-color: #d3d3d3;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60%;
    height: auto;
  }
`;

export const Image = styled.img`
  display: none;

  @media (min-width: 650px) {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 15px;

    // height: 60%;
    // width: auto;
  }
`;
