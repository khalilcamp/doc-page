// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_6lo2coj8j84SVs9q2cpcf_gZUsdKBiM",
  authDomain: "grafana-docs-c69e9.firebaseapp.com",
  projectId: "grafana-docs-c69e9",
  storageBucket: "grafana-docs-c69e9.firebasestorage.app",
  messagingSenderId: "55096805920",
  appId: "1:55096805920:web:46c5e8b5f43707a6eeca45",
  measurementId: "G-JW88GJXE3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);