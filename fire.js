import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQqKTxsVome6dmSbxfpDGMBsUxCwszpAM",
    authDomain: "login-dfcd6.firebaseapp.com",
    projectId: "login-dfcd6",
    storageBucket: "login-dfcd6.appspot.com",
    messagingSenderId: "112779162061",
    appId: "1:112779162061:web:ad5d8aaeb2fe4fc9eb1484"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;