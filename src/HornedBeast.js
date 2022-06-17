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

handleHeadlineClick = () => {
  this.props.handleOnShowModal(this.props.title, this.props.image_url)
}

  render () {
    return (
      <article>
        <h2 onClick={this.handleHeadlineClick}>{this.props.title}</h2>
        <img onClick={this.handleHearts} src={this.props.image_url} alt={this.props.description}
        title={this.props.title}></img>
        <p>{this.props.description}</p>
        <p>{this.state.hearts} 💜 </p>
      </article>
    )
  }
}

export default HornedBeast;