// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5PB4F-o13myTL5TXOY4DUUiSRDLv4xcI",
  authDomain: "netflixgpt-c0107.firebaseapp.com",
  projectId: "netflixgpt-c0107",
  storageBucket: "netflixgpt-c0107.appspot.com",
  messagingSenderId: "504685876236",
  appId: "1:504685876236:web:c18cf30ff5b04a1c150a29",
  measurementId: "G-SS1L3B04EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();