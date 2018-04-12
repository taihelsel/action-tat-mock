import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../.././App.css';
const BASE_URL = "/action-tat-mock";
class Nav extends Component {
  render() {
    return (
        <nav id="landing-nav">
            <ul className="left-nav">
                <li className="nav-item"><Link to={`${BASE_URL}`} >Home</Link></li>
                <li className="nav-item"><Link to={`${BASE_URL}/#about`} >About</Link></li>
                <li className="nav-item"><Link to={`${BASE_URL}/artists`} >Artists</Link></li>
            </ul >
            <ul className="right-nav">
                <li className="nav-item"><a href="#">Gallery</a></li>
                <li className="nav-item"><a href="#">After Care</a></li>
                <li className="nav-item"><a href="#">Merchandise</a></li>
            </ul >
            <div className="nav-logo"><img src={require("../.././images/action-tattoo-emblem.png")} alt="Action tattoo logo" /></div>
        </nav>
    );
  }
}

export default Nav;
