import React from 'react';

import {
  Desc,
  H3,
  BottomArrow
} from '.././styledComponents/basic_styles.style';
import { WhatBackground, Ul } from '.././styledComponents/what_i_do.style';

const WhatIDo = () => {
  return (
    <WhatBackground>
      <Desc>
        <H3>What I do</H3>
        <p style={{marginBottom: 22 + 'px'}}>I build websites in JavaScript, React, Angular, Node, HTML, and CSS and love every minute of it.</p>
        <p>See my resume <a href="https://docs.google.com/document/d/1Z7g110_CEXv1EFnLAgH1xA6-DzFe2A5GAPvebiCKbcM/edit#"><Ul>here</Ul></a>.</p>
      </Desc>
      <BottomArrow />
    </WhatBackground>
  );
}

export default WhatIDo;
