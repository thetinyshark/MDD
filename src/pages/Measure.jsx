import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import firebase from "../components/Firebase/firebase";


//Pages
// import FAQ from ".pages/FAQ"; [set up FAQ page first]
// import User from ".pages/User"; [set up User page first]

//Images
import EzGwhitesmall from "../images/EzGwhitesmall.png";

//Components
import NavBar from "../components/navbar";
import Graph from "./Graph";

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
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      heartbpm: "",
      items: [],
      user: null 
    };

  
  }

  componentDidMount() {
    //const itemsRef = firebase.database().ref(`items/${this.userId}`);
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];

      const rootRef = firebase.database().ref().child("measures");
      rootRef.orderByChild("timestamp").limitToLast(1).on("value", snapshot => {
          console.log(snapshot.val());
          var uwuobject = snapshot.val();
          var uwuobject2 = Object.keys(uwuobject);
          var uniqkey = uwuobject2[0]; //get the pushID
          console.log("key");
          console.log(uniqkey);
          //console.log(snapshot.val().child(uwuobject2[0]).height)
          let node = snapshot.val();
          var bignode = Object.keys(node).map(key => node[key]);
          console.log(bignode[0].sensorValue);

          this.setState({
            heartbpm: bignode[0].sensorValue, //changes the HTML to the largest height
            entry: uniqkey //can't show the uniq pushID in the HTML using bignode[0]
          });
        });

      this.setState({
        items: newState
      });
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

        <div className="UserGreeting"> Hello {this.state.name}</div>

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
              <span>{this.state.heartbpm}</span> bpm
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
            value={this.state.heartbpm}
            id="heartrate"
          ></input>
        </center>

        <div className="sliderdescription">
          Status:
          <span> {this.bpmdescription()}</span>
        </div>
      </div>
    );
  }

  heartrateslider() {
    var slider = document.getElementById("heartrate");
  }

  bpmdescription() {
      if (this.state.heartbpm >= 100) {
        return <span>Dangerously high – consult your doctor</span>;
      } else if (this.state.heartbpm < 100 && this.state.heartbpm >= 83) {
        return <span>Very Poor</span>;
      } else if (this.state.heartbpm < 83 && this.state.heartbpm >= 76) {
        return <span>Poor</span>;
      } else if (this.state.heartbpm < 76 && this.state.heartbpm >= 66) {
        return <span>Average</span>;
      } else if (this.state.heartbpm < 66 && this.state.heartbpm >= 60) {
        return <span>Good</span>;
      } else if (this.state.heartbpm < 60 && this.state.heartbpm >= 45) {
        return <span>Atheletic</span>;
      } else if (this.state.heartbpm < 45) {
        return <span>Unusually low – consult your doctor</span>;
      }
  }
}

export default withRouter(Measure);
