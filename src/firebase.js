// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the auth service

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrQp9bow95B9B9gBMD5grtya8Sr6ot0s0",
  authDomain: "indie-slide.firebaseapp.com",
  projectId: "indie-slide",
  storageBucket: "indie-slide.appspot.com",
  messagingSenderId: "921791028450",
  appId: "1:921791028450:web:05c0099b991262d6ac12bb",
  measurementId: "G-1W2Z285L8N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize the auth service

export { app, analytics, auth }; // Export Firebase app, analytics, and auth service
