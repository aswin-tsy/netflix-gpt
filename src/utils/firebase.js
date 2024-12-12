// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMj5cq5nVM89lm-_zXorLyVSPZs3XJxRI",
  authDomain: "netflixgpt-3f944.firebaseapp.com",
  projectId: "netflixgpt-3f944",
  storageBucket: "netflixgpt-3f944.firebasestorage.app",
  messagingSenderId: "345165152566",
  appId: "1:345165152566:web:d3acf97f033c697ca27397",
  measurementId: "G-ZCPCS88ETB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();