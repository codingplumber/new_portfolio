import React from 'react';
import WhenInView from './waypoint';
import {
  Desc,
  H3,
  BottomArrow
} from '.././styledComponents/basic_styles.style';
import { WhatBackground, Ul } from '.././styledComponents/what_i_do.style';

const WhatIDo = (props) => {
  return (
    <WhatBackground>
      <WhenInView>
        {({ isInView }) =>
          <Desc hide={!isInView}>
            <H3>What I do</H3>
            <p style={{marginBottom: 22 + 'px'}}>I build websites in JavaScript, Angular, Node, HTML, and CSS and love every minute of it. In fact, I am learning React right now, and I built this portfolio in it!</p>
            <p>See my resume <a href="https://docs.google.com/document/d/1Z7g110_CEXv1EFnLAgH1xA6-DzFe2A5GAPvebiCKbcM/edit?usp=sharing"><Ul>here</Ul></a>.</p>
          </Desc>
        }
      </WhenInView>
      <BottomArrow onClick={() => props.toScroll('who')} />
    </WhatBackground>
  );
}

export default WhatIDo;
