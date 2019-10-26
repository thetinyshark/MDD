import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

// import Firebase, { FirebaseContext } from './components/Firebase';

// ReactDOM.render(
//   <FirebaseContext.Provider value={new Firebase()}>
//     <App />
//   </FirebaseContext.Provider>,
//
// document.getElementById("root"));

ReactDOM.render(
    <App />,

document.getElementById("root"));
registerServiceWorker();
