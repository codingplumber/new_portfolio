import styled, { css } from 'styled-components';

export const FooterBackground = styled.div`
  width: 100%;
  height: 150px;
  background-color: #39454b;
  color: rgba(185, 186, 187, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 19px;
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const Icons = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
