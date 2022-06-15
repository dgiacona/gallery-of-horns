import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let horns = []
    data.map((horn, idx) => {
      horns.push(
        <HornedBeast
          image_url={horn.image_url}
          title={horn.title}
          description={horn.description}
          key={idx}
        />
      )
    })
    return (
      <main>
        {horns}
      </main>
    );
  }
}

export default Main;