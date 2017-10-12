import styled, { css } from 'styled-components';
import { H3 } from '.././styledComponents/basic_styles.style';

export const GalleryBackground = styled.div`
  background-color: #f5f6f7;
`;

export const GalleryH3 = styled(H3)`
  text-align: center;
  padding: 40px 0;
  margin-bottom: 0;
`;

export const GalleryImages = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 650px) {
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 0 2%;
  }
`;
