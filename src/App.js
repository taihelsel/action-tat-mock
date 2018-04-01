import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Nav from "./Nav/Nav.js";
import Home from  "./Home/Home.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
