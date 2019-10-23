import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

//Pages
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

import "../App.css";

//Images
import EzGwhitesmall from "../images/EzGwhitesmall.png";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      login_state: false,
      signup_state: false
    };
  }

  render() {
    return (
      <div className="FrontPage">
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
            <button
              onClick={this.setlogin}
              style={{
                borderRadius: "5px",
                borderColor: "#724c4c90",
                backgroundColor: "#724c4c80",
                color: "white",
                padding: "10px 25px",
                fontSize: 14,
                display: "inline-block"
              }}
            >
              Log In
            </button>{" "}
            |{" "}
            <button
              onClick={this.setsignup}
              style={{
                borderRadius: "5px",
                borderColor: "#724c4c90",
                backgroundColor: "#724c4c80",
                color: "white",
                padding: "10px 25px",
                fontSize: 14,
                display: "inline-block"
              }}
            >
              Sign Up
            </button>
          </div>

          {this._render_login()}
          {this._render_signup()}
        </div>
      </div>
    );
  }

  setlogin = () => {
    this.setState({ login_state: true, signup_state: false });
  };

  setsignup = () => {
    this.setState({ login_state: false, signup_state: true });
  };

  _render_login() {
    console.log("Annyeong Haseyo");
    return this.state.login_state ? (
      <div>
        <LogInForm />
      </div>
    ) : (
      <div></div>
    );
  }

  _render_signup() {
    return this.state.signup_state ? (
      <div>
        <SignUpForm />
      </div>
    ) : (
      <div></div>
    );
  }
}
