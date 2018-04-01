import React, { Component } from 'react';
import '.././App.css';

/*React Components*/
import Landing from "./Landing.js";
import About from  "./About.js";
class Home extends Component {
  render() {
    return (
        <section id="Home">
            <Landing />
            <About />
        </section>
    );
  }
}

export default Home;
