import React, { Component } from "react";

//Pages
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

import "./Home.css";

//Images
import EzGwhitesmall from "../images/EzGwhitesmall.png";

export default class Home extends Component {
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
          <img src={EzGwhitesmall} width="100%" height="auto"></img>
        </div>
        <div className="App__Form">
          <div className="FormTitle">
            <button
              onClick={this.setlogin}
              style={{
                borderRadius: "5px",
                borderColor: "#724c4c90",
                backgroundColor: "#724c4c80",
                color: "white",
                padding: "10px 25px",
                margin: "10px",
                fontSize: 14,
                display: "inline-block"
              }}
            >
              LOG IN
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
                margin: "10px",
                fontSize: 14,
                display: "inline-block"
              }}
            >
              SIGN UP
            </button>
          </div>

          {this._render_login()}
          {this._render_signup()}
        </div>
      </div>
    );
  }

  setlogin = () => {
    this.setState({ login_state: true, signup_state: false }, //this.state.login_state?
      () => {
        console.log('Callback', this.state.login_state)
      }); 
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
