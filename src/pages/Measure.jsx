import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter, Link } from "react-router-dom";

//Material UI
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

//Pages
// import FAQ from ".pages/FAQ"; [set up FAQ page first]
// import User from ".pages/User"; [set up User page first]

//Images
import EzGwhitesmall from "../images/EzGwhitesmall.png";

//Components
import NavBar from "../components/NavBar";

import "./Measure.css";

class Measure extends Component {
  //idk what this does yet
  constructor(props) {
    super(props);
    this.state = {
      data: {
        values: [{ x: 0, y: 0 }]
      }
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
          <div className="UserGreeting"> Hello, (Name)</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Measure);
