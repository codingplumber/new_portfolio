import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Intro from './components/intro';
import WhatIDo from './components/what_i_do';
import WhoIAm from './components/who_i_am';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <WhatIDo />
      <WhoIAm />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
