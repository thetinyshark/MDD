import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
// import { FirebaseContext } from '../components/Firebase';
import firebase from "../components/Firebase/firebase";
import Plot from 'react-plotly.js';

export default class Graph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timestamps:[],
            sensorValues:[]
         
        };
      }


    render() {
        const {timestamps, y} = this.props;
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
            {type: 'line', x: [timestamps], y: [y]},
          ]}
          layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
        />
      );
    }
}

  