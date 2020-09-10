import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6vRSDKcQfKx7BGQqAXqEndJMIS4UHUSU",
  authDomain: "clone-with-login-stripe.firebaseapp.com",
  databaseURL: "https://clone-with-login-stripe.firebaseio.com",
  projectId: "clone-with-login-stripe",
  storageBucket: "clone-with-login-stripe.appspot.com",
  messagingSenderId: "164609719537",
  appId: "1:164609719537:web:953ddd01a42575735b3d50",
  measurementId: "G-M97L6G6XL6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
