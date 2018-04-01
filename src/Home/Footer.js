import React, { Component } from 'react';
import '.././App.css';
class Footer extends Component {
  render() {
    return (
        <section id="home-footer">
            <ul className="home-footer-nav">
                <li>
                    <img src={require(".././images/artists-img.jpg")} />
                    <h1>Artists</h1>
                </li>
                <li>
                    <img src={require(".././images/calendar.jpeg")} />
                    <h1>Schedule an Appointment</h1>
                </li>
                <li>
                    <img src={require(".././images/gallery.jpg")} />
                    <h1>Shop Gallery</h1>    
                </li>
            </ul>
            <div className="home-footer-social">

            </div>
        </section>
    );
  }
}

export default Footer;
