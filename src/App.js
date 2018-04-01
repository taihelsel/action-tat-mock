import React, { Component } from 'react';
import './App.css';
/*React Components*/
import Nav from "./Nav/Nav.js";
import Home from  "./Home/Home.js";
class App extends Component {
  componentDidMount(){
    const landing = document.getElementById("landing");
    window.addEventListener("scroll", () => {
      const landing_bottom = landing.getBoundingClientRect().bottom;
      console.log(landing_bottom);
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
        <Home />
      </div>
    );
  }
}

export default App;
