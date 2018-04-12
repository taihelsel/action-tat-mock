import React, { Component } from 'react';
import '../.././App.css';

/*React Components*/
import Landing from "./Landing.js";
class Artists extends Component {
  render() {
    return (
      <section id="artists-page">
            <Landing />
      </section>
    );
  }
}

export default Artists;
