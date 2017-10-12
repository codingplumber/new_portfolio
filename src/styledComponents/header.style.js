import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 13px;
  background-color: rgba(255, 255, 255, 0.95);
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 5;
  color: #323d42;
  font-size: 16px;
  border-bottom: 1px solid #f1f1f1;

  @media (min-width: 737px) {
    font-size: 17px;
    padding: 18px 17px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderName = styled.div`
  font-weight: bold;
  letter-spacing: -0.5px;
`;

export const HeaderLinks = styled.div`
  display: none;
  width: 372px;
  font-weight: 300;
  font-size: 16px;

  @media (min-width: 737px) {
    display: block;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  -moz-transition: background-color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #bdbdbd;
  }
`;
