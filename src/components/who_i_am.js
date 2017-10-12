import React, { Component, PropTypes } from 'react';

import WhenInView from './waypoint';
import {
  Desc,
  H3,
  BottomArrow
} from '.././styledComponents/basic_styles.style';
import { WhoBackground } from '.././styledComponents/who_i_am.style';


class WhoIAm extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WhoBackground>
        <WhenInView>
          {({ isInView }) =>
          <Desc hide={!isInView}>
            <H3>Who I am</H3>
            <p>Hi, I'm Jason. I'm a newly minted full-stack JavaScript programmer temporarily based in Chattanooga, TN. I'm a former plumber, turned military contractor, turned plumber again that had a desire to learn to code. I started with Python while in Community College, and some time later transitioned into JavaScript. I soon realized it was going to take me quite a while to reach the skill level needed to develop web pages professionally; so, I enrolled in DevMountain coding bootcamp in Provo, UT. It was one of the best decisions I ever made.</p>
          </Desc>
          }
        </WhenInView>
        <BottomArrow />
      </WhoBackground>
    );
  }

  // render() {
  //   return (
  //     <div className="who-i-am main-background">
  //     <WhenInView>
  //       {({ isInView }) =>
  //       <div hide={!isInView} className="desc">
  //         <h3>Who I am</h3>
  //         <p>Hi, I'm Jason. I'm a newly minted full-stack JavaScript programmer temporarily based in Chattanooga, TN. I'm a former plumber, turned military contractor, turned plumber again that had a desire to learn to code. I started with Python while in Community College, and some time later transitioned into JavaScript. I soon realized it was going to take me quite a while to reach the skill level needed to develop web pages professionally; so, I enrolled in DevMountain coding bootcamp in Provo, UT. It was one of the best decisions I ever made.</p>
  //       </div>
  //       }
  //     </WhenInView>
  //       <div className="arrow arrow-bottom"></div>
  //     </div>
  //   );
  // }

}

export default WhoIAm;
