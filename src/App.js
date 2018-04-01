import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Nav from "./Nav/Nav.js";
import Landing from "./Landing/Landing.js";
import About from  "./About/About.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;
