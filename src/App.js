import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Modal from 'react-bootstrap/Modal'
import data from './data.json';
import Footer from './Footer';
import './App.css'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        img: '',
        showModal: false,
        selectedHorn: '',
        selectedHornImg: ''
      }
    }

    handleOnHide = () => {
      this.setState({
        showModal: false
      });
    };

    handleOnShowModal = (title, image_url) => {
      this.setState({
        showModal: true,
        selectedHorn: title,
        selectedHornImg: image_url
      });
    };

  render() {
    return (
      <>
        <Header/>
        <Main
          data={data}
          handleOnShowModal={this.handleOnShowModal}
        />
        <Footer/>
        <Modal show={this.state.showModal}
        onHide={this.handleOnHide}
        >
        <Modal.Header closeButton>
          <Modal.Title>{this.state.selectedHorn}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img 
          className = 'img-fluid' src={this.state.selectedHornImg} alt={this.state.selectedHorn}>  
          </img>
        </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default App;
