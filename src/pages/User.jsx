import React, { Component } from "react";
import config, { auth, provider } from "../components/Firebase/firebase";
import { withRouter, Link } from "react-router-dom";

//Images
import EzGwhitesmall from "../images/EzGwhitesmall.png";

//Components
import NavBar from "../components/navbar";

class User extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      heartbpm: "",
      items: [],
      user: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //const itemsRef = firebase.database().ref(`items/${this.userId}`);
    const itemsRef = config
      .database()
      .ref("user id: " + config.auth().currentUser.uid);
    const item = {
      user: this.state.name,
      age: this.state.age,
      heartbpm: ""
    };
    itemsRef.push(item);
    this.setState({
      name: "",
      age: "",
      heartbpm: ""
    });
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });

    // if (config.auth().currentUser !== null)
    //   console.log("user id: " + config.auth().currentUser.uid);

    config.auth().onAuthStateChanged(user => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid);
      } else {
        // User not logged in or has just logged out.
      }
    });

    //const itemsRef = firebase.database().ref(`items/${this.userId}`);
    const itemsRef = config
      .database()
      .ref("user id: " + config.auth().currentUser.uid);
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name,
          age: items[item].age,
          heartbpm: ""
        });
      }
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

        <form onSubmit={this.handleSubmit}>
          <div
            className="FormField"
            style={{ marginTop: "10px", marginLeft: "20px" }}
          >
            <label className="User_FormField__Label" htmlFor="name">
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              name="name"
              placeholder="Enter your full name"
              onChange={this.handleChange}
              value={this.state.name}
              style={{ color: "black" }}
            />
          </div>
          <div className="FormField" style={{ marginLeft: "20px" }}>
            <label className="User_FormField__Label" htmlFor="age">
            </label>
            <input
              type="text"
              id="age"
              className="FormField__Input"
              name="age"
              placeholder="Enter your age (in numericals)"
              onChange={this.handleChange}
              value={this.state.age}
              style={{ color: "black" }}
            />
          </div>
          <div className="FormField">
            <button
              className="FormField__Button"
              style={{ marginLeft: "20px" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(User);