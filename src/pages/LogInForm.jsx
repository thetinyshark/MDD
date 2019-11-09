import React, { Component } from "react";
import { Link } from "react-router-dom";
import config, {auth, provider} from '../components/Firebase/firebase';

class LogInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      user: null
    };

    this.login = this.login.bind(this);
    this.loginG = this.loginG.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //loginG() {
    loginG=(e)=>{
      e.preventDefault()
      auth.signInWithPopup(provider) 
        .then((result) => {
          const user = result.user;
          this.setState({
            user
          });
        });
    }
  
  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });

    if (config.auth().currentUser !== null) 
      console.log("user id: " + config.auth().currentUser.uid);
  }

  //login() {
    login=(e)=>{
    e.preventDefault()
   const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
   config.auth().signInWithEmailAndPassword(email, password)
   .then((result) => {
    const user = result.user;
    this.setState({
      user
    });
  });
  }
  //    .then((u) => {
  //      console.log('Successfully Logged In');
  //     })
  //    .catch((err) => {
  //       console.log('Error: ' + err.toString());
  //     })
  // }

  render() {
    return (
      <div className="FormCenter">
        <div className="Greeting">
        Welcome back!
        </div>
        <form onSubmit={this.handleSubmit} className="FormFields">
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
              value={this.state.email}
              onChange={this.handleChange}
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
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          
          <div className="FormField">
            <Link to="/measure">
              <button className="FormField__Button"onClick={this.login}>Log In</button>{" "}
              <button onClick={this.loginG}style={{position:"relative", backgroundColor:"transparent", borderColor:"transparent"}}><img src="https://www.androidpolice.com/wp-content/uploads/2015/09/nexus2cee_new_google_icon.png" width="55px" height="55px" alt="logo"/></button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}


export default LogInForm;