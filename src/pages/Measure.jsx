import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
// import { FirebaseContext } from '../components/Firebase';
import firebase from "../components/Firebase/firebase";

//Pages
// import FAQ from ".pages/FAQ"; [set up FAQ page first]
// import User from ".pages/User"; [set up User page first]

//Images
import EzGwhitesmall from "../images/EzGwhitesmall.png";

//Components
import NavBar from "../components/navbar";

import "./Measure.css";

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
  constructor() {
    super();
    this.state = {
      name: "Cherie", //change to username???how??
      heartratebpm: 92 //to read from database??
    };
  }

  componentDidMount() {
    console.log("hello");
    const measureRef = firebase.database().ref("measures");
    console.log(measureRef);
    // measureRef.on("value", function (snapshot) {
    //   console.log('hello')
    //   var hello = snapshot.val()
    //   console.log(hello)
    // });
    firebase
      .database()
      .ref("/measures")
      .once("value")
      .then(function(snapshot) {
        console.log(Object.keys(snapshot.val()).length);
        var snapshot = snapshot.val();
      });
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
    //add conditionals for bpm
  }
}

export default withRouter(Measure);
