import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyA75vdEuA63E8bxKfgGLJExlIG-EEhiXK4",
  authDomain: "personal-authdev.firebaseapp.com",
  projectId: "personal-authdev",
  storageBucket: "personal-authdev.appspot.com",
  messagingSenderId: "225183711043",
  appId: "1:225183711043:web:37beafa2ca4944a8da39f6",
});

export const auth = app.auth();
export default app;
