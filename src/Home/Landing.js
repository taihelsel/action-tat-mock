import React, { Component } from 'react';
import '.././App.css';
class Landing extends Component {
  render() {
    return (
        <section id="landing">
            <ul className="landing-links">
            <li className="landing-link-item"><a>View Shop Gallery</a></li>
                <li className="landing-link-item"><a>Book Now</a></li>
            </ul>
            <video loop autoPlay className="landing-video">
                <source src={require(".././videos/tattoo-closeup.mp4")} type="video/mp4" />
            </video>
        </section>
    );
  }
}

export default Landing;
