// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  doc, setDoc  , getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyA7QOc_W2-UOZeFQJST09T6ldH7U8w0G9Y",
  authDomain: "marshadie-app.firebaseapp.com",
  projectId: "marshadie-app",
  storageBucket: "marshadie-app.appspot.com",
  messagingSenderId: "404874989771",
  appId: "1:404874989771:web:b551ccd04d9ce7fd278b4e",
  measurementId: "G-78ESKWTFYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export {setDoc , db , doc}