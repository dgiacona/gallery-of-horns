import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';
class HornedBeast extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hearts: 0
      };
    };

handleHearts = () => {
  this.setState({
    hearts: this.state.hearts + 1,
    favorite: 'Photo added to favorites!'
  })
}

  render () {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.description}
        title={this.props.title}/>
        <p>{this.props.description}</p>
        <p>{this.state.hearts} 💜 </p>
        <p onClick={this.handleHearts}><Button>Favorite</Button></p>
      </article>
    )
  }
}

export default HornedBeast;