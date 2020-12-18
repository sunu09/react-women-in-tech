import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage.js";
import HomePage from "./components/HomePage.js";
import TopJob from "./components/TopJob";
import NavBarPage from './NavBarPage';
import ActionPage from './components/ActionPage';

class Routes extends Component {
    render(){
      return(
        <Router>
          <NavBarPage />
          <div>
            <hr />
            <Route name="Home" exact path="/" component={HomePage}/> 
            <Route name="TopJob" path="/topjob" component={TopJob}/> 
            <Route name="About" path="/about" component={AboutPage}/>
            <Route name="Action" path="/action" component={ActionPage}/>
          </div>
        </Router>
      );
    }
  }

export default Routes;
