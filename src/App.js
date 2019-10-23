import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Signup from "./pages/Signup";
import Measure from "./pages/Measure";
//Pages
// import SignUpForm from "./pages/SignUpForm";
// import LogInForm from "./pages/LogInForm";
// import Measure from "./pages/Measure";

// import "./App.css";

//Images
// import EzGwhitesmall from "./images/EzGwhitesmall.png";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Signup} />
        <Route path="/measure" component={Measure}></Route>
      </Router>
    );
  }
}

export default App;
