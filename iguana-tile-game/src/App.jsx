import React, { Component } from 'react';
import Game from './Game';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
       <h2>Iguana Tile Game</h2>
      <div className ="board">
          <Game />
      </div>
      </div>

    );
  }
}

export default App;
