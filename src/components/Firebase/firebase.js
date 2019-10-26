import firebase from 'firebase';
// require('dotenv').config({path: '.env'})
//
// console.log(process.env);
const config = {
  apiKey: 'AIzaSyBdpbGW0linYYbRvO1UquX7D8npEyarOo4',
  authDomain: 'esp8266test-cac52.firebaseapp.com',
  databaseURL: "https://esp8266test-cac52.firebaseio.com",
  projectId: "esp8266test-cac52",
  storageBucket: "esp8266test-cac52.appspot.com",
  messagingSenderId: "146384947058",
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

firebase.initializeApp(config)

export default firebase;
