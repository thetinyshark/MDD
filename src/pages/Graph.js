import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { FirebaseContext } from '../components/Firebase';
//import firebase from 'firebase';
import firebase from "../components/Firebase/firebase";
import Plot from 'react-plotly.js';
import RTChart from 'react-rt-chart';

export default class Graph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timestamps:[100,200,300],
            sensorValues:[2,4,6],
            heartratebpm: 0
         
        };
      }

      componentDidMount() {
        console.log("mounted firebase");
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
            this.setState({
                sensorValues: snapshot.val().sensorValue,
                timestamps: snapshot.val().timestamp
                });   
            
            // sensorValues.push(snapshot.val().sensorValue);
            // timestamps.push(snapshot.val().timestamp); 
    
            // console.log(Object.keys(snapshot.val()).length);
            // snapshot.forEach((child) => {
            //   console.log(child.key, child.val());
            //   y.push(child.val());
    
            }); 
        setInterval(() => this.forceUpdate(), 10);
        };


    render() {

        var data = {
           // date = new.Date(),
            sensorValues: this.sensorValues
        };
        
      return (
        // <RTChart
        //   field = {['sensorValues']}
        //   data = {data} />
        <Plot
          data={[
            {
              x: this.timestamps,
              y: this.sensorValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
            {type: 'line', x: this.timestamps, y: [4,5,6]},
          ]}
          layout={{width: 320, height: 240, title: 'ECG plot'}}
        />
      );
    }
}

  