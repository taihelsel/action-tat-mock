import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
/*React Components*/
import Nav from "./components/Nav/Nav.js";
import Home from  "./components/Home/Home.js";
class App extends Component {
  componentDidMount(){
    const landing = document.getElementById("landing");
    window.addEventListener("scroll", () => {
      const landing_bottom = landing.getBoundingClientRect().bottom;
      if(landing_bottom<450){
        //Set nav logo inside nav
        document.getElementsByClassName("nav-logo")[0].classList.add("nav-logo-inset");
      }else{
        document.getElementsByClassName("nav-logo")[0].classList.remove("nav-logo-inset");
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
