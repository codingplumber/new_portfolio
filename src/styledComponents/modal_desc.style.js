import styled, { css } from 'styled-components';

export const ModalDescBackground = styled.div`
  width: 80%;
  padding: 20px 20px;
  background-color: #fff;
  line-height: 22px;
  border-radius: 5px;
`;

export const Text = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.span`
  font-size: 17px;
  font-weight: 900;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  -moz-transition: background-color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
  width: 120px;
  padding: 5px 5px;
  margin-top: 5px;
  background-color: #98c593;
  border-radius: 3.5em;
  text-align: center;

  &:hover {
    background-color: #a8cea4;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #ffffff;
`;
