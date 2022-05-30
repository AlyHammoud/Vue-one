import * as firebase from "firebase/app";
import "firebase/database";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpqyV4ZBI9G--eHq42f7_dICZGn_FoZ74",
  authDomain: "vue-one-aly.firebaseapp.com",
  databaseURL: "https://vue-one-aly-default-rtdb.firebaseio.com/",
  projectId: "vue-one-aly",
  storageBucket: "vue-one-aly.appspot.com",
  messagingSenderId: "1009774026736",
  appId: "1:1009774026736:web:a9f159d30cd385d2f88735",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;