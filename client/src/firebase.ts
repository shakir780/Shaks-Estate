// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shaks-estate.firebaseapp.com",
  projectId: "shaks-estate",
  storageBucket: "shaks-estate.appspot.com",
  messagingSenderId: "1044265103914",
  appId: "1:1044265103914:web:f9960c38073e2999124953",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
