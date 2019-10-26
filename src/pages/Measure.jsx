import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter, Link } from "react-router-dom";
// import { FirebaseContext } from '../components/Firebase';
import firebase from '../components/Firebase/firebase'

//Material UI
// import Grid from "@material-ui/core/Grid";
// import Slider from "@material-ui/core/Slider";
// import Button from "@material-ui/core/Button";

//Pages
// import FAQ from ".pages/FAQ"; [set up FAQ page first]
// import User from ".pages/User"; [set up User page first]

//Images
import EzGwhitesmall from "../images/EzGwhitesmall.png";

//Components
import NavBar from "../components/NavBar";

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
  //idk what this does yet
  constructor(props) {
    super(props);
    this.state = {
      data: {
        values: [{ x: 0, y: 0 }]
      }
    };
  }

  componentDidMount() {
    console.log('hello')
    const measureRef = firebase.database().ref('measures');
    console.log(measureRef)
    // measureRef.on("value", function (snapshot) {
    //   console.log('hello')
    //   var hello = snapshot.val()
    //   console.log(hello)
    // });
    firebase.database().ref('/measures').once('value').then(function(snapshot) {
      console.log(Object.keys(snapshot.val()).length)
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
          <div className="UserGreeting"> Hello, (Name)</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Measure);
