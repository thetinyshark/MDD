import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Chart from "chart.js";

//Pages
// import FAQ from ".pages/FAQ"; [set up FAQ page first]
// import User from ".pages/User"; [set up User page first]

//Images
import EzGwhitesmall from "../images/EzGwhitesmall.png";

//Components
//import NavBar from "../components/NavBar";

import "./Measure.css";

class Measure extends Component {
  constructor() {
    super();
    this.state = {
      name: "Cherie", //change to username???how??
      heartratebpm: 60
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="Header">
            <center>
              <img src={EzGwhitesmall} width="15%" height="auto"></img>
            </center>
          </div>
        </div>

        <div className="UserGreeting"> Hello, {this.state.name}</div>

        <center>
          <div>
            <button
              onclick="HeartRate()"
              style={{
                borderRadius: "50%",
                borderColor: "#930c17",
                backgroundColor: "#dc1222",
                color: "white",
                margin: "20px",
                fontSize: 30,
                display: "block",
                height: "200px",
                width: "200px",
                outline: "none"
              }}
            >
              <span>{this.state.heartratebpm}</span> bpm
            </button>
          </div>
        </center>

        <center>
          <span>{this.heartrateslider()}</span>
          <input
            className="slider"
            type="range"
            min="1"
            max="100"
            value={this.state.heartratebpm}
            id="heartrate"
          ></input>
        </center>
      </div>
    );
  }

  heartrateslider() {
    var slider = document.getElementById("heartrate");
  }
}

export default withRouter(Measure);
