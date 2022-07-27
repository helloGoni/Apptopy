// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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



