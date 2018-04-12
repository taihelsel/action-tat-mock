import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
/*React Components*/
import Nav from "./components/Nav/Nav.js";
import Home from  "./components/Home/Home.js";
import Artists from "./components/Artists/Artists.js";
const BASE_URL = "/action-tat-mock";
class App extends Component {
  componentDidMount(){
    const root = document.getElementById("root");
    window.addEventListener("scroll", () => {
      const root_bottom = root.getBoundingClientRect().top;
      if(root_bottom < -100){
        //Set nav logo inside nav
        document.getElementsByClassName("nav-logo")[0].classList.add("nav-logo-inset");
      }else{
        document.getElementsByClassName("nav-logo")[0].classList.remove("nav-logo-inset");
      }
    });
  }
  render() {
    return (
          <Router>
            <div>
              <Nav />
              <Route exact path={`${BASE_URL}`} component={Home} />
              <Route path={`${BASE_URL}/artists`} component={Artists} />
            </div>
          </Router>
    );
  }
}

export default App;
