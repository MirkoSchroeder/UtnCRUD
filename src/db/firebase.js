import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtF7o5FVzEKMv38SNvCjLb9aFB_Wc0qHg",
  authDomain: "react-utn-a3038.firebaseapp.com",
  projectId: "react-utn-a3038",
  storageBucket: "react-utn-a3038.appspot.com",
  messagingSenderId: "153619430722",
  appId: "1:153619430722:web:99a804d48e733fcbb89cdb",
};

firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.firestore = firebase.firestore();

export default firebase;
