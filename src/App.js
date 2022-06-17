import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Modal from 'react-bootstrap/Modal'
import data from './data.json';
import ListGroup from 'react-bootstrap/ListGroup'
import Footer from './Footer';
import './App.css'
import { ListGroupItem } from 'react-bootstrap';


let hornArray = [1, 2, 3, 100];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hoeToSort: '',
      img: '',
      showModal: false,
      selectedHorn: '',
      sortedHorns: hornArray,
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
  
  handleSubmit = (event) => {
    event.preventDefault();
    let name = event.target.name.value
    let selected = event.target.selected.value;
    console.log(name);
    console.log(selected);
    this.setState({
      name: name,
      hoeToSort: selected
    });
  }

  handleInput = (event) => {
    let name = event.target.value;
    this.setState({
      name: name
    });
  }

  handleSelect = event => {
    let selected = event.target.value;
    console.log(selected);
    if (selected === 'One-Horn') {
  
    } else if (selected === 'Two-Horns') {

    } else if (selected === 'Three-Horns') {

    } else if (selected === '100-Horns') {

    } else {

    }
  }


  render() {
    console.log('From State:' + this.state.name);

  let numbers = this.state.sortedHorns.map((num, idx) => {
    return <ListGroup.Item key={idx}>{num} - {hornArray[idx]}</ListGroup.Item>
  })

  return(
      <>
        <Header/>
        <Main
          data={data}
          handleOnShowModal={this.handleOnShowModal}
        />
        <main>
          <ListGroup>
            {numbers}
          </ListGroup>

          <form onSubmit={this.handleSubmit}>
            <label>Name:
              <input type="text" name="name" onInput={this.handleInput}/>
            </label>
            <fieldset>
              <legend>Select Number of Horns</legend>
              <select name="selected" onChange={this.handleSelect}>
                <option value="all">All</option>
                <option value="One-Horn">One Horn</option>
                <option value="Two-Horns">Two Horns</option>
                <option value="Three-Horns">Three Horns</option>
                <option value="100 Horns">100 Horns</option>
              </select>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </main>
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
