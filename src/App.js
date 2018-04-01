import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Nav from "./Nav/Nav.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
