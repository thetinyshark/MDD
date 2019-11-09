import React, { Component } from "react";
import config, { auth, provider } from "../components/Firebase/firebase";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: "",
      heartbpm: "",
      items: [],
      user: null
    };

    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signUpG = this.signUpG.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signUp() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    config
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  signUpG() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  // logout() {
  //     auth.signOut()
  //       .then(() => {
  //         this.setState({
  //           user: null
  //         });
  //       });
  //   }

  // login() {
  //   auth.signInWithPopup(provider)
  //     .then((result) => {
  //       const user = result.user;
  //       this.setState({
  //         user
  //       });
  //     });
  // }

  // firebase.auth().onAuthStateChanged( user =>; {
  //   if (user) { this.userId = user.uid }
  // });

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

  // removeItem(itemId) {
  //   const itemRef = config.database().ref(`/items/${itemId}`);
  //   itemRef.remove();
  // }

  render() {
    return (
      <div className="FormCenter">
        <div className="Greeting">Welcome. Let's get to know you better.</div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="FormField__Input"
            placeholder="Enter your email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="FormField__Input"
            placeholder="Enter your password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <div className="FormField">
          <Link to="/user">
            <button className="FormField__Button" onClick={this.signUp}>
              Sign Up
            </button>
            <button
              onClick={this.signUpG}
              style={{
                position: "relative",
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
            >
              <img
                src="https://www.androidpolice.com/wp-content/uploads/2015/09/nexus2cee_new_google_icon.png"
                width="55px"
                height="55px"
                alt="logo"
              />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default SignUpForm;