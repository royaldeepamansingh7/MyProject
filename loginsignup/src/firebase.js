import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVbqyEJa4lqHsHsNUDJdFagSjgRxuN_lY",
  authDomain: "react-firebase-auth-a47a4.firebaseapp.com",
  projectId: "react-firebase-auth-a47a4",
  storageBucket: "react-firebase-auth-a47a4.appspot.com",
  messagingSenderId: "661620917440",
  appId: "1:661620917440:web:a2dc647013234e9e971925",
  measurementId: "G-HR7WHJZHQF"
};

  const firebaseDB = firebase.initializeApp(firebaseConfig);

  const db = firebaseDB.database().ref();
  const auth = firebase.auth();
  
  
  export { auth, db };