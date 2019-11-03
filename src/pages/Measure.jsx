import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";


//Pages
// import FAQ from ".pages/FAQ"; [set up FAQ page first]
// import User from ".pages/User"; [set up User page first]

//Images
import EzGwhitesmall from "../images/EzGwhitesmall.png";

//Components
import NavBar from "../components/navbar";
import Graph from "./Graph";

import "./Measure.css";
import { array } from "prop-types";

// <FirebaseContext.Consumer>
//     {firebase => {
//       return <div>I've access to Firebase and render something.</div>;
//     }}
//   </FirebaseContext.Consumer>
// const Measure = () => (
//   <div>
//     <FirebaseContext.Consumer>
//       {firebase => <MeasureComponent firebase={firebase} />}
//     </FirebaseContext.Consumer>
//   </div>
// );

class Measure extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "Cherie", //change to username???how??
      heartratebpm: 100 //to read from database??
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
        <div className="NavBar">
          <NavBar></NavBar>
        </div>

        <div className="UserGreeting"> Hello, {this.state.name}</div>

        <center>
          <div className = "Graph">
            <Graph></Graph>
          </div>
          <div>
            <button
              onclick="HeartRate()"
              style={{
                borderRadius: "50%",
                borderColor: "#930c17",
                backgroundColor: "#FF584C",
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
            min="10"
            max="120"
            value={this.state.heartratebpm}
            id="heartrate"
          ></input>
        </center>

        <div className="sliderdescription">
          Status:
          <span>{this.bpmdescription()}</span>
        </div>
      </div>
    );
  }

  heartrateslider() {
    var slider = document.getElementById("heartrate");
  }

  bpmdescription() {
      if (this.state.heartratebpm >= 100) {
        return <span>Dangerously high – consult your doctor</span>;
      } else if (this.state.heartratebpm < 100 && this.state.heartratebpm >= 83) {
        return <span>Very Poor</span>;
      } else if (this.state.heartratebpm < 83 && this.state.heartratebpm >= 76) {
        return <span>Poor</span>;
      } else if (this.state.heartratebpm < 76 && this.state.heartratebpm >= 66) {
        return <span>Average</span>;
      } else if (this.state.heartratebpm < 66 && this.state.heartratebpm >= 60) {
        return <span>Good</span>;
      } else if (this.state.heartratebpm < 60 && this.state.heartratebpm >= 45) {
        return <span>Atheletic</span>;
      } else if (this.state.heartratebpm < 45) {
        return <span>Unusually low – consult your doctor</span>;
      }
  }
}



export default withRouter(Measure);
