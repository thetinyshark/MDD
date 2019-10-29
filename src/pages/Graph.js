import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
// import { FirebaseContext } from '../components/Firebase';
import firebase from "../components/Firebase/firebase";
import Plot from 'react-plotly.js';

export default class Graph extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        };
      }

    componentDidMount() {
        console.log("hello");
        const y = [];
        const timestamps = [];
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
            y.push(snapshot.val().sensorValue);
            timestamps.push(snapshot.val().timestamp); 
    
            // console.log(Object.keys(snapshot.val()).length);
            // snapshot.forEach((child) => {
            //   console.log(child.key, child.val());
            //   y.push(child.val());
    
            });
            
            
          };

    render() {
      return (
        <Plot
          data={[
            {
              x: {timestamps},
              y: {y},
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
          ]}
          layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
        />
      );
    }
}

  