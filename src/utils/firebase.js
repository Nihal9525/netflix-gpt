// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3x9XeMzB0I5qXZqFcPEvRvitwj9qKibY",
  authDomain: "netflixgpt-6a147.firebaseapp.com",
  projectId: "netflixgpt-6a147",
  storageBucket: "netflixgpt-6a147.appspot.com",
  messagingSenderId: "668183795982",
  appId: "1:668183795982:web:da083652cde3172c2c9f5f",
  measurementId: "G-NW9475JSVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();