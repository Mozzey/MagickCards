import React, { Component } from 'react';
import CheatCards from './components/cardComponents/CheatCards';
import Navbar from './components/navComponents/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar branding="Magick Cards" />
        <CheatCards />
      </div>
    );
  }
}

export default App;
