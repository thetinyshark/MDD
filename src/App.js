import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Measure from "./pages/Measure";

// import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/measure" component={Measure}></Route>
      </Router>
    );
  }
}
