import firebase from 'firebase';
//import 'firebase';  
// require('dotenv').config({path: '.env'})
//
// console.log(process.env);
const config = {
  apiKey: "AIzaSyBdpbGW0linYYbRvO1UquX7D8npEyarOo4",
    authDomain: "esp8266test-cac52.firebaseapp.com",
    databaseURL: "https://esp8266test-cac52.firebaseio.com",
    projectId: "esp8266test-cac52",
    storageBucket: "esp8266test-cac52.appspot.com",
    messagingSenderId: "146384947058",
    appId: "1:146384947058:web:dd7da7f7e53040357a7feb",
    measurementId: "G-XWKH219GFX",
};

// class Firebase {
//   constructor() {
//     app.initializeApp(config);
//   }
//
//   // measureRef() {
//   //   const databaseRef = app.database().ref();
//   //   return databaseRef.child('measures')
//   // }
// }
firebase.initializeApp(config);
export default firebase;
