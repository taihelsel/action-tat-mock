import React, { Component } from 'react';
import '.././App.css';
class Landing extends Component {
  render() {
    return (
        <section id="landing">
            <video loop autoPlay className="landing-video">
                <source src={require(".././videos/tattoo-closeup.mp4")} type="video/mp4" />
            </video>
        </section>
    );
  }
}

export default Landing;
