// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8HqfbopcV-JFsm4AAKldseisXWKOMo78",
  authDomain: "touch-tech-4c00c.firebaseapp.com",
  databaseURL:
    "https://touch-tech-4c00c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "touch-tech-4c00c",
  storageBucket: "touch-tech-4c00c.appspot.com",
  messagingSenderId: "190156703380",
  appId: "1:190156703380:web:8252a5629f27f070219681",
  measurementId: "G-7W268SKY4M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
