import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

import SignUpForm from "./pages/SignUpForm";
import LogInForm from "./pages/LogInForm";
import Measure from "./pages/Measure";

import "./App.css";

import EzGwhitesmall from "./images/EzGwhitesmall.png";

class App extends Component {
  render() {
    return (
      <Router basename="/EzG/">
        <div className="App">
          <div className="Sidebar">
            <div className="App__Aside"></div>
            <img src={EzGwhitesmall} alt="EzGwhitesmall"></img>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/log-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Log In
              </NavLink>
              <NavLink
                exact
                to="/sign-up"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/log-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Log In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/sign-up"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/sign-up" component={SignUpForm}></Route>
            <Route path="/log-in" component={LogInForm}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
