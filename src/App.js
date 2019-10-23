import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Measure from "./pages/Measure";


// import "./App.css";

//Images
// import EzGwhitesmall from "./images/EzGwhitesmall.png";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/measure" component={Measure}></Route>
      </Router>
    );
  }
}

export default App;
