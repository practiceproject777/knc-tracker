// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGeovWAjRK0AkVjQRaGxY_DarLghf96aQ",
  authDomain: "knc-tracker.firebaseapp.com",
  projectId: "knc-tracker",
  storageBucket: "knc-tracker.appspot.com",
  messagingSenderId: "966758213319",
  appId: "1:966758213319:web:05948fa604346ef981c0e2",
  measurementId: "G-3WF6FL9N9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);