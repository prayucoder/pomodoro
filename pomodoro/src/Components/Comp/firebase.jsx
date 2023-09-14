import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqDoWT1dU0-vcT2OEeh-_YY493jrGsDHk",
  authDomain: "pomodoro-auth.firebaseapp.com",
  projectId: "pomodoro-auth",
  storageBucket: "pomodoro-auth.appspot.com",
  messagingSenderId: "933965379240",
  appId: "1:933965379240:web:9119caa913a478bbe2349d",
  measurementId: "G-GCDGLE4LNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};