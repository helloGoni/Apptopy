// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
//import { getAnalytics } from "firebase/analytics";
//import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCOlDMor_cVoJytSKJ4M0fdLjnFaexXii0",
  authDomain: "apptopy-64236.firebaseapp.com",
  projectId: "apptopy-64236",
  databaseURL: 'https://apptopy-64236-default-rtdb.firebaseio.com/', //dfdfdffdffdf
  storageBucket: "apptopy-64236.appspot.com",
  messagingSenderId: "979438025206",
  appId: "1:979438025206:web:5eab465327d3c39f5aefd7",
  measurementId: "G-BBDTB310BX"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


/*
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);

export const SignUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}
export const SignIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export function SubscribeAuth(callback) {
  return auth().onAuthStateChanged(callback);
}
export function SignOut() {
  return auth().signOut();
}

*/

