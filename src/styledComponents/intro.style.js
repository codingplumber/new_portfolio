import styled, { css } from 'styled-components';
import { MainBackground, Arrow } from './basic_styles.style';

export const IntroBackground = styled(MainBackground)`
  padding: 15% 5% 0 5%;
  background: url(".././images/overlay.png"), url(".././images/intro.jpg");
  background-size: cover;
  background-repeat: repeat, no-repeat;
  background-attachment: fixed;
  color: #ffffff;

  @media (min-width: 450px) {
    padding: 20% 8% 0 8%;
  }
`;

export const Name = styled.p`
  font-weight: 900;
  font-size: 50px;
  letter-spacing: -2.5px;
  margin-bottom: 20px;

  @media (min-width: 450px) {
    font-size: 70px;
    letter-spacing: -3.5px;
  }
`;

export const Title = styled.p`
  font-size: 19px;
  margin-bottom: 20px;

  @media (min-width: 450px) {
    font-size: 24px;
  }
`;

export const Techs = styled.p`
  line-height: 24px;
  font-size: 16px;
  margin-bottom: 35px;
  text-align: center;

  @media (min-width: 450px) {
    line-height: 28px;
    font-size: 20px;
    margin-bottom: 44px;
  }
`;

export const IntroArrow = styled(Arrow)`
  border-radius: 3em;
`;
