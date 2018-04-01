import React, { Component } from 'react';
import '.././App.css';
class Nav extends Component {
  render() {
    return (
        <nav id="landing-nav">
            <ul className="left-nav">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Artists</a></li >
            </ul >
            <ul className="right-nav">
                <li className="nav-item"><a href="#">Gallery</a></li>
                <li className="nav-item"><a href="#">After Care</a></li>
                <li className="nav-item"><a href="#">Merchandise</a></li>
            </ul >
            <div className="nav-logo"><img src={require(".././images/action-tattoo-emblem.png")} alt="Action tattoo logo" /></div>
        </nav>
    );
  }
}

export default Nav;
