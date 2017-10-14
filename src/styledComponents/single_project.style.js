import styled, { css } from 'styled-components';


export const GalleryImage = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;

  @media (min-width: 650px) {
    width: 47%;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;

  @media (min-width: 737px) {
    opacity: 1;
    transition: opacity .5s ease-in-out;
    -moz-transition: opacity .5s ease-in-out;
    -webkit-transition: opacity .5s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;
