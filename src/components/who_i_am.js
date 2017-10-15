import React from 'react';
import WhenInView from './waypoint';
import {
  Desc2,
  H3,
  BottomArrow
} from '.././styledComponents/basic_styles.style';
import { WhoBackground, RevealP } from '.././styledComponents/who_i_am.style';

const WhoIAm = (props) => {
  return (
    <WhoBackground>
      <WhenInView>
        {({ isInView }) =>
          <Desc2 hide={!isInView}>
            <H3>Who I am</H3>
            <p>Hi, I'm Jason. I'm a newly minted full-stack JavaScript programmer. I'm a former plumber, turned military contractor, turned plumber again that had a desire to learn to code. I soon realized it was going to take me quite a while to reach the skill level needed to develop web pages professionally; so, I enrolled in DevMountain coding bootcamp in Provo, UT. It was one of the best decisions I ever made.</p>
          </Desc2>
        }
      </WhenInView>
      <BottomArrow onClick={() => props.toScroll('gallery')} />
    </WhoBackground>
  );
}

export default WhoIAm;
