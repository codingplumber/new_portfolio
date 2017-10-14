import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header';
import Intro from './components/intro';
import WhatIDo from './components/what_i_do';
import WhoIAm from './components/who_i_am';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Footer from './components/footer';
import Modal from './components/modal';
import Service from './service';

class App extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.toScroll = this.toScroll.bind(this);

    this.state = {
      open: false,
      projects: Service,
      selectedProject: Service[0]
    }
  }

  closeModal(event) {
    this.setState({open: false});
  }

  openModal(project) {
    this.setState({
      open: true,
      selectedProject: project
    });
  }

  toScroll(location) {
    const element = document.getElementById(location)
    element.scrollIntoView({behavior: "smooth"});
  }

  render() {
    const show = {
      display: 'block'
    };
    const hide = {
      display: 'none'
    };
    return (
      <div>
        <div style={this.state.open === false ? hide : show}>
          <Modal
            value={this.state.open}
            closeModal={this.closeModal}
            project={this.state.selectedProject}
          />
        </div>
        <Header toScroll={this.toScroll} />
        <div id="intro">
          <Intro toScroll={this.toScroll} />
        </div>
        <div id="what">
          <WhatIDo toScroll={this.toScroll} />
        </div>
        <div id="who">
          <WhoIAm toScroll={this.toScroll} />
        </div>
        <div id="gallery">
          <Gallery
            value={this.state.open}
            projects={this.state.projects}
            openModal={this.openModal}
          />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}


  // componentDidMount() {
  //   Events.scrollEvent.register('begin', function() {
  //     console.log('begin', arguments);
  //   });
  //
  //   Events.scrollEvent.register('end', function() {
  //     console.log('end', arguments);
  //   });
  //
  //   scrollSpy.update();
  // }
  //
  // scrollToTop() {
  //   scroll.scrollToTop();
  // }
  //
  // componentWillUnmount() {
  //   Events.scrollEvent.remove('begin');
  //   Events.scrollEvent.remove('end');
  // }

// <BrowserRouter>
//   <div>
//     <Header />
//     <Route path="/intro" component={Intro} />
//     <Route path="/whatIDo" component={WhatIDo} />
//     <Route path="/whoIAm" component={WhoIAm} />
//     <Route path="/gallery" component={Gallery} />
//     <Route path="/contact" component={Contact} />
//     <Footer />
//   </div>
// </BrowserRouter>

ReactDOM.render(<App />, document.querySelector('.container'));
