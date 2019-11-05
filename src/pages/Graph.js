import React, { Component } from "react";
//import { withRouter, Link } from "react-router-dom";
//import { FirebaseContext } from '../components/Firebase';
//import firebase from 'firebase';
import firebase from "../components/Firebase/firebase";
import Plot from 'react-plotly.js';
import RTChart from 'react-rt-chart';

export default class Graph extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
            timestamp:[],
            sensorValue:[],
            heartratebpm: [],
            layout: {datarevision:0, width: 600, height: 500, title: 'ECG plot'},
            revision: 0
         
        };
      }

      componentDidMount() {
        console.log("mounted firebase");
        const measureRef = firebase.database().ref('measures');
        console.log(measureRef);
        // measureRef.on("value", function (snapshot) {
        //   console.log('hello')
        //   var hello = snapshot.val()
        //   console.log(hello)
        // });
        measureRef.on("value", snapshot => {
          let node = snapshot.val();
          console.log(snapshot.val());
          const node_keys = Object.keys(node).map((key) => node[key]);
          console.log(node_keys.length);
          console.log("sensorValue is ", node_keys[node_keys.length - 1].sensorValue);
          console.log("timestamp is", node_keys[node_keys.length - 1].timestamp);

          var sensorValue_read = node_keys[node_keys.length - 1].sensorValue;
          var timestamp_read = node_keys[node_keys.length - 1].timestamp;
          var heartratebpm_read = node_keys[node_keys.length - 1].heartbpm;

          const { timestamp, sensorValue, heartratebpm, layout} = this.state;
          timestamp.push(timestamp_read);
          sensorValue.push(sensorValue_read);
          heartratebpm.push(heartratebpm_read);

          if(timestamp.length >= 500) {
            timestamp.shift();
            sensorValue.shift();
          }

          this.setState( {
            revision: this.state.revision + 1 })   
          layout.datarevision = this.state.revision + 1;
          });
           
        setInterval(() => this.forceUpdate(), 1);
        };
      


    render() {

      var dataplot = {
        date: new Date(),
        sensorValue: this.sensorValue,
      };

      console.log(this.state.timestamp);
      // this.state.data.x = this.state.timestamp;
      // console.log(this.state.data.x);
      // this.state.data.y = this.state.sensorValue;
      // console.log(this.state.data.y)

      return (

        // <RTChart
        //   chart = {chart}
        //   field = {['sensorValue']}
        //   data = {dataplot} />
        <Plot
          data={[ {x: this.state.timestamp, y: this.state.sensorValue,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'} }] }
          layout={this.state.layout}
          revision = {this.state.revision}
        />
      );
    }
}

  