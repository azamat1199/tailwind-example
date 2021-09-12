import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBchVkcai8SMwBSDB4jJ69A45tpArOFi6g",
  authDomain: "kroxa-shop-8fad2.firebaseapp.com",
  projectId: "kroxa-shop-8fad2",
  storageBucket: "kroxa-shop-8fad2.appspot.com",
  messagingSenderId: "483772053712",
  appId: "1:483772053712:web:5f66c024ed939b049b86d5",
  measurementId: "G-V13GZHNH9J",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const auth = firebase.auth();

export { app as default, db, auth };
