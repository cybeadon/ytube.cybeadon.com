import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getVideoInfo } from './lib/util'

class App extends Component {

  componentDidMount() {
    getVideoInfo('https://www.youtube.com/watch?v=oSSyLNb8jA8')
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
