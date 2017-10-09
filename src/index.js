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

    this.state = {
      open: false,
      projects: Service,
      selectedProject: Service[0]
    }

        console.log('selectedProject: ', this.state.selectedProject)
  }

  closeModal(event) {
    this.setState({open: false});
    console.log('app: ', this.state.open);
  }

  openModal(event) {
    this.setState({open: true});
    console.log('app: ', this.state.open);
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
        <div             style={this.state.open === false ? hide : show}>
          <Modal
            value={this.state.open}
            closeModal={this.closeModal}
            project={this.state.selectedProject}
          />
        </div>
        <Header />
        <Intro />
        <WhatIDo />
        <WhoIAm />
        <Gallery
          value={this.state.open}
          projects={this.state.projects}
          openModal={this.openModal}
        />
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
