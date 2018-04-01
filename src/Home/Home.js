import React, { Component } from 'react';
import '.././App.css';

/*React Components*/
import Landing from "./Landing.js";
import About from  "./About.js";
import Footer from "./Footer.js";
class Home extends Component {
  render() {
    return (
        <section id="Home">
            <Landing />
            <About />
            <Footer />
        </section>
    );
  }
}

export default Home;
