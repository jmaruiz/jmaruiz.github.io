import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';

class App extends Component {

  state = {
    choices: 5,
    win: false,
    buttons: []
  }

  render() {
    return (
      <div className="body">
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
