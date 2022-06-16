import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {
    let horns = this.props.data.map((horn, idx) => {
      return <HornedBeast
        image_url={horn.image_url}
        title={horn.title}
        description={horn.description}
        key={idx}
        handleOnShowModal={this.props.handleOnShowModal}
      />
    })
    return (
      <main>
        {horns}
      </main>
    );
  }
}

export default Main;