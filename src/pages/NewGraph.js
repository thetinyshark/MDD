import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";


const client = new W3CWebSocket('ws://127.0.0.1:8000');
const contentDefaultMessage = "Start writing your document here";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsers: [],
      userActivity: [],
      username: null,
      text: ''
    };
  }




 componentWillMount() {
   client.onopen = () => {
     console.log('WebSocket Client Connected');
   };
   client.onmessage = (message) => {
     const dataFromServer = JSON.parse(message.data);
     const stateToChange = {};
     if (dataFromServer.type === "userevent") {
       stateToChange.currentUsers = Object.values(dataFromServer.data.users);
     } else if (dataFromServer.type === "contentchange") {
       stateToChange.text = dataFromServer.data.editorContent || contentDefaultMessage;
     }
     stateToChange.userActivity = dataFromServer.data.userActivity;
     this.setState({
       ...stateToChange
     });
   };
 }


  render() {
    const {
      username
    } = this.state;
    return (
      <Plot/>
    );
  }
}

export default App;