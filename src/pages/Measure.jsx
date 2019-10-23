import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter, Link } from "react-router-dom";

//Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

//Pages
// import FAQ from ".pages/FAQ"; [set up FAQ page first]
// import User from ".pages/User"; [set up User page first]

//Components
import NavBar from "../components/NavBar";

class Measure extends Component {
  state = {
    loading: true,
    amount: 15000,
    period: 3,
    start: 0,
    monthlyInterest: 0,
    totalInterest: 0,
    monthlyPayment: 0,
    totalPayment: 0,
    data: []
  };

  render() {
    return (
      <div>
        Hello World
        <div>hihi</div>
      </div>
    );
  }
}

export default withRouter(Measure);
